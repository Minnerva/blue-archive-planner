<template>
  <div class="w-full h-14 bg-white shadow md:px-4 sm:px-6 px-4 sticky top-0 z-50">
    <div class="flex h-full items-center">
      <div class="flex-none w-14 lg:w-24">
        <img :src="Logo">
      </div>
      <div class="flex-1">
        <span class="ml-3 text-xs">Version: 1.1.1 {{ isDevMode ? `(Dev Mode)` : `` }}</span>
      </div>
      <!-- <div class="flex-1">
        Menu
      </div> -->
      <div class="flex-1 flex justify-end items-center">
        <span v-if="user" class="mr-3 truncate max-w-52" :title="user.ign">{{ user.ign }}</span>

        <div class="w-20">
          <!-- <button v-if="!user" @click="onSignIn" class="bg-white w-full p-1 border rounded-lg">Sign In</button>
          <button v-else @click="onSignOut" class="bg-white w-full p-1 border rounded-lg">Sign Out</button> -->
          <button v-if="user" @click="onSignOut" class="bg-white w-full p-1 border rounded-lg">Sign Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
  import Logo from '@/assets/logo.png'

  const store = useStore()
  const isDevMode = !!process.env.FIREBASE_DATABASE_PREFIX
  const user = computed(() => store.state.user)

  const onSignIn = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
    .then(result => {})
    .catch(err => {
      console.log(err)
    })
  }

  const onSignOut = () => {
    const auth = getAuth()
    
    signOut(auth)
      .then(result => {})
      .catch(err => {
        console.log(err)
      })
  }
</script>
