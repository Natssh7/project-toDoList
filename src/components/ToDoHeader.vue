<template>
  <div class="home bg-gray-300">
    <div class="flex justify-between items-center py-4 px-6">
      <div class="text-xl font-bold">Y.Y.N</div>
      <div class="text-xl font-bold">To-do List Maker</div>
      <div class="text-xl font-bold">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="showLogin = true">
          Login
        </button>
      </div>
    </div>
    <ToDoHeader v-if="showLogin" @close="showLogin = false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoHeader from '@/components/ToDoHeader.vue'
export default {
  name: 'HeaderView',
  components: {
    ToDoHeader
  }
}
</script>
