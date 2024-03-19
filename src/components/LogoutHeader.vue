<template>
    <div class="home bg-gray-300">
      <div class="flex justify-between items-center py-4 px-6">
        <div class="text-xl font-bold">Y.Y.N</div>
        <div class="text-xl font-bold">To-do List Maker</div>
        <div class="text-xl font-bold">
          <span class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="logout">
            Logout
          </span>
        </div>
      </div>
      <!-- <LogoutHeader v-if="showLogin" @close="showLogin = false"/> -->
    </div>
  </template>

<script>
// @ is an alias to /src
import UserDataService from '@/services/UserDataService'
export default {
  methods: {
    logout () {
      UserDataService.getLogout()
        .then(response => {
          localStorage.removeItem('token')
          this.$store.dispatch('user', null)
          this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>
