<template>
  <header class="bg-sky-500 text-white sticky top-0 z-50 py-2 mob:hidden md:block">
    <!-- @ 1 -->
    <section class="mx-auto md:px-3 lg:max-w-full lg:px-10 xl:max-w-desk_max xl:px-0">
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

        <!-- <div class="col-span-4 justify-self-center mob:hidden md:block -z-30">
          <div class="marquee-container">
            <div class="marquee-content">
              Belanja kebutuhan sehari-hari, mingguan, atau bulanan mulai dari
              <span class="text-amber-300">PAKET HEMAT</span> hingga
              <span class="text-amber-300">PAKET LENGKAP !</span> Segera daftarkan diri anda menjadi
              member dan dapatkan diskon menarik sekarang juga !
            </div>
          </div>
        </div> -->

        <!-- # MESSAGE -->
        <div class="col-span-4 justify-self-center mob:hidden md:block max-w-full">
          <span class="">
            <div class="marquee-container">
              <div class="marquee-content font-black text-lg text-yellow-100 font-outline-1">
                Belanja kebutuhan sehari-hari, mingguan, atau bulanan mulai dari
                <span class="text-amber-300">PAKET HEMAT</span> hingga
                <span class="text-amber-300">PAKET LENGKAP !</span> Segera daftarkan diri anda
                menjadi member dan dapatkan diskon menarik sekarang juga !
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>

    <!-- @ 2 -->
    <section
      class="grid grid-cols-5 max-w-desk_max mx-auto pt-2 pb-0 items-center mob:hidden md:grid md:grid-cols-6 md:max-w-full md:px-3 lg:max-w-full lg:px-10 lg:grid-cols-[auto_auto_auto_auto_auto_] xl:max-w-desk_max xl:px-0"
    >
      <!-- # BRAND -->
      <div class="flex flex-row items-end">
        <img src="../assets/img/main_logo.svg" alt="" class="w-10 h-10" />
        <h1 class="text-base font-bold capitalize font-josefsans">cloe mart</h1>
      </div>

      <!-- NAV -->
      <nav class="mx-auto col-span-2 md:col-span-3 lg:col-span-2" v-if="!userStore.userLoggedIn">
        <ul
          class="flex flex-row gap-x-0 outline-2 divide-x-2 cursor-default"
          exact-active-class="no-active"
        >
          <li class="text-lg font-bold md:px-4 lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'dashboard' }">All Item</RouterLink>
          </li>
          <!-- <RouterLink :to="{ name: 'paketmurah' }">Paket Murah</RouterLink> -->
          <li class="md:px-4 lg:px-4 xl:px-7 text-slate-300" @click="alertMsg">Paket Murah</li>

          <!-- <RouterLink :to="{ name: 'paketlengkap' }">Paket Lengkap</RouterLink> -->
          <li class="md:px-4 lg:px-4 xl:px-7 text-slate-300" @click="alertMsg">Paket Lengkap</li>
        </ul>
      </nav>
      <nav class="mx-auto col-span-2" v-else>
        <ul class="flex flex-row gap-x-0 outline-2 divide-x-2" exact-active-class="no-active">
          <li class="text-lg font-bold md:px-4 lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'dashboard' }">All Item</RouterLink>
          </li>
          <!-- <RouterLink :to="{ name: 'paketmurah' }">Paket Murah</RouterLink> -->
          <li class="md:px-4 lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'paketmurah' }">Paket Murah</RouterLink>
          </li>

          <!-- <RouterLink :to="{ name: 'paketlengkap' }">Paket Lengkap</RouterLink> -->
          <li class="md:px-4 lg:px-4 xl:px-7">
            <RouterLink :to="{ name: 'paketlengkap' }">Paket Lengkap</RouterLink>
          </li>
        </ul>
      </nav>

      <!-- $ CART & NOTIFICATION -->
      <div v-if="!userStore.userLoggedIn">
        <!-- % STAR FAVORITE -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.4em"
          viewBox="0 0 576 512"
          class="fill-white"
        >
          <path
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          />
        </svg>
      </div>
      <div class="flex flex-row gap-x-6 justify-self-center" v-else>
        <!-- % STAR FAVORITE -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.4em"
          viewBox="0 0 576 512"
          class="fill-white"
          @click="addFav = 'favs'"
        >
          <path
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
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
        <a
          href="#"
          class="font-normal text-white tracking-wide"
          @click.prevent="modalStore.toggleAuthModal()"
        >
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

<script setup>
import Banner from '@/components/Banner.vue'
import { useModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'

const userStore = useUserStore()
const modalStore = useModalStore()

const alertMsg = () => {
  alert('Daftar/Masuk terlebih dahulu.')
}
</script>

<!-- SCRIPT SETUP() -->
<!-- <script>
import Banner from '@/components/Banner.vue'
import { mapStores } from 'pinia'
import { useModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useNativeNotifications } from 'vue3-native-notification'
import { ref } from 'vue'

export default {
  name: 'Header',
  components: {
    Banner
  },
  setup() {
    const nativeNotification = useNativeNotifications()

    const addFav = ref('favs')

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
</script> -->

<style></style>
