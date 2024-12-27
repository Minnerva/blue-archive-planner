<template>
  <div class="w-full py-3 md:px-8 sm:px-6 px-4">
    <template v-if="user !== false">
      <div v-if="!user.active">Please contact Minnerva to activate your account.</div>
      <router-view v-else></router-view>
    </template>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import Card from '@/components/Card.vue'
  import InputBase from '@/components/input/Base.vue'
  import ButtonBase from '@/components/button/Base.vue'

  const store = useStore()
  const user = computed(() => store.state.user)

  const ign = ref(``)
  const onSaveIgn = () => {
    const { user } = store.state
    user.ign = ign
    store.dispatch(`saveUser`, user)
  }
</script>
