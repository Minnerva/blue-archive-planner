<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script setup>
  import { useStore } from 'vuex'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import { initializeApp } from 'firebase/app'
  import { getAnalytics } from 'firebase/analytics'
  import { getAuth } from 'firebase/auth'
  import { getDatabase } from 'firebase/database'

  import Nav from '@/components/Nav.vue'

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
  getDatabase(app)
  getAnalytics(app)

  auth.onAuthStateChanged(async (currentUser) => {
    if (!currentUser && store.state.user === null) {
      // prevent infinite calling on setUserListen when same user sign in, sign out, and then sign in again
      window.location.reload()
    } else if (!currentUser) {
      store.commit(`setUser`, null)
    } else {
      store.commit(`setUID`, currentUser.uid)
      let updateUserData = {}
      const currentTime = dayjs.utc().format(`YYYY-MM-DD HH:mm:ss`)
      store.dispatch(`setUserListen`, (user) => {
        if (!store.state.user) {
          if (!user) {
            updateUserData = {
              ign: ``,
              active: true,
              created_at: currentTime,
              last_signed_in_at: currentTime
            }
          } else {
            updateUserData = {...user}
            updateUserData.last_signed_in_at = currentTime
          }

          store.dispatch(`saveUser`, updateUserData)
        }

        // For some reason when user is null (new user just signed in, null data will run after the one with data)
        if (user) {
          store.commit(`setUser`, user)
        }
      })
    }
  })
</script>
