<template>
  <q-footer elevated>
    <q-toolbar>
      <q-toolbar-title>
        <template v-if="props.data.length">
          Ada {{ props.data.length }} Task di daftar todo-list,
          {{ checkedItems }} tugas sudah selesai ({{ percentage }}%)
        </template>
        <template v-else> Belum ada task </template>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["data"]);

const percentage = computed(() => {
  return Math.round((checkedItems.value / props.data.length) * 100);
});

const checkedItems = computed(() => {
  return props.data.filter((item) => item.checked).length;
});
</script>
