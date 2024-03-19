<template>
  <div id="app">
    <router-view/>
    <div class="relative">
      <MainFooter class="absolute inset-x-0 bottom-0"/>
    </div>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
export default {
  components: {
    MainFooter
  }
}
</script>
