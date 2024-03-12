<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-200">
      <div class="w-full max-w-lg max-h-96 px-6 py-4 bg-gray-100 rounded-lg shadow-md text-left">
        <div class="flex max-w-lg max-h-20 justify-center pb-4 bg-gray-400 text-white rounded-lg">
          <h1 class="text-2xl font-bold">Log in</h1>
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
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </form>
    </div>
  </div>
</template>

  <style>
  .flex {
    align-items: center;
    justify-content: center;
  }

  .max-w-lg {
    max-width: 500px;
    width: 100%;
  }

  .max-h-96 {
    max-height: 384px;
    height: 100%;
  }

  .max-h-72 {
    max-height: 288px;
    height: 100%;
  }

  .max-h-20 {
    max-height: 75px;
    height: 100%;
  }
  </style>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      remember: false
    }
  },
  methods: {
    handleSubmit () {
      // Submit form data here
      alert('Form submitted!')
    }
  }
}
</script>
