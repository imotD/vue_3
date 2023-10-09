<template>
  <div>
    <h3>Pending</h3>
    <ul>
      <li v-for="todo in pendingTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
enum TodoStatus {
  Pending = 'Pending',
  InProgress = 'inProgress',
  Completed = 'Completed'
}

interface Todo {
  id: number
  title: string
  description: string
  status: TodoStatus
}

const pendingTodos: Todo[] = [
  {
    id: 1,
    title: 'Learn Vue 3',
    description: 'Lorem Ipsum domore',
    status: TodoStatus.Pending
  }
]
</script>

<style scoped></style>
