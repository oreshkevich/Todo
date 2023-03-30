<template>
  <div class="container-wrap">
    <div class="main-list-change">
      <h3 class="task-title" v-if="!editing"><strong>Title: </strong>{{ todo.title }}</h3>
      <p class="task-text" v-if="!editing"><strong>Description: </strong>{{ todo.description }}</p>
      <div v-else class="main-list">
        <input class="input-change" v-model="todoText" type="text" />
        <input class="input-change" v-model="todoDescription" type="text" />
        <div>
          <input type="radio" value="process" v-model="status" />
          <label>In the process</label>
          <br />
          <input type="radio" value="completed" v-model="status" />
          <label>Completed</label>
          <br />
          <input type="radio" value="queue" v-model="status" />
          <label>In the queue</label>
          <br />
        </div>
      </div>
      <div class="">
        <button @click="updateTodoI(todo)" class="btn-edit">{{ editing ? 'Update' : 'Edit' }}</button>
        <button @click="showPopupInfo()" class="btn-remove">Delete</button>
        <TodoPopup v-if="isInfoPopupVisible" rightBtnTitle="Add to cart" @closePopup="closeInfoPopup">
          <div>
            <p class="catalog-item__name">Do you really want to delete this task?</p>
            <button @click="deleteTodoTask(todo.id)" class="btn-remove">Delete</button>
          </div>
        </TodoPopup>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TodoPopup from './TodoPopup.vue';
export default {
  components: {
    TodoPopup,
  },
  props: {
    todo: {},
  },
  data() {
    return {
      todoText: '',
      todoDescription: '',
      editing: false,
      completed: false,
      isInfoPopupVisible: false,
      status: null,
    };
  },
  computed: {
    ...mapGetters(['currentPage']),
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'updateTodo',
      'changeCompleted',
      'updateVisibleTodos',
      'hiddenPagination',
      'pageCount',
    ]),

    deleteTodoTask(value) {
      this.deleteTodo(value);
      this.pageCount();
    },

    updateTodoI(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoText = todo.title;
        this.todoDescription = todo.description;
        this.status = todo.status;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
        todo.description = this.todoDescription;
        todo.status = this.status;
        this.changeCompleted(todo.status);
      }

      this.hiddenPagination(false);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<style scoped>
.main-list {
  margin-top: 10px;
  margin-bottom: 10px;
}
.main-list-change {
  margin-top: 10px;
  margin-bottom: 10px;
}
.container-wrap {
  margin-bottom: 10px;
}
.input-change {
  padding: 14px 32px 14px 16px;
  height: 40px;
  text-indent: 10px;
  border: 1px solid #fff;
  border-radius: 0;
  box-sizing: border-box;
  outline: none;
  transition: 0.2s border;
  width: 100%;
  margin-bottom: 10px;
}
.task-title {
  margin-top: 5px;
  margin-bottom: 5px;
}
.task-text {
  margin-top: 5px;
  margin-bottom: 5px;
}
.catalog-item__name {
  margin-bottom: 10px;
  font-size: 18px;
}
strong {
  color: #ac2929;
}
</style>
