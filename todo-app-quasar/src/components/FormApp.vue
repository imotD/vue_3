<template>
  <form @submit.prevent="onSubmit" class="flex justify-center q-gutter-x-md">
    <q-input filled v-model="name" placeholder="Todo..." style="width: 500px" />

    <q-btn :disabled="!name" type="submit" color="secondary" label="Add" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let name = ref("");
// const emit = defineEmits(["add"]);

const onSubmit = () => {
  if (!name.value) return;

  const newItem = {
    name: name.value,
    checked: false,
    id: Date.now(),
  };

  // emit("add", newItem);

  store.commit("todo/addTodo", newItem);

  name.value = "";
};
</script>
