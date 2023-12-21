<template>
  <router-link :to="`/gacha-tracker-online/test`">/users/eduardo</router-link>
  <button @click="onBack">Back</button>

  <router-view></router-view>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const onBack = () => {
    router.back()
  }
</script>
