<template>
  <!-- Registration Form -->
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="reg_show_alert"
    :class="reg_alert_variant"
  >
    {{ reg_alert_msg }}
  </div>

  <!-- :inital-values="userData" -->
  <vee-form :validation-schema="schema" @submit="register">
    <!-- NAME -->
    <div class="mb-3">
      <label class="inline-block">Nama</label>
      <vee-field
        type="text"
        name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Masukkan Nama"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- EMAIL -->
    <div class="mb-3">
      <label class="inline-block">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Masukkan Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>

    <!-- PASSWORD -->
    <div class="mb-3">
      <label class="inline-block">Password</label>
      <vee-field
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <!-- CONFIRM PASSWORD -->
    <div class="mb-3">
      <label class="inline-block">Konfirmasi Password</label>
      <vee-field
        type="password"
        name="confirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Konfirm Password"
      />
      <ErrorMessage class="text-red-600" name="confirm_password" />
    </div>
    <!-- Country -->

    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        type="checkbox"
        name="tos"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block"
        >Dengan ini, saya menyetujui
        <span class="capitalize text-blue-600">syarat dan ketentuan</span> yang berlaku.</label
      >
      <p>
        <ErrorMessage class="text-red-600" name="tos" />
      </p>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="block w-full bg-sky-500 text-white py-1.5 px-3 rounded transition hover:bg-sky-600"
      :disabled="reg_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  name: 'RegisterForm',
  data() {
    return {
      tab: 'login',
      schema: {
        name: 'required|min:4|max:50|alpha_spaces',
        email: 'required|min:4|max:50|email',
        // age: 'required|min_value:18|max_value:50',
        password: 'required|min:4|max:50|excluded:password',
        confirm_password: 'password_mismatch:@password',
        // country: 'required|country_excluded:Antartica',
        // user_define: 'required',
        tos: 'tos'
      },
      // userData: {
      //   country: 'USA',
      //   user_define: 'Listener'
      // },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-bg-blue-500',
      reg_alert_msg: 'Mohon tunggu! Akun anda sedang dibuat.',

      loginSchema: {
        email: 'required|email',
        password: 'required|min:9|max:100'
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, {
      createUser: 'register'
    }),
    async register(values) {
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_variant = 'bg-blue-500'
      this.reg_alert_msg = 'Mohon tunggu! Akun anda sedang dibuat.'

      //Auth
      try {
        await this.createUser(values)
      } catch (error) {
        this.reg_in_submission = false
        this.reg_alert_variant = 'bg-red-500'
        this.reg_alert_msg = 'Maaf, terjadi kesalahan tak terduga. Silahkan coba lagi nanti.'
        return
      }

      this.reg_alert_variant = 'bg-green-500'
      this.reg_alert_msg = 'Sukses! Akun anda berhasil dibuat.'
      // window.location.reload()
      location.reload()
      console.log(values)
    }
  }
}
</script>
