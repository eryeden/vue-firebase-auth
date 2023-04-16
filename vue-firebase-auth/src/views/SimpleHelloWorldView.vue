<script>
import { getAuth, signOut } from '@firebase/auth';

export default {
  data() {
    return {
      message: 'Hello World!'
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
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <br />
  <a href="/about"> about </a>
  <br />
  <a href="/signin">signin</a>
  <br />
  <a href="/dashboard">userpage</a>
  <br />
  <button @click="signOut">Sign out</button>
</template>
