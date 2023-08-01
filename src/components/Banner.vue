<template>
  <!-- @ ADVERTISING SALE -->
  <section
    class="relative px-10 mx-auto grid grid-cols-5 gap-x-4 bg-gray-100 py-5 mob:hidden lg:grid lg:max-w-full xl:max-w-desk_max xl:px-0"
  >
    <!-- # 1 -->
    <div id="countMain" class="col-span-3 bg-banner-bg bg-cover">
      <!-- $ -->
      <div class="grid grid-cols-[auto_1fr_1fr] px-4 py-4 items-center gap-x-1">
        <!-- % IMG -->
        <div class="relative">
          <img
            src="../assets/img/discount.svg"
            alt=""
            class="object-cover w-[180px] h-[180px] animate-ping_sale"
          />
        </div>

        <!-- % TEXT CONTENT -->
        <div class="col-span-2 space-y-4">
          <!-- ^ -->
          <div class="flex flex-row justify-center text-white items-center">
            <div class="font-bold mx-auto text-center">
              <h1 class="text-4xl">{{ displayDays }}</h1>
              <p class="font-light text-sm">Hari</p>
            </div>
            <span class="text-3xl my-auto">:</span>
            <div class="font-bold mx-auto text-center">
              <h1 class="text-4xl">{{ displayHours }}</h1>
              <p class="font-light text-sm">Jam</p>
            </div>
            <span class="text-3xl my-auto">:</span>
            <div class="font-bold mx-auto text-center">
              <h1 class="text-4xl">{{ displayMinutes }}</h1>
              <p class="font-light text-sm">Menit</p>
            </div>
            <span class="text-3xl my-auto">:</span>
            <div class="font-bold mx-auto text-center">
              <h1 class="text-4xl">{{ displaySeconds }}</h1>
              <p class="font-light text-sm">Detik</p>
            </div>
          </div>
          <!-- ^ -->
          <div class="max-w-full mx-auto px-6">
            <p class="text-left text-white font-light text-lg leading-snug">
              <span class="uppercase text-yellow-300 font-bold animate-ping_sale"
                >Special Discount</span
              >
              akhir tahun higga
              <span class="uppercase text-yellow-300 text-2xl font-bold">25%.</span> Segera
              daftarkan diri anda menjadi member dan dapatkan keuntungan menarik lainnya.
            </p>
          </div>
        </div>
      </div>
      <!-- TEXT -->

      <!-- <h1>1</h1> -->
      <!-- <img
        src="https://plus.unsplash.com/premium_photo-1671076131210-5376fccb100b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
        alt=""
        class="object-cover w-full h-[212px]"
      /> -->
      <!-- <img
          src="https://plus.unsplash.com/premium_photo-1671076131210-5376fccb100b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
          alt=""
          class="object-cover h-[400px]"
        /> -->
    </div>

    <!-- 2 -->
    <div class="col-span-2">
      <div class="grid grid-rows-[100px_100px] gap-y-3">
        <!-- <h1>1</h1>
            <h1>2</h1> -->
        <img
          src="https://images.unsplash.com/photo-1591096490721-969917a57ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
          alt=""
          class="object-cover h-[100px] w-full"
        />
        <img
          src="https://images.unsplash.com/photo-1591096490721-969917a57ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
          alt=""
          class="object-cover h-[100px] w-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0
  }),
  computed: {
    // 1 second = 1000 milisecond
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    }
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    formatNum: (num) => (num < 10 ? '0' + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date('21 Nov 2023')
        const distance = end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          return
        }

        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)
        this.displayDays = this.formatNum(days)
        this.displayHours = this.formatNum(hours)
        this.displayMinutes = this.formatNum(minutes)
        this.displaySeconds = this.formatNum(seconds)
      }, 1000)
    }
  }
}
</script>
