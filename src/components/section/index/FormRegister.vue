<template>
  <form @submit.prevent="onSignUp">
    <InputBase
      class="mb-2"
      label="Username"
      v-model="register_form.username"
      hint="*only english letters and numeric are allowed. 4-20 characters."
      required
    ></InputBase>
    <InputBase
      class="mb-4"
      label="Password"
      type="password"
      v-model="register_form.password"
      hint="*6-20 characters."
      required
    ></InputBase>
    <InputBase
      class="mb-4"
      label="Confirm Password"
      type="password"
      v-model="register_form.confirm_password"
      required
    ></InputBase>

    <hr class="my-4">

    <InputBase
      class="mb-4"
      label="Discord or In Game Name"
      v-model="register_form.ign"
      hint="*4-20 characters."
      required
    ></InputBase>

    <hr class="my-4">
    
    <div class="text-xs text-red-500 mb-3">
      *Warning - You will not be able to recover your account if you lose your password.
    </div>
    <ButtonBase :loading submit>Sign Up</ButtonBase>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'

  const store = useStore()
  const loading = ref(false)
  const register_form = ref({
    username: ``,
    password: ``,
    ign: ``
  })
  const isDuplicate = {
    username: null,
    ign: null
  }

  const resetForm = () => {
    register_form.value = {
      username: ``,
      password: ``,
      ign: ``
    }
  }
  
  const resetIsDuplicate = () => {
    isDuplicate.username = null
    isDuplicate.ign = null

    loading.value = false
  }

  const onSignUp = () => {
    const form = register_form.value

    if (!/^[a-z\d]{4,20}$/i.test(form.username)) {
      window.alert(`Invalid Username`)
    } else if (!/^.{6,20}$/.test(form.password)) {
      window.alert(`Invalid Password`)
    } else if (form.password !== form.confirm_password) {
      window.alert(`Password and Confirm Password are not matched.`)
    } else if (!/^.{4,20}$/.test(form.ign)) {
      window.alert(`Invalid Discord or In Game Name`)
    } else {
      loading.value = true
      form.email = `${form.username}@fake.com`
      form.matched_username = form.username.toLocaleLowerCase()
      form.matched_ign = form.ign.toLocaleLowerCase()
      
      store.dispatch(`findUserPublic`, {
        key: `matched_username`,
        value: form.matched_username,
        callback: (data) => {
          isDuplicate.username = data === null
          validateDuplicate(form)
        }
      })
      store.dispatch(`findUserPublic`, {
        key: `matched_ign`,
        value: form.matched_ign,
        callback: (data) => {
          isDuplicate.ign = data === null
          validateDuplicate(form)
        }
      })
    }
  }

  const validateDuplicate = (data) => {
    if (isDuplicate.username !== null && isDuplicate.ign !== null) {
      if (isDuplicate.username !== true) {
        resetIsDuplicate()
        window.alert(`This username has been taken.`)
      } else if (isDuplicate.ign !== true) {
        resetIsDuplicate()
        window.alert(`This discord or in game name has been taken.`)
      } else {
        afterSignUpValidation(data)
      }
    }
  }

  const afterSignUpValidation = (data) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user
      const savePrivateData = {
        username: data.username,
        ign: data.ign
      }
      const savePublicData = {
        matched_username: data.matched_username,
        matched_ign: data.matched_ign
      }

      store.commit(`setUID`, user.uid)
      store.dispatch(`saveUser`, savePrivateData)
      store.dispatch(`saveUserPublic`, savePublicData)
    })
    .catch((error) => {
      console.log(error.code, error.message)

      if (error.code === `auth/email-already-in-use`) {
        window.alert(`This username has been taken.`)
      } else {
        window.alert(`Something went wrong`)
      }
    })
    .finally(() => {
      loading.value = false
    })
  }

  defineExpose({
    resetForm
  })
</script>