<template>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";

const modules = import.meta.glob("/src/**/*.vue");
console.log(
  modules["/src/views/TableView.vue"]().then((mod) => console.log(mod))
);
</script>
