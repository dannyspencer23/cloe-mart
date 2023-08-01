<template>
  <Header></Header>
  <RouterView />
  <!-- <Banner></Banner> -->
  <!-- @ BANNER -->
  <Auth></Auth>
</template>

<script>
import Header from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
// import Banner from '@/components/Banner.vue'
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
</script>
