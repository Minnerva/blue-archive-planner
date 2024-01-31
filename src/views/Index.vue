<template>
  <template v-if="!user">
    <SectionSignIn></SectionSignIn>
  </template>

  <template v-else>
    <SectionSignedIn></SectionSignedIn>
  </template>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import SectionSignIn from '@/components/section/index/SignIn.vue'
  import SectionSignedIn from '@/components/section/index/SignedIn.vue'

  const store = useStore()
  const user = computed(() => store.state.user)
</script>
