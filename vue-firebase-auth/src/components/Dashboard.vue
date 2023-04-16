<template>
    <h2>User dashboard</h2>
    <h3>Welcome</h3>
    <h3>Name: {{ name }}</h3>
    <h3>Photo: {{ photoURL }}</h3>
    <h3>UserID: {{ id }}</h3>
    <h3>Email: {{ email }}</h3> <button @click="send_verification_email">Verify</button>
    <h3>IsVerified: {{ is_email_verified }}</h3>
    <br />
    <button @click="signOut">Sign out</button>
</template>
  
<script>
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";

export default {


    data() {
        return {
            name: '',
            photoURL: '',
            id: '',
            email: '',
            is_email_verified: false,
        }
    },
    methods: {
        signOut() {
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                alert("Signed out")
            }).catch((error) => {
                // An error happened.
                alert("Failed to sign out: " + error.message)
            });
        },
        send_verification_email() {
            const auth = getAuth();
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    // ...
                    alert("Verification email sent!")
                });
        }
    },
    mounted: function () {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;

            this.id = uid;
            this.email = email;
            this.is_email_verified = emailVerified;

            this.name = displayName;
            this.photoURL = photoURL;
        }
    }
}
</script>