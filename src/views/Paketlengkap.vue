<template>
  <main class="mx-auto max-w-full bg-slate-100">
    <!-- ! BANNER -->
    <!-- <Banner></Banner> -->

    <!-- @ TITLE  -->
    <section
      class="max-w-desk_max px-10 mx-auto py-9 bg-white flex flex-row items-center justify-between"
    >
      <!--  -->
      <!-- <nav>
        <ul class="flex flex-row gap-x-6">
          <li><RouterLink :to="{ name: 'dashboard' }">All Item</RouterLink></li>
          <li><RouterLink :to="{ name: 'paket' }">Paket</RouterLink></li>
        </ul>
      </nav> -->

      <!-- SEARCH -->
      <form
        role="search"
        autocomplete="off"
        class="w-[500px] flex flex-row-reverse bg-white items-center px-3 rounded-md gap-x-3 border-2 border-gray-300 justify-items-end"
      >
        <!-- v-model="search" -->
        <input
          class="w-full py-2 text-black outline-none text-xl"
          aria-label="Cari"
          placeholder="Paket Belanja Bulanan Hemat & Lengkap"
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
      </form>
    </section>

    <!-- ! ALL ITEM -->
    <section
      class="px-10 grid grid-cols-4 justify-items-start gap-y-10 max-w-desk_max mx-auto gap-x-6 bg-white"
    >
      <!-- <Items v-for="item in dbJson" :key="item.id" :item="item"> </Items> -->
      <Items v-for="item in searchItem" :key="item" :item="item"> </Items>
    </section>
  </main>
</template>

<script setup>
import Items from '../components/Items.vue'

// ------ IMPORT CARA 1 ----
import { ref, onMounted, watch, computed } from 'vue'
import axios from 'axios'
// ------ CARA 2 ----
// const query = ref('')
const data = ref([])
const search = ref(``)

const getData = () => {
  // console.log(this.query)
  return (
    axios
      // .get('http://localhost:3000/pakets/')
      .get('https://cloe-mart-default-rtdb.firebaseio.com/paketlengkap/.json')
      .then((res) => (data.value = res.data))
      .catch((error) => console.log(error))
  )

  // console.log('sukses', data)
}

onMounted(() => {
  getData()
})

const searchItem = computed(() => {
  return data.value.filter((item) => {
    return item.title.toLowerCase().includes(search.value)
  })
})

// ------ IMPORT CARA 2 ----
// import { ref } from 'vue'
// import Banner from '../components/Banner.vue'
// import Items from '../components/Items.vue'
// import DbJson from '../data/data/db.json'

// import { computed, ref, watch } from 'vue'

// ------ CARA 1 ----
// const dbJson = ref(DbJson)
// const search = ref(``)

// watch(search, () => {
//   console.log('"hello"')
//   dbJson.value = DbJson.filter((item) =>
//     item.title.toLowerCase().includes(search.value.toLowerCase())
//   )
// })

// ------ CARA FETCH ----
// fetch('http://localhost:3000/allItems')
//   .then((response) => response.json())
//   .then((data) => (allItem.value = data))
//   .catch((error) => console.error(error))
</script>

<style scoped></style>
