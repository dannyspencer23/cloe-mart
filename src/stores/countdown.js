import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCountdownStore = defineStore('countdown', () => {
  const seconds = ref(1000)
  const minutes = computed(() => seconds.value * 2)
  function formatNum(num) {
    return num < 10 ? '0' + num : num
  }
  function showRemaining() {
    const timer = setInterval(() => {
      const now = new Date()
      const end = new Date('21 November 2023')
      const distance = end.getTime() - now.getTime()

      if (distance < 0) {
        clearInterval(timer)
      }

      const days = Math.floor(distance / this._days)
      const hours = Math.floor((distance % this._days) / this._hours)
      const minutes = Math.floor((distance % this._hours) / this._minutes)
      const seconds = Math.floor((distance % this._minutes) / this._seconds)
      this.displayDays = this.formatNum(days)
      this.displayHours = this.formatNum(hours)
      this.displayMinutes = this.formatNum(minutes)
      this.displaySeconds = this.formatNum(seconds)
      return timer
    }, 1000)
  }

  return { seconds, minutes, formatNum, showRemaining }
})

// export const useCountdownStore = defineStore('countdown', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
