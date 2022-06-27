<template>
  <iframe :src="props.src" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps(['src'])
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
</style>