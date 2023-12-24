<template>
  <Nav></Nav>
  <router-view></router-view>
  <!-- <Footer></Footer> -->
</template>

<script setup>
  import { useStore } from 'vuex'
  import { initializeApp } from 'firebase/app'
  import { getAnalytics } from 'firebase/analytics'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { getDatabase, ref as dbRef, set as dbSet, onValue } from 'firebase/database'
  import { DB_PATH_USER } from '@/utils'

  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'

  const store = useStore()
  
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
    
    if (!auth.currentUser) {
      console.log(`Sign Out`)
      store.commit(`setAuth`, false)
      store.commit(`setUser`, false)
    } else {
      const dbPath = `${DB_PATH_USER}/${auth.currentUser.uid}`
      const database = getDatabase(app)

      const dbUser = dbRef(database, dbPath)
      onValue(dbUser, snapshot => {
        const user = snapshot.val()
        
        if (!user) {
          dbSet(dbRef(database, dbPath), {
            in_game_name: ``,
            email: auth.currentUser.email,
            active: false
          })
        }

        store.commit(`setUser`, user)
      })
    }
  })
</script>
