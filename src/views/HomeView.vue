<template>
  <div class="home">
    <ToDoHeader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoHeader from '@/components/ToDoHeader.vue'

export default {
  name: 'HomeView',
  components: {
    ToDoHeader
  }
}
</script>
