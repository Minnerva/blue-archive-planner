<template>
  <form @submit.prevent="onSubmit">
    <InputBase
      class="mb-4"
      label="Discord or In Game Name"
      v-model="form.ign"
      hint="*4-20 characters."
      required
    ></InputBase>

    <ButtonBase :loading submit>Confirm</ButtonBase>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'

  const store = useStore()
  const loading = ref(false)
  const form = ref({ ign: `` })

  const onSubmit = () => {
    const ign = form.value.ign

    if (!/^.{4,20}$/.test(ign)) {
      window.alert(`Invalid Discord or In Game Name`)
    } else {
      loading.value = true
      const matched_ign = ign.toLocaleLowerCase()

      store.dispatch(`findUserPublic`, {
        key: `matched_ign`,
        value: matched_ign,
        callback: (data) => {
          if (data !== null) {
            window.alert(`This discord or in game name has been taken.`)
          } else {
            store.dispatch(`saveUser`, { ign })
            store.dispatch(`saveUserPublic`, { matched_ign })
          }

          loading.value = false
        }
      })
    }
  }
</script>