<template>
  <Nav></Nav>

  <router-view></router-view>
  <!-- <div>
    <div v-if="user">{{ user.displayName }}</div>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <button @click="getData">Get Data</button>

    <button v-if="!user" @click="onSignIn">Sign In</button>
    <button v-else @click="onSignOut">Sign Out</button>
  </div> -->
</template>

<script setup>
  import { useStore } from 'vuex'
  import { initializeApp } from 'firebase/app'
  import { getAnalytics } from 'firebase/analytics'
  import { getAuth } from 'firebase/auth'
  import { getDatabase, ref as dbRef, set as dbSet, onValue } from 'firebase/database'

  import Nav from '@/components/Nav.vue'

  const store = useStore()
  // const firebase = computed(() => store.state.firebase)
  
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.FIREBASE_DATABASE_URL
  }

  const app = initializeApp(firebaseConfig)
  store.commit(`setFirebase`, app)

  getAnalytics(app)

  const auth = getAuth(app)
  store.commit(`setAuth`, auth)

  auth.onAuthStateChanged(user => {
    store.commit(`setAuth`, auth)
    store.commit(`setUser`, user)
  })
  
  const database = getDatabase(app)

  if (auth.currentUser) {
    dbSet(dbRef(database, `/users/${auth.currentUser.uid}`), {
      in_game_name: `Minnerva`,
      date: {
        first_name: `A`,
        last_name: [`T`, `B`]
      }
    })
  }

  const getData = () => {
    const starCountRef = dbRef(database, `/users/${auth.currentUser.uid}/date/last_name`)
    onValue(starCountRef, snapshot => {
      const data = snapshot.val()
      console.log(data)
    })
  }
</script>
