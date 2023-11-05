<template>
  <div class="p-10">
    <div class="grid grid-cols-3 gap-[5px] justify-center p-10">
      <button
        class="rounded-[5px] border b-slate-400 p-2 text-center text-slate-500 hover:bg-slate-400 hover:text-slate-50 transition-all duration-100"
        v-for="form in Forms"
        @click="form.isOpen = true"
      >
        {{ form.name }}
      </button>
    </div>
    <edit-table v-model="Forms[0].isOpen" />
  </div>
</template>

<script setup>
import EditTable from "../components/_pages/table/editTable.vue";

const Forms = reactive([
  {
    name: "edit",
    isOpen: false,
  },
]);
const openModal = ref(false);
const showModal = () => {
  openModal.value = true;
};
const dataSource = reactive([
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
]);
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
</script>

<style lang="postcss" scoped>
.ant-table-wrapper {
  @apply bg-slate-400 rounded-lg;
}
</style>
