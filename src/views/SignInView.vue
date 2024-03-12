<template>
  <div>
    <ToDoHeader/>
    <div class="bg-my-image bg-no-repeat bg-cover bg-center bg-fixed">
    <div class="flex items-center justify-center min-h-screen bg-[url('https://github.com/hyprwm/Hyprland/blob/main/assets/wall0.png')]">
      <div class="w-full max-w-lg h-[29rem] px-6 py-4 bg-gray-300 rounded-lg shadow-md text-left space-y-6">
        <div class="flex max-w-lg h-[55px] justify-center bg-gray-500 text-white rounded-lg">
          <h1 class="text-3xl font-bold">Sign In</h1>
        </div>
        <form @submit.prevent="handleSubmit" class="max-w-lg max-h-72 space-y-4 p-4 bg-gray-500 rounded-lg">
          <div>
            <label class="block text-gray-200 text-sm font-bold mb-2" for="username">
              Email or Username
            </label>
            <input
              class="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:shadow-outline-blue"
              id="username"
              type="text"
              v-model="username"
              required
            />
          </div>
          <div>
            <label class="block text-gray-200 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              class="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:shadow-outline-blue"
              id="password"
              type="password"
              v-model="password"
              required
            />
          </div>
          <div>
            <label class="block text-gray-200 text-sm font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input
              class="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:shadow-outline-blue"
              id="c-password"
              type="password"
              v-model="c_password"
              required
            />
          </div>
        </form>
        <div class="flex items-center justify-center">
          <button
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

export default {
  components: {
    ToDoHeader
  }
}
</script>
