import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export const useUserStore = defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),

  // solution for register multiple user
  // this code to the Database
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      // ----collection to database using UID (User nde)
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email
      })

      await userCred.user.updateProfile({
        displayName: values.name
      })

      // ---- this.userStore.userLoggedIn = true; tidak bekerja
      this.userLoggedIn = true //fix
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    },
    async signOut() {
      await auth.signOut()

      this.userLoggedIn = false
    }

    // using <script setup></script>
  }
})
