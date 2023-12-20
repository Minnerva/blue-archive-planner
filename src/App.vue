<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <button @click="onSignIn">Sign In</button>
    <button @click="onSignOut">Sign Out</button>
  </div>
</template>

<script setup>
  import { initializeApp } from 'firebase/app'
  import { getAnalytics } from 'firebase/analytics'
  import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  }

  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  const auth = getAuth(app)
  console.log(auth)

  const provider = new GoogleAuthProvider()

  const onSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const onSignOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
