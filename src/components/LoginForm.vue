<template>
  <!-- <form class="space-y-4">
    <div>
      <h1>Email :</h1>
      <input
        type="email"
        placeholder="Masukkan Email"
        class="border-[1px] w-full border-gray-400 px-2 py-3 rounded-md"
      />
    </div>

    <div>
      <h1>Password :</h1>
      <input
        type="password"
        placeholder="Masukkan Password"
        class="border-[1px] w-full border-gray-400 px-2 py-3 rounded-md"
      />
    </div>
    <button class="bg-gray-200 px-4 py-2" @click="close">
      <a href="">submit</a>
    </button>
  </form> -->

  <!-- Login Form -->
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        autocomplete="username"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        autocomplete="current-password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>

    <!-- Button Submit -->
    <button
      type="submit"
      class="block w-full bg-sky-500 text-white py-1.5 px-3 rounded transition hover:bg-sky-600 focus:border-white"
      :disabled="login_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<!-- <script setup></script> -->

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:9|max:100'
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-bg-blue-500',
      login_alert_msg: 'Mohon tunggu! Akun anda sedang dibuat.'
    }
  },
  methods: {
    ...mapActions(useUserStore, ['authenticate']),
    async login(values) {
      this.login_show_alert = true
      this.login_in_submission = true
      this.login_alert_variant = 'bg-blue-500'
      this.login_alert_msg = 'Mohon tunggu! sampai anda berhasil masuk.'

      try {
        await this.authenticate(values)
      } catch (error) {
        this.login_in_submission = false
        this.login_alert_variant = 'bg-red-500'
        this.login_alert_msg = 'Email/sandi tidak valid !'
        return
      }

      this.login_alert_variant = 'bg-green-500'
      this.login_alert_msg = 'Yey, Anda berhasil masuk.'

      // window.location.reload()
      location.reload()
      // console.log(values)
    }
  }
}
</script>
