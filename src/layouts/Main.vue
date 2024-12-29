<template>
  <div class="w-full py-3 md:px-8 sm:px-6 px-4">
    <div v-if="user && !user.active">Please contact Minnerva to activate your account.</div>
    <router-view v-else></router-view>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const user = computed(() => store.state.user)
</script>
