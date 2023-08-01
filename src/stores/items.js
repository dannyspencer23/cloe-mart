// import { data } from 'autoprefixer'
import { is } from '@vee-validate/rules'
import { defineStore } from 'pinia'
// import axios from 'axios'
// import axiosClient from 'axios'

//
export const useItemsStore = defineStore('items', {
  state: () => ({
    isLoading: false,
    allItem: [],
    paketMurah: [],
    paketLengkap: [],
    search: ``,
    isShow: true
  }),

  getters: {},

  actions: {
    // -------NOT USING AXIOS
    // 'https://cloe-mart-default-rtdb.firebaseio.com/allItems.json?orderBy="kelompok"&equalTo="'
    async getAllItem() {
      this.isLoading = true
      const response = await fetch('https://cloe-mart-default-rtdb.firebaseio.com/allItems.json')
      const dataAllItem = await response.json()
      this.allItem = dataAllItem
      this.isLoading = false
    },
    async fetchPaketMurah() {},
    async fetchPaketLengkap() {},

    async searchAllItem() {
      this.isLoading = true
      const response = await fetch(
        'https://cloe-mart-default-rtdb.firebaseio.com/allItems.json' +
          '?orderBy="title"&equalTo="' +
          this.search.toLowerCase() +
          '"'
      )
      const dataAllItem = await response.json()
      this.allItem = dataAllItem

      if (this.search == '') {
        console.log('berhasil')
        const response = await fetch('https://cloe-mart-default-rtdb.firebaseio.com/allItems.json')
        const dataAllItem = await response.json()
        this.allItem = dataAllItem
      }
      this.isLoading = false
    }

    //------ USING AXIOS
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
    // -------NOT USING AXIOS
    // async fetchAllItem() {
    //   const result = await fetch('https://cloe-mart-default-rtdb.firebaseio.com/allItems.json')
    //   const response = await result.json()
    //   this.allItem = response
    // },
    // async fetchPaketMurah() {},
    // async fetchPaketLengkap() {}
  }

  //   getters: {
  //     ----- BEWARE: getter names cannot be same as state props!
  //     useDataStore(state) {
  //       return state.adps.length
  //     },
  //     adpsFilteredLength(state) {
  //       return (query: string) => state.adps.filter((adp) => adp.estado_cd === query).length
  //     }
  //   }
})
