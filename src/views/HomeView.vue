<template>
    <div>
      <ToDoHeader/>
      <div class="bg-my-image bg-no-repeat bg-cover bg-center bg-fixed">
      <div class="flex h-screen">
        <div class="flex-initial relative">
          <div class="min-h-[53rem] bg-my-image bg-no-repeat bg-cover bg-center bg-fixed z-0 absolute inset-0 flex-shrink-0"></div>
        </div>
        <div class="bg-gray-700 z-5 inset-y-0 left-0 h-screen w-1/3 flex flex-col items-center justify-center pb-36">
          <div class="my-4">
            <span class="block text-center justify-center text-7xl text-gray-100 mb-4">To-Do List</span>
            <span class="block text-center justify-center text-4xl text-gray-100">Simplified</span>
          </div>
          <div class="my-4">
            <router-link
              :to="{ name: 'login' }"
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-32 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </router-link>
          </div>
          <div class="my-4">
            <router-link :to="{ name: 'signin' }" class="block text-gray-200 hover:text-gray-800 text-sm font-bold mb-2">Don't have an account? Sign In</router-link>
          </div>
        </div>
        <img class="size-2/3 mt-[5rem] mx-[2rem]" src="../../img/MainMenuImg.png"/>
    </div>
    </div>
    </div>
  </template>

<script>
import ToDoHeader from '@/components/ToDoHeader.vue'
export default {
  components: {
    ToDoHeader
  }
}
</script>
