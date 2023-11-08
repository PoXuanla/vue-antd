<template>
  <RouterView />
  <button @click="prefetch">prefetch</button>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
const prefetch = () => {
  const globModules = import.meta.glob("/src/views/*.vue");
  Object.entries(globModules).forEach(([path, globModule]) => {
    console.log(path, globModule);
    globModule().then((mod) => {
      console.log(path + "模块内容", mod.default);
    });
  });
};
</script>
