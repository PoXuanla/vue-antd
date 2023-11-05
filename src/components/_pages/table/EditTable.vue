<template>
  <a-modal
    v-model:visible="value"
    title="Edit-Table"
    :footer="null"
    width="800px"
  >
    <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
      <template #bodyCell="{ column, text, record }">
        <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
          <div>
            <a-input
              v-if="editTableData[record.key]"
              v-model:value="editTableData[record.key][column.dataIndex]"
              class="m-[-5px]"
            ></a-input>
            <template v-else>{{ text }}</template>
          </div>
        </template>

        <template v-else-if="column.dataIndex === 'operation'">
          <div
            class="flex justify-center align-center"
            v-if="editTableData[record.key]"
          >
            <a-button @click="confirm(record)">confirm</a-button>
            <a-button @click="cancel(record.key)">cancel</a-button>
          </div>
          <a-button v-else @click="edit(record)">edit</a-button>
        </template>
      </template>
    </a-table>
  </a-modal>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const columns = [
  {
    title: "ame",
    dataIndex: "name",
    key: "name",
    width:'200px'
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
  {
    title: "Operation",
    dataIndex: "operation",
  },
];
interface dataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}
const editTableData = reactive<Record<string, dataItem>>({});

const dataSource = reactive<dataItem[]>([
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
const edit = (record: dataItem) => {
  editTableData[record.key] = { ...record };
};
const confirm = (record: dataItem) => {
  const index = dataSource.findIndex((item) => item.key === record.key);
  dataSource[index] = { ...editTableData[record.key] };
  delete editTableData[record.key];
};
const cancel = (key: string) => {
  delete editTableData[key];
};
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
