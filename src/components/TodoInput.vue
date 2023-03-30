<template>
  <div class="form-todo">
    <form @submit.prevent class="container">
      <div class="form">
        <div class="form__item">
          <label class="form__label" for="title">Task name: </label
          ><input name="title" placeholder="Task name" v-model="todoText" class="form__control" type="text" />
        </div>
        <div class="form__item">
          <label class="form__label" for="title">Task description: </label
          ><input
            name="title"
            placeholder="Task description"
            class="form__control"
            type="text"
            v-model="todoDescription"
          />
        </div>
        <button class="btn" @click="addTodoI">Add a new task</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      todoText: '',
      todoDescription: '',
    };
  },
  computed: {
    ...mapGetters(['allCompletedTodos', 'completed', 'allVisibleTodos', 'currentPage', 'pageSize']),
  },
  methods: {
    ...mapActions(['addTodo', 'addLocal', 'updateVisibleTodos', 'pageCount', 'hiddenPagination']),

    addTodoI() {
      this.addTodo({
        id: Math.random(),
        title: this.todoText,
        description: this.todoDescription,
        status: 'queue',
      });
      this.todoText = '';
      this.todoDescription = '';
      this.updateVisibleTodos(this.currentPage);
      this.pageCount();
      this.hiddenPagination(true);
    },
  },

  mounted() {
    if (localStorage.testObject) {
      this.addLocal(...JSON.parse(localStorage.testObject));
    }
  },
};
</script>

<style scoped>
.form__item {
  margin-bottom: 10px;
}
.form__label {
  align-items: center;
  display: flex;
  color: #fff;
}
.form__item input {
  padding: 14px 32px 14px 16px;
  height: 40px;
  text-indent: 10px;
  border: 1px solid #fff;
  border-radius: 0;
  box-sizing: border-box;
  outline: none;
  transition: 0.2s border;
}
</style>
