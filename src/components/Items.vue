<template>
  <!-- @ LIST BARANG -->
  <div
    class="px-4 py-6 grid grid-rows-[1fr_1fr] items-center mob:grid-rows-[auto_1fr_auto_auto] mob:px-0 md:grid-rows-[auto_auto] border-2 border-gray-200 rounded-b-xl bg-white xl:grid-rows-[190px_1fr]"
  >
    <!-- 1 -->
    <!-- IMG -->
    <div class="h-[200px] mob:h-[150px] md:h-[200px] xl:w- xl:h-[200px]">
      <img class="w-full h-[200px] object-scale-down" :src="item.img" :alt="item.title" />
    </div>

    <!-- 2 CONTENT -->
    <div class="grid grid-rows-[1fr_1fr_auto] bg-white">
      <!-- TITLE -->
      <div class="py-2 mob:items-start mob:my-auto px-2 xl:justify-items-start xl:py-0">
        <h1
          class="text-lg font-bold capitalize text-center mob:text-base mob:text-left xl:text-center xl:text-lg"
        >
          {{ item.kelompok }} {{ item.title }} <span class="lowercase">{{ item.volume }}</span>
        </h1>
      </div>

      <!-- DESCRIPTION -->
      <div class="mob:hidden md:block px-2 xl:">
        <p class="text-ellipsis overflow-hidden text-justify indent-5">
          {{ item.deskripsi.slice(0, 120) + '....' }}
          <!-- .slice(0, 100)-->
        </p>
      </div>

      <!-- BUTTON & PRICE -->
      <div class="flex flex-row items-center justify-between px-4 mt-3">
        <!-- 4 -->
        <!-- .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') -->
        <h1 class="text-lg font-bold text-right capitalize mt-3 mob:text-base px-2 xl:text-xl">
          Rp.{{ item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}
        </h1>

        <!-- 5 -->
        <button class="" @click="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.7em"
            viewBox="0 0 576 512"
            class="fill-sky-600"
          >
            <path
              d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"
            />
          </svg>
          <!-- mob:mx-auto mob:my-auto mob:py-2 mob:text-sm -->
          <!-- <div
            href=""
            class="bg-gray-500 w-fit px-5 py-2 rounded-xl text-white font-bold items-center mob:rounded-md mob:text-center xl:ml-auto"
          >
            <a>Lihat</a>
          </div> -->
        </button>
      </div>
    </div>
  </div>

  <!-- @ LIST BARANG -->
  <!-- <section
    class="px-10 grid grid-cols-5 justify-items-start gap-y-10 max-w-desk_max mx-auto gap-x-7 bg-white"
  >
    <div class="grid grid-rows-content-grid">
      <div class="h-[200px]">
        <img alt="beras" class="w-full h-full object-cover" :src="item.img" />
      </div>
      <div class="bg-white py-2">
        <h1 class="text-lg font-bold capitalize">
          {{ item.title + ` ` + item.berat }}
        </h1>
        <p class="text-ellipsis overflow-hidden h-[100px]">
          {{ item.deskripsi.slice(0, 100) }}
        </p>
        <div class="text-lg font-bold text-right capitalize">Rp.{{ item.harga }}</div>
      </div>

      <button class="mx-auto bg-slate-100 w-full py-4">
        <a href="" class="bg-blue-500 w-fit px-7 py-2 rounded-2xl text-white font-bold">Pesan</a>
      </button>
    </div>
  </section> -->
</template>

<script setup>
const { item } = defineProps(['item'])
</script>

<style scoped></style>
