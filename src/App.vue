<template>
  <Header></Header>
  <RouterView />
  <Auth></Auth>
</template>

<script>
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
</script>

<!-- <script setup>
//  i don't know how to write or translate the code form script to script setup because i need "created(lifecycle hook)", and according to documentation when u use script setup then composition API running around beforeMount and Mounted. However, when u use option API then running around beforeCreate and Created
</script> -->
