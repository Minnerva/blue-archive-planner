<template>
  <form @submit.prevent="onSignIn">
    <InputBase
      class="mb-2"
      label="Username"
      v-model="sign_in_form.username"
      required
    ></InputBase>
    <InputBase
      class="mb-4"
      label="Password"
      type="password"
      v-model="sign_in_form.password"
      required
    ></InputBase>
    <ButtonBase :loading submit>Sign In</ButtonBase>

    <hr class="my-4">

    <ButtonBase
      class="relative"
      @click="onSignInWithGoogle"
      :loading
    >
      <img
        class="absolute inset-y-0 left-0 m-auto max-h-8"
        :src="IconGoogle"
      >
      <div>Sign in with Google</div>
    </ButtonBase>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'
  import IconGoogle from '@/assets/icons/google.png'

  const loading = ref(false)
  const sign_in_form = ref({
    username: ``,
    password: ``
  })

  const resetForm = () => {
    sign_in_form.value = {
      username: ``,
      password: ``
    }
  }

  const onSignIn = () => {
    loading.value = true
    const data = sign_in_form.value

    const auth = getAuth()
    signInWithEmailAndPassword(auth, `${data.username}@fake.com`, data.password)
    .then(() => {})
    .catch(err => {
      console.log(err.code)
      console.log(err.message)

      if (err.code === `auth/invalid-credential`) {
        window.alert(`Invalid Credential`)
      } else {
        window.alert(`Something went wrong`)
      }
    })
    .finally(() => {
      loading.value = false
    })
  }

  const onSignInWithGoogle = () => {
    loading.value = true
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
    .then(() => {})
    .catch(err => {
      console.log(err.code)
      console.log(err.message)

      window.alert(`Something went wrong`)
    })
    .finally(() => {
      loading.value = false
    })
  }

  defineExpose({
    resetForm
  })
</script>