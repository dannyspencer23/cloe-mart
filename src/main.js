import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3NativeNotification from 'vue3-native-notification'

// SWIPER CAROUSEL
import 'swiper/css'

// FIREBASE
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'

// CSS
// import './assets/main.css'
import './assets/base.css'

import App from './App.vue'
import router from './router'

// CUSTOM
let app

auth.onAuthStateChanged(() => {
  if (!app) {
    // simple and pinia can run in vue devtools
    app = createApp(App)
      .use(createPinia())
      .use(router)
      .use(VeeValidatePlugin)
      .use(Vue3NativeNotification, {
        requestOnNotify: true
      })
      .mount('#app')

    // this is so bad
    // pinia doesn't exist in vue Dev Tools
    // app = createApp(App);

    // app.use(createPinia());
    // app.use(router);
    // app.use(VeeValidatePlugin);

    // app.mount("#app");
  }
})

// DEFAUL
// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
