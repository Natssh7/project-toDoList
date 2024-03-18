<template>
  <div class="home bg-gray-300">
    <div class="flex justify-between items-center py-4 px-6">
      <div class="text-xl font-bold">Y.Y.N</div>
      <div class="text-xl font-bold">To-do List Maker</div>
      <div class="text-xl font-bold">
        <router-link :to="{ name: 'login' }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </router-link>
      </div>
    </div>
    <!-- <ToDoHeader/> -->
  </div>
</template>

<!-- <script>
// @ is an alias to /src
import ToDoHeader from '@/components/ToDoHeader.vue'
export default {
  name: 'HeaderView',
  components: {
    ToDoHeader
  }
}
</script> -->
