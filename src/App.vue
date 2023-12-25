<template>
  <Nav></Nav>
  <router-view></router-view>
  <!-- <Footer></Footer> -->
</template>

<script setup>
  import { useStore } from 'vuex'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import { initializeApp } from 'firebase/app'
  // import { getAnalytics } from 'firebase/analytics'
  import { getAuth } from 'firebase/auth'
  import { getDatabase, ref as dbRef, set as dbSet, get, child } from 'firebase/database'
  import { DB_PATH_USER, findUser, saveUser } from '@/utils'

  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'

  dayjs.extend(utc)
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
  const auth = getAuth(app)
  const database = getDatabase(app)
  // getAnalytics(app)

  auth.onAuthStateChanged(async (currentUser) => {
    if (!currentUser) {
      store.commit(`setUser`, false)
    } else {
      store.commit(`setUID`, currentUser.uid)

      const user = await store.dispatch(`findUser`)

      const currentTime = dayjs.utc().format(`YYYY-MM-DD HH:mm:ss`)
      let updateUserData = {}
      
      if (!user) {
        updateUserData = {
          ign: ``,
          active: false,
          // email: auth.currentUser.email,
          created_at: currentTime,
          last_signed_in_at: currentTime
        }
      } else {
        updateUserData = {...user}
        updateUserData.last_signed_in_at = currentTime
      }

      saveUser(updateUserData)
      store.commit(`setUser`, user)
    }
  })
</script>
