<template>
  <section class="col-span-2">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :autoplay="{ delay: 4000 }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img
          class="w-full h-[212px] object-cover"
          src="https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-[212px] object-cover"
          src="https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-[212px] object-cover"
          src="https://images.unsplash.com/photo-1533302229631-95b8bea33df3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-[212px] object-cover"
          src="https://plus.unsplash.com/premium_photo-1661393487353-84bf9683e4b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-[212px] object-cover"
          src="https://images.unsplash.com/photo-1475091274559-e48ce7f344ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
// -----Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

// -----Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// -----Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]
</script>

<!-- USING SETUP () -->
<!-- <script>
// ----import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

// ----Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// ----Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// ----Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay]
    }
  }
}
</script> -->
