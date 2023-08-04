<template>
  <!-- Auth Modal -->
  <!-- :class="hiddenclass" when using mapWritableState-->
  <div class="fixed z-10 inset-0 mt-10 overflow-y-auto" id="modal" :class="hiddenClass">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <!-- @click="modalStore.toggleAuthModal()" -->
            <div
              class="modal-close cursor-pointer z-50 px-2 py-1 rounded-md group hover:bg-red-600"
              @click="modalVisibility = false"
            >
              <!-- CLOSE SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 352 512"
                class="fill-black group-hover:fill-white"
              >
                <path
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                />
              </svg>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition font-bold"
                href="#"
                @click.prevent="tab = 'login'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'login',
                  'hover:text-blue-600 active: ': tab === 'register'
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition font-bold"
                href="#"
                @click.prevent="tab = 'register'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'register',
                  'hover:text-blue-600': tab === 'login'
                }"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <AppLoginForm v-if="tab === 'login'"></AppLoginForm>

          <!-- Registration Form -->
          <AppRegisterForm v-else></AppRegisterForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoginForm from '@/components/LoginForm.vue'
import AppRegisterForm from '@/components/RegisterForm.vue'
import { mapState, mapWritableState } from 'pinia'
import { useModalStore } from '@/stores/modal'
import { ref } from 'vue'

export default {
  components: { AppLoginForm, AppRegisterForm },
  setup() {
    const tab = ref('login')

    return { tab }
  },

  computed: {
    ...mapState(useModalStore, ['hiddenClass']),
    ...mapWritableState(useModalStore, {
      modalVisibility: 'isOpen'
    })
  },
  methods: {}
}
</script>

<!-- <script setup>
import AppLoginForm from '@/components/LoginForm.vue'
import AppRegisterForm from '@/components/RegisterForm.vue'
import { useModalStore } from '@/stores/modal'
// import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const modalStore = useModalStore()
const tab = ref('login')
</script> -->
