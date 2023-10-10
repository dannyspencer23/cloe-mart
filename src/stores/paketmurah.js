// import { data } from 'autoprefixer'
// import { is } from '@vee-validate/rules'
// import axios from 'axios'
// import axiosClient from 'axios'
import { defineStore } from 'pinia'

//
export const useItemsStore = defineStore('items', {
  state: () => ({
    isLoading: false,
    allItem: [],
    search: ``,
    isShow: true
  }),

  // getters: {
  //   getSearchResult(state) {
  //     return state.search
  //   }
  // },

  actions: {
    // -------------------NOT USING AXIOS---------------------------

    async fetchPaketMurah() {
      this.isLoading = true
      const response = await fetch('https://cloe-mart-default-rtdb.firebaseio.com/paketmurah/.json')
      const dataPaketMurah = await response.json()
      this.paketMurah = dataPaketMurah
      this.isLoading = false
    },

    async searchFilter() {
      if (!this.search) {
        await this.fetchPaketMurah()
      } else {
        this.isLoading = true

        const response = await fetch(
          'https://cloe-mart-default-rtdb.firebaseio.com/allItems.json' +
            `?orderBy="kelompok"&equalTo="${this.search.toLowerCase()}"`
        )
        const dataAllItem = await response.json()
        this.allItem = dataAllItem

        this.isLoading = false
      }

      const dataAllItem = await response.json()
      this.allItem = dataAllItem

      if (this.search == ``) {
        console.log('berhasil')
        const response = await fetch('https://cloe-mart-default-rtdb.firebaseio.com/allItems.json')
        const dataAllItem = await response.json()
        this.allItem = dataAllItem
      }
      this.isLoading = false
    }
    // -------------------END NOT USING AXIOS---------------------------

    // -------------------USING AXIOS---------------------------
    // async fetchAllItem() {
    //   try {
    //     const data = await axios.get('https://cloe-mart-default-rtdb.firebaseio.com/allItems.json')
    //     this.allItem = data.data
    //   } catch (error) {
    //     alert(error)
    //     console.log(error)
    //   }
    // },
    // async fetchPaketMurah() {
    //   try {
    //     const data = await axios.get(
    //       'https://cloe-mart-default-rtdb.firebaseio.com/paketmurah/.json'
    //     )
    //     this.paketMurah = data.data
    //   } catch (error) {
    //     alert(error)
    //     console.log(error)
    //   }
    // },
    // async fetchPaketLengkap() {
    //   try {
    //     const data = await axios.get(
    //       'https://cloe-mart-default-rtdb.firebaseio.com/paketlengkap/.json'
    //     )
    //     this.paketMurah = data.data
    //   } catch (error) {
    //     alert(error)
    //     console.log(error)
    //   }
    // }
    // -------------------USING AXIOS---------------------------
  }
})
