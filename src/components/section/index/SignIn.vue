<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <Card class="lg:col-start-2" no-padding>
      <template v-slot:body>
        <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul class="grid grid-cols-2 gap-0">
            <li
              v-for="tab in tabs" :key="tab.key"
              class="col-span-auto"
            >
            <div
              class="p-3 border-b-2 border-transparent rounded-t-lg cursor-pointer"
              :class="getTabClasses(tab)"
              @click="onTabChange(tab)"
            >
                {{ tab.label }}
              </div>
            </li>
          </ul>
        </div>

        <div class="p-3">
          <template v-if="current_tab === `sign-in`">
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
              <ButtonBase submit>Sign In</ButtonBase>

              <hr class="my-4">

              <ButtonBase
                class="relative"
                @click="onSignInWithGoogle"
              >
                <img
                  class="absolute inset-y-0 left-0 m-auto max-h-8"
                  :src="IconGoogle"
                >
                <div>Sign in with Google</div>
              </ButtonBase>
            </form>
          </template>
          
          <template v-if="current_tab === `register`">
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
                hint="*4-20 characters."
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
              
              <ButtonBase submit>Sign Up</ButtonBase>
            </form>
          </template>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
  import Card from '@/components/Card.vue'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'
  import IconGoogle from '@/assets/icons/google.png'

  const store = useStore()
  const current_tab = ref(`sign-in`)
  const tabs = ref([
    {
      key: `sign-in`,
      label: `Sign In`
    },
    {
      key: `register`,
      label: `Register`
    }
  ])
  const sign_in_form = ref({
    username: ``,
    password: ``
  })
  const register_form = ref({
    username: ``,
    password: ``,
    ign: ``
  })
  const register_duplicate_validate = ref({
    username: false,
    ign: false
  })

  const onTabChange = (tab) => {
    current_tab.value = tab.key
    sign_in_form.value = { username: ``, password: `` }
    register_form.value = { username: ``, password: ``, ign: `` }
  }
  const getTabClasses = (tab) => {
    if (tab.key !== current_tab.value) {
      return [`hover:text-gray-600`, `hover:border-gray-300`, `dark:hover:text-gray-300`]
    } else {
      return [`font-bold`, `border-primary`, `text-primary`]
    }
  }

  const onSignIn = () => {
    console.log(`onSignIn`)
    const data = sign_in_form.value
  }

  const onSignInWithGoogle = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
    .then(() => {})
    .catch(err => {
      console.log(err)
    })
  }

  const onSignUp = () => {
    console.log(`onSignUp`)
    const data = register_form.value
    
    // Validate Sign Up
    if (!/^[a-z\d]{4,20}$/i.test(data.username)) {
      window.alert(`Invalid Username`)
    } else if (!/^.{4,20}$/.test(data.password)) {
      window.alert(`Invalid Password`)
    } else if (!/^.{4,20}$/.test(data.ign)) {
      window.alert(`Invalid Discord or In Game Name`)
    } else {
      const email = `${data.username}@fake.com`

      // Validate duplicate username

      // Validate duplicate ign

      // const auth = getAuth()
      // createUserWithEmailAndPassword(auth, email, data.password)
    }
  }

  const afterSignUpValidation = () => {

  }

  store.dispatch(`findUsername`, {
    username: `Test`,
    callback: (data) => {
      console.log(data)
    }
  })
</script>
