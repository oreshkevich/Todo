<template>
  <div class="home">
    <div class="todo-wrapper">
      <h1 class="todo-title">Vue Todos</h1>
      <TodoInput />
      <TodoStatus />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoStatus from '@/components/TodoStatus';

export default {
  name: 'HomeView',
  components: {
    TodoInput,
    TodoList,
    TodoStatus,
  },
};
</script>

<style>
.home {
  /* background-color: #bebbbb; */
}
.todo-wrapper {
  margin: auto;
  width: 800px;
  border: 5px solid rgba(73, 204, 249, 1);
  padding: 20px;
  min-height: 400px;
}
.todo-title {
  text-align: center;
  margin-bottom: 10px;
}
</style>
