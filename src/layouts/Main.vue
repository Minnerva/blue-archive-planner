<template>
  <router-link :to="`/gacha-tracker-online/test`">/users/eduardo</router-link>
  <button @click="onBack">Back</button>
  <h2>{{ getUrl(`hello`) }}</h2>

  <router-view></router-view>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { getUrl } from '@/utils'

  const router = useRouter()

  const onBack = () => {
    router.back()
  }
</script>
