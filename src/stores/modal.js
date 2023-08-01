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
