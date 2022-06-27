<template>
  <div class="header">
    <div>一额</div>
    <div>一额</div>
    <div>一额</div>
    <div>一额</div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
let show = ref(true)
function handleClick() {
  show.value = !show.value
}
</script>


<style scoped>
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
