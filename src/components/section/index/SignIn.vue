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
          <SectionFormSignIn
            v-show="current_tab === `sign-in`"
            ref="$form_signin"
          ></SectionFormSignIn>

          <SectionFormRegister
            v-show="current_tab === `register`"
            ref="$form_register"
          ></SectionFormRegister>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import SectionFormSignIn from './FormSignIn.vue'
  import SectionFormRegister from './FormRegister.vue'
  import Card from '@/components/Card.vue'

  const $form_signin = ref(null)
  const $form_register = ref(null)
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

  const onTabChange = (tab) => {
    current_tab.value = tab.key
    $form_signin.value.resetForm()
    $form_register.value.resetForm()
  }
  const getTabClasses = (tab) => {
    if (tab.key !== current_tab.value) {
      return [`hover:text-gray-600`, `hover:border-gray-300`, `dark:hover:text-gray-300`]
    } else {
      return [`font-bold`, `border-primary`, `text-primary`]
    }
  }
</script>
