import { createStore } from 'vuex';

export default createStore({
  state: {
    searchValue: '',
    currentPage: 0,
    pageSize: 5,
    pageCountSize: 1,
    hiddenPaginationState: false,
    updatePage: '',
    searchText: '',
    visibleTodos: [],
    completed: 'all',
    completedTodos: JSON.parse(window.localStorage.getItem('test'))
      ? JSON.parse(window.localStorage.getItem('test'))
      : [],
    todos: JSON.parse(window.localStorage.getItem('testObject'))
      ? JSON.parse(window.localStorage.getItem('testObject'))
      : [],
    token: JSON.parse(window.localStorage.getItem('testObject')),
  },
  getters: {
    allCompletedTodos: (state) => state.completedTodos,
    allVisibleTodos: (state) => state.visibleTodos,
    allTodos: (state) => state.todos,
    currentPage: (state) => state.currentPage,
    pageSize: (state) => state.pageSize,
    pageCountSize: (state) => state.pageCountSize,
    hiddenPaginationState: (state) => state.hiddenPaginationState,
    completed: (state) => state.completed,
    searchText: (state) => state.searchText,
  },
  actions: {
    changeCompleted({ commit }, value) {
      commit('change_complete', value);
    },
    updateVisibleTodos({ commit }, pageNumber) {
      commit('update_visible_todos', pageNumber);
    },
    changeSearch({ commit }, value) {
      commit('change_search', value);
    },
    changeSort({ commit }) {
      commit('change_sort');
    },

    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    addLocal({ commit }, todo) {
      commit('add_local', todo);
    },
    deleteTodo({ commit }, id) {
      commit('delete_todo', id);
    },
    updateTodo({ commit }, todo) {
      commit('update_todo', todo);
    },
    increase({ commit }) {
      commit('increase');
    },
    decrease({ commit }) {
      commit('decrease');
    },
    hiddenPagination({ commit }, value) {
      commit('hidden_pagination', value);
    },
    pageCount({ commit }) {
      commit('page_count');
    },
    asyncLocal({ commit }) {
      setTimeout(() => {
        commit('add_local');
      }, 1000);
    },
  },
  mutations: {
    add_local(state) {
      state.completedTodos = state.todos;
    },
    add_todo(state, todo) {
      state.todos.push(todo);
      state.completedTodos = state.todos;
      state.completedTodos = state.completedTodos.filter((t) => t.complete == state.completed);
      state.searchText = '';
      state.completed = 'all';
      localStorage.testObject = JSON.stringify(state.todos);
      localStorage.test = JSON.stringify(state.completedTodos);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
      state.completedTodos = state.todos;
      state.searchText = '';
      state.completed = 'all';
      localStorage.testObject = JSON.stringify(state.todos);
      localStorage.test = JSON.stringify(state.completedTodos);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
      state.searchText = '';
      localStorage.testObject = JSON.stringify(state.todos);
      localStorage.test = JSON.stringify(state.completedTodos);
    },
    change_complete(state, value) {
      state.completedTodos = state.todos;
      state.completed = value;
      state.completedTodos = state.completedTodos.filter((item) => item.status === value);
      state.searchText = '';
      localStorage.testObject = JSON.stringify(state.todos);
      localStorage.test = JSON.stringify(state.completedTodos);
    },
    change_search(state, value) {
      console.log(value);
      let search = state.completedTodos.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()));

      state.completedTodos = search;
      if (state.completedTodos.length === 0) {
        state.searchText = 'Nothing was found on the request';
      } else {
        state.searchText = '';
      }
    },
    change_sort(state) {
      let sort = state.completedTodos.sort((postA, postB) =>
        postA.title.toLowerCase() < postB.title.toLowerCase() ? -1 : 1
      );
      state.completedTodos = sort;
      state.searchText = '';
    },

    increase(state) {
      state.currentPage++;
    },
    hidden_pagination(state, value) {
      state.hiddenPaginationState = value;
    },
    decrease(state) {
      state.currentPage--;
    },
    page_count(state) {
      let lengthTodos = state.todos.length,
        lengthPageSize = state.pageSize;
      state.pageCountSize = Math.ceil(lengthTodos / lengthPageSize);
    },
    update_visible_todos(state, pageNumber) {
      const start = pageNumber * state.pageSize,
        end = start + state.pageSize;
      state.completedTodos = state.todos.slice(start, end);
      state.searchText = '';
    },
  },
  modules: {},
});
