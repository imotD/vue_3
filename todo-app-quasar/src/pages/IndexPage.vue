<template>
  <HeaderApp />
  <FormApp />

  <TodoLists
    :data="todoListsData"
    @onDeleteItem="handleDeleteItem"
    @onToggleItem="handleToggleItem"
    @onDeleteItemAll="handleDeleteAll"
  />
  <Footer :data="todoListsData" />
</template>

<script setup>
import HeaderApp from "src/components/HeaderApp.vue";
import FormApp from "src/components/FormApp.vue";
import TodoLists from "src/components/TodoLists.vue";
import Footer from "src/components/FooterApp.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const todoListsData = computed(() => store.state.todo.todoListData);

const handleDeleteItem = (value) =>
  store.commit("todo/handleDeleteItem", value);

const handleToggleItem = (id) => {
  store.commit("todo/handleToggleItem", id);
};

const handleDeleteAll = () => store.commit("todo/handleDeleteAll");
</script>
