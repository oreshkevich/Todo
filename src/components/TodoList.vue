<template>
  <div class="container">
    <div class="not-found" v-if="searchText">{{ searchText }}</div>
    <div v-for="todo in allCompletedTodos" :key="todo.id">
      <TodoItem :todo="todo" />
      <hr />
    </div>
    <div v-if="hiddenPaginationState">
      <button class="btn-page" :disabled="currentPage === 0" @click="prevPage">Previous</button>
      {{ currentPage + 1 }} of {{ pageCountSize }}
      <button class="btn-page" :disabled="currentPage === pageCountSize - 1" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters([
      'allCompletedTodos',
      'currentPage',
      'pageSize',
      'pageCountSize',
      'hiddenPaginationState',
      'searchText',
    ]),
  },
  methods: {
    ...mapActions(['updateVisibleTodos', 'increase', 'decrease', 'pageCount', 'hiddenPagination']),
    nextPage() {
      this.increase();
      this.updateVisibleTodos(this.currentPage);
      this.pageCount();
    },
    prevPage() {
      this.decrease();
      this.updateVisibleTodos(this.currentPage);
      this.pageCount();
    },
  },
  mounted() {
    this.updateVisibleTodos(this.currentPage);
    this.pageCount();
  },
};
</script>

<style scoped>
.btn-page {
  border: 2px solid #ac2929;
  background-color: #64ac29;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 12px;
  outline: none;
  transition: 0.2s;
  margin-right: 10px;
  margin-left: 10px;
}
.not-found {
  color: #ac2929;
}
.btn-page:hover:disabled {
  cursor: not-allowed;
}
</style>
