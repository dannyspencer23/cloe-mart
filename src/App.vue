<template>
  <Header></Header>
  <RouterView />
  <Auth></Auth>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import { auth } from './includes/firebase'
import { mapWritableState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'

const userStore = useUserStore()
// const { userLoggedIn } = mapWritableState(useUserStore, ['userLoggedIn'])

onMounted(() => {
  if (auth.currentUser) {
    userStore.userLoggedIn = true
  }
})
</script>

<!-- USING OPTION API -->
<!-- <script>
import Header from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { auth } from './includes/firebase'

export default {
  components: { Header, Auth },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script> -->
