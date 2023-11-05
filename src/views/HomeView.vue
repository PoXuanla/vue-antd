<template>
  <div class="grid grid-cols-3 gap-[5px] justify-center p-10">
    <RouterLink
      class="rounded-[5px] border b-slate-400 p-2 text-center text-slate-500 hover:bg-slate-400 hover:text-slate-50 transition-all duration-100"
      v-for="v in views"
      :to="v.url"
      >{{ v.name }}</RouterLink
    >
  </div>
</template>

<script setup>
const views = [
  {
    name: "table",
    url: "/table",
  },
  // {
  //   name: "table",
  //   url: "/table",
  // },
  // {
  //   name: "table",
  //   url: "/table",
  // },
];
</script>

<style lang=""></style>
