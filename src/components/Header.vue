<template>
  <header class="bg-sky-500 text-white sticky top-0 z-50 py-2 mob:hidden md:block">
    <!-- @ 1 -->
    <section class="mx-auto lg:max-w-full lg:px-10 xl:max-w-desk_max xl:px-0">
      <!-- # -->
      <div class="grid grid-cols-5 items-center">
        <!-- $ FOLLOW MEDSOS -->
        <div class="flex space-x-1 mob:hidden md:flex">
          <div class="flex flex-row items-center gap-x-2">
            <div>
              <h1 class="font-semibold">Follow Kami :</h1>
            </div>

            <div class="grid grid-cols-3 gap-x-3 justify-items-center">
              <!-- % FACEBOOK -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.8em"
                viewBox="0 0 320 512"
                class="fill-white"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>

              <!-- % INSTAGRAM -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.9em"
                viewBox="0 0 448 512"
                class="fill-white"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>

              <!-- % TIK-TOK -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.8em"
                viewBox="0 0 448 512"
                class="fill-white"
              >
                <path
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- # MESSAGE -->
        <div class="col-span-4 justify-self-center mob:hidden md:block">
          <span class="">
            <marquee
              behavior=""
              scrollamount="10"
              direction="left"
              class="font-black text-lg text-yellow-100 font-outline-1"
            >
              "Belanja kebutuhan sehari-hari, mingguan, atau bulanan mulai dari
              <span class="text-amber-300">PAKET HEMAT</span> hingga
              <span class="text-amber-300">PAKET LENGKAP !</span> Segera daftarkan diri anda menjadi
              member dan dapatkan diskon menarik sekarang juga !"
            </marquee>
          </span>
        </div>
      </div>
    </section>

    <!-- @ 2 -->
    <section
      class="grid grid-cols-5 max-w-desk_max mx-auto pt-2 pb- xl:0 items-center mob:hidden md:grid lg:max-w-full lg:px-10 lg:grid-cols-[auto_auto_auto_auto_auto_] xl:max-w-desk_max xl:px-0"
    >
      <!-- # BRAND -->
      <div class="flex flex-row items-end">
        <img src="../assets/img/main_logo.svg" alt="" class="w-10 h-10" />
        <h1 class="text-base font-bold capitalize font-josefsans">cloe mart</h1>
      </div>

      <!-- NAV -->
      <nav class="mx-auto col-span-2" v-if="!userStore.userLoggedIn">
        <ul class="flex flex-row gap-x-0 outline-2 divide-x-2" exact-active-class="no-active">
          <li class="text-lg font-bold lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'dashboard' }">All Item</RouterLink>
          </li>
        </ul>
      </nav>
      <nav class="mx-auto col-span-2" v-else>
        <ul class="flex flex-row gap-x-0 outline-2 divide-x-2" exact-active-class="no-active">
          <li class="text-lg font-bold lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'dashboard' }">All Item</RouterLink>
          </li>
          <!-- <RouterLink :to="{ name: 'paketmurah' }">Paket Murah</RouterLink> -->
          <li class="lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'paketmurah' }">Paket Murah</RouterLink>
          </li>

          <!-- <RouterLink :to="{ name: 'paketlengkap' }">Paket Lengkap</RouterLink> -->
          <li class="lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'paketlengkap' }">Paket Lengkap</RouterLink>
          </li>
        </ul>
      </nav>

      <!-- $ CART & NOTIFICATION -->
      <div v-if="!userStore.userLoggedIn">
        <!-- % NOTIFICATION -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.4em"
          viewBox="0 0 448 512"
          class="fill-white"
          type="button"
          @click="notify"
        >
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
          />
        </svg>
      </div>
      <div class="flex flex-row gap-x-6 justify-self-center" v-else>
        <!-- % NOTIFICATION -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.4em"
          viewBox="0 0 448 512"
          class="fill-white"
          type="button"
          @click="notify"
        >
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
          />
        </svg>
        <!-- % KERANJANG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.4em"
          viewBox="0 0 576 512"
          class="fill-white"
        >
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
      </div>

      <!-- # DAFTAR & LOGIN -->
      <div v-if="!userStore.userLoggedIn" class="space-x-3 justify-self-end">
        <!-- rounded-md bg-sky-600 hover:bg-white -->
        <a href="#" class="font-normal text-white tracking-wide" @click.prevent="toggleAuthModal">
          Daftar / Masuk
        </a>
      </div>
      <template v-else>
        <div class="justify-self-end">
          <a
            href="#"
            class="font-normal text-white tracking-wide"
            @click.prevent="userStore.signOut"
          >
            Keluar
          </a>
        </div>
      </template>
    </section>
  </header>

  <header class="bg-sky-500 sticky top-0 z-50 text-white sm:hidden">
    <div></div>
    <nav class="max-w-full">
      <ul class="flex flex-row justify-center gap-x-4 font-semibold text-center py-4">
        <!-- <br /> -->
        <li><a href=""></a>All Item</li>
        <li><a href=""></a>Paket Murah</li>
        <li><a href=""></a>Paket Lengkap</li>
      </ul>
    </nav>
  </header>

  <Banner></Banner>
</template>

<script>
import Banner from '@/components/Banner.vue'
import { mapStores } from 'pinia'
import { useModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useNativeNotifications } from 'vue3-native-notification'

export default {
  name: 'Header',
  components: {
    Banner
  },
  setup() {
    const nativeNotification = useNativeNotifications()

    const notify = function () {
      nativeNotification.show(
        'Notification',
        {
          body: 'This is a simple notification'
        },
        {}
      )
    }
  },
  computed: {
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log(this.modalStore.isOpen)
    }
  }
}
</script>

<!-- <script setup>
import { RouterView } from 'vue-router'
import { mapStores, mapState, mapWritableState } from 'pinia'
import { computed } from 'vue'

// --------------------------------------------------------
import { useModalStore } from '@/stores/modal'
import { mapState } from 'pinia'

const store = useModalStore()
const toggleAuthModal = () => {
  modalStore.isOpen = !modalStore.isOpen
  console.log(modalStore.isOpen)
  store.isOpen = !store.isOpen
  console.log(store.isOpen)
  console.log(mapstore.isOpen)
  console.log(mapwritestate.isOpen)
}
</script> -->
