<template>
  <template v-if="!user">
    <SectionSignIn></SectionSignIn>
  </template>

  <template v-else>
    <div
      v-if="!user.ign"
      class="grid grid-cols-1 lg:grid-cols-3 gap-4"
    >
      <Card class="lg:col-start-2">
        <template v-slot:body>
          <FormIgn></FormIgn>
        </template>
      </Card>
    </div>

    <SectionSignedIn v-else></SectionSignedIn>
  </template>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import SectionSignIn from '@/components/section/index/SignIn.vue'
  import SectionSignedIn from '@/components/section/index/SignedIn.vue'
  import FormIgn from '@/components/section/index/FormIgn.vue'
  import Card from '@/components/Card.vue'

  const store = useStore()
  const user = computed(() => store.state.user)
</script>
