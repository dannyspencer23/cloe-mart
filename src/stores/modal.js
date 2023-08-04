// CUSTOM STORES
import { defineStore } from 'pinia'
export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false
  }),
  getters: {
    hiddenClass(state) {
      // return !state.isOpen ? 'hidden' : ''
      return !state.isOpen ? 'hidden' : ''
    }
  },
  // when using <script setup></script>, method will be in actions store
  actions: {
    toggleAuthModal() {
      // this.modalStore.isOpen = !this.modalStore.isOpen
      // console.log(this.modalStore.isOpen)
      this.$state.isOpen = !this.$state.isOpen
      console.log(this.$state.isOpen)
    }
    // modalVisibility() {
    //   this.$state.isOpen = !this.$state.isOpen
    //   console.log('terbuka')
    // }
  }
})

// ------------------------------------------------------------
// export const useModalStore = defineStore('modal', {
//   state: () => ({
//     isOpen: false
//   }),
//   getters: {
//     hiddenClass(state) {
//       return !state.isOpen ? 'hidden' : ''
//     }
//   }
// })
// ------------------------------------------------------------

// CARA GAGAL

// export const useModalStore = defineStore('modal', () => {
//   // // ref() s become state properties
//   // // computed() s become getters
//   // // function() s become actions

//   // // const isOpen = ref(false)
//   // // const hiddenClass = computed(()=>)

//   // // function hiddenClass) {
//   // //   return !isOpen ? 'hidden' : ''
//   // // }

//   // // const hiddenclass = computed(() => {
//   // //   return (isOpen.value = !isOpen.value)
//   // // })

//   // // getters: {
//   // //   hiddenClass(state) {
//   // //     return !state.isOpen ? 'hidden' : ''
//   // //   }
//   // // }

//   // return { isOpen, hiddenClass }
// })
