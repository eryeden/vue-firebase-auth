<template>
    <div class="signup">
        <h2>Sign up</h2>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signup">Register</button>
        <p>Do you have an account?
            <router-link to="/signin">sign in now!!</router-link>
        </p>
    </div>
</template>
  
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'Signup',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        signup() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.username, this.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    alert('Create account: ', userCredential.email)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(error.message)
                });

        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.signup {
    margin-top: 20px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center
}

input {
    margin: 10px 0;
    padding: 10px;
}
</style>