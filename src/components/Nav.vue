<template>
  <div class="w-full h-12 md:px-8 sm:px-6 px-4 sticky top-0 border-b border-neutral-300">
    <div class="flex h-full items-center">
      <div class="flex-none w-14">Logo</div>
      <div class="flex-1">Menu</div>
      <div class="flex-none w-20">
        <button v-if="!user" @click="onSignIn" class="bg-white w-full p-1 border rounded-lg">Sign In</button>
        <button v-else @click="onSignOut" class="bg-white w-full p-1 border rounded-lg">Sign Out</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

  const store = useStore()
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
