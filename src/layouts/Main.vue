<template>
  <!-- <router-link :to="`/gacha-tracker-online/test`">/users/eduardo</router-link>
  <button @click="onBack">Back</button>
  <h2>{{ getUrl(`hello`) }}</h2> -->
  <div class="w-full py-3 md:px-8 sm:px-6 px-4">
    <div>{{  user  }}</div>
    <template v-if="user">
      <div v-if="!user.active">Please contact Minnerva to activate your account.</div>
      <router-view v-else></router-view>
    </template>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  // import { useRouter } from 'vue-router'
  // import { getUrl } from '@/utils'

  // const router = useRouter()

  // const onBack = () => {
  //   router.back()
  // }
  const store = useStore()
  // const auth = computed(() => store.state.auth)
  const user = computed(() => store.state.user)
</script>
