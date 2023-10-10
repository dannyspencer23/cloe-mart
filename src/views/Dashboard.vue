<template>
  <main class="mx-auto max-w-full bg-gray-100 mb-32">
    <!-- @ SEARCH  -->
    <section class="mx-auto lg:max-w-full bg-gray-100 px-10 xl:max-w-desk_max xl:px-0">
      <div class="py-2 px-5 bg-gray-300 max-w-full mx-auto xl:max-w-desk_max">
        <!-- SEARCH -->
        <!-- vee-form -->
        <div
          class="w-[400px] flex flex-row-reverse bg-white items-center px-3 rounded-md gap-x-3 border-2 justify-items-end border-gray-400"
        >
          <input
            type="text"
            class="w-full py-2 text-black outline-none"
            placeholder="Misal: gula...minyak goreng....beras..dst"
            v-model="search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
            class="fill-sky-700"
          >
            <path
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- @ MOBILE -->
    <section
      class="max-w-full mx-auto px-3 my-3 bg-transparent flex flex-row items-center justify-between sm:hidden"
    >
      <form
        role="search"
        autocomplete="off"
        class="w-full flex flex-row-reverse bg-white items-center px-2 rounded-md gap-x-1 border-2 justify-items-end border-gray-400"
      >
        <!-- v-model="search" -->
        <input
          type="text"
          class="w-full py-1 text-black outline-none"
          aria-label="Cari"
          placeholder="Misal: gula...minyak goreng....beras..dst"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          class="fill-sky-700"
        >
          <path
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          />
        </svg>
      </form>
    </section>

    <!-- @ ALL ITEM -->

    <div
      class="xl:max-w-desk_max xl:px-0 mx-auto xl:text-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      v-if="isLoading"
    >
      <!-- LOADING SPIN -->
      <div class="lds-roller">
        <div class=""></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <section
      class="grid grid-cols-3 justify-items-start max-w-full mx-auto gap-x-6 gap-y-10 mt-10 px-10 snap-y overflow-y-scroll h-[800px] xl:grid-cols-4 xl:max-w-desk_max xl:px-0"
    >
      <!-- THIS WORK -->
      <!-- <Items v-for="item in allItem" :key="item.title" :item="item"> </Items> -->
      <Items v-for="item in handleSearch" :key="item.id" :item="item"> </Items>
    </section>
    <div class="max-w-[1200px] mx-auto border-b-2 border-gray-300"></div>
    <!-- </section> -->
  </main>
</template>

<script setup>
import Items from '../components/Items.vue'

//---------- USING PINIA STORE ----------
import { computed, onMounted, ref, watch } from 'vue'
import { useItemsStore } from '../stores/items'
import { storeToRefs } from 'pinia'

const isSearchSubmitDisabled = ref(false)
const disableSearchSubmit = () => {
  isSearchSubmitDisabled.value = true
}

const itemsStore = useItemsStore()
const { isLoading, allItem, search } = storeToRefs(itemsStore)

//----------------------- SEARCH----------------------

// THIS LINE SO BADASS
const handleSearch = computed(() => {
  if (!search.value) {
    return allItem.value
  }
  const searchItem = search.value.toLowerCase()
  return allItem.value.filter(
    (item) =>
      item.title.toLowerCase().includes(searchItem) ||
      item.kelompok.toLowerCase().includes(searchItem)
  )
})

// ------THIS WORK-------
//---- BUT in INPUT FORM, WE MUST WRITE FULL WORD exm:beras or gula or minyak goreng
// watchEffect(() => {
//   return itemsStore.searchAllItem(itemsStore.search)
// })
//----------------------- SEARCH----------------------

// --------ON MOUNTED---------------------
onMounted(() => {
  itemsStore.getAllItem() //fix
  // itemsStore.searchAllItem() //trying
})
// --------------------------------------

// ------ FETCH USING AXIOS - not PINIA ----
// import { ref, onMounted, computed } from 'vue'
// import axios from 'axios'

// const data = ref([])
// const search = ref(``)

// ---------- USING AXIOS ---------
// const getData = async () => {
//-------console.log(this.query)
// return await axios
//   // .get('http://localhost:3000/allItems/')
//   .get('https://cloe-mart-default-rtdb.firebaseio.com/allItems/.json')
//   .then((res) => (data.value = res.data))
//   .catch((error) => console.log(error))

// ----console.log('sukses', data)---
// }

// `onMounted(async () => {
//   getData()
// })`

// const searchItem = computed(() => {
//   return data.value.filter((item) => {
//     return item.kelompok.toLowerCase().includes(search.value)
//   })
// })

//----------- FETCH NOT USE AXIOS and PINIA -----------
// import { onMounted, ref, computed } from 'vue'

// const data = ref([])
// const search = ref(``)

// onMounted(async () => {
//   const res = await fetch('https://cloe-mart-default-rtdb.firebaseio.com/allItems/.json')
//   const finalRes = await res.json()
//   data.value = finalRes
// })

// const searchItem = computed(() => {
//   return data.value.filter((item) => {
//     return item.kelompok.toLowerCase().includes(search.value)
//   })
// })
</script>

<style scoped>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: ' ';
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
