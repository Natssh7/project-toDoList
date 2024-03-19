<template>
  <div>
    <ToDoHeader/>
    <div class="bg-my-image bg-no-repeat bg-cover bg-center bg-fixed">
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-lg h-[29rem] px-6 py-4 bg-gray-300 rounded-lg shadow-md text-left space-y-6">
        <div class="flex max-w-lg h-[55px] justify-center bg-gray-500 text-white rounded-lg">
          <h1 class="text-3xl font-bold">Sign In</h1>
        </div>
        <form @submit.prevent="handleSubmit" class="max-w-lg max-h-72 space-y-4 p-4 bg-gray-500 rounded-lg">
          <div>
            <label class="block text-gray-200 text-sm font-bold mb-2" for="fullname">
              Fullname
            </label>
            <input
              type="text"
              id="fullName"
              class="mt-1 p-2 border w-full rounded-md"
              v-model="user.fullname"
            />
          </div>
          <div>
            <label class="block text-gray-200 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input
              type="email"
              id="username"
              class="mt-1 p-2 border w-full rounded-md"
              v-model="user.email"
            />
          </div>
          <div>
            <label class="block text-gray-200 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              class="mt-1 p-2 border w-full rounded-md"
              v-model="user.password"
            />
          </div>
        </form>
        <div class="flex items-center justify-center">
          <button
          @click="saveUser"
          class="flex bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-[20px] rounded focus:outline-none focus:shadow-outline"
          type="submit"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoHeader from '@/components/ToDoHeader.vue'
import UserDataService from '@/services/UserDataService.js'

export default {
  components: {
    ToDoHeader
  },
  data () {
    return {
      message: null,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    saveUser () {
      UserDataService.create(this.user)
        .then(response => {
          // Redirect to the login page
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          // Set the error message
          this.message = error.response.data.message
        })
    }
  }
}
</script>
