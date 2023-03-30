<template>
  <div class="container">
    <div class="control">
      <button @click="sort" class="btn-edit tooltip">
        sort
        <span class="tooltiptext">sort alphabetically</span>
      </button>

      <div class="search-field">
        <input type="text" v-model="searchValue" placeholder="Search" />
        <button class="search_btn" @click="search(searchValue)">
          <img src="../assets/search.svg" alt="search" />
        </button>
        <button class="search_btn" @click="clearSearchField">
          <img src="../assets/close.svg" alt="search" />
        </button>
      </div>
      <div>
        <button @click="changeTab('all')" class="btn-edit" :class="[completed === 'all' ? 'active' : '']">All</button>
        <button @click="changeTab('completed')" class="btn-edit" :class="[completed === 'completed' ? 'active' : '']">
          Completed
        </button>

        <button @click="changeTab('process')" class="btn-edit" :class="[completed === 'process' ? 'active' : '']">
          Process
        </button>
        <button @click="changeTab('queue')" class="btn-edit" :class="[completed === 'queue' ? 'active' : '']">
          Not Completed
        </button>
      </div>
    </div>
    <hr />
  </div>
  <div v-if="loader">
    <LoaderApp />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LoaderApp from '@/components/LoaderApp';
export default {
  components: {
    LoaderApp,
  },
  name: 'todo-status',
  props: {},
  data() {
    return {
      loader: false,
      searchValue: '',
    };
  },
  computed: {
    ...mapGetters(['completed', 'allCompletedTodos', 'sortedPosts', 'currentPage', 'completed']),
  },
  methods: {
    ...mapActions([
      'changeCompleted',
      'changeSearch',
      'pageCount',
      'changeSort',
      'updateVisibleTodos',
      'hiddenPagination',
    ]),
    changeTab(value) {
      this.changeCompleted(value);
      this.searchValue = '';
      if (value === 'all') {
        this.hiddenPagination(true);
        this.updateVisibleTodos(this.currentPage);
        this.pageCount();
      } else {
        this.hiddenPagination(false);
      }
    },
    search(value) {
      this.changeSearch(value);
      this.hiddenPagination(false);
    },
    sort() {
      this.changeSort();
      this.searchValue = '';
    },
    clearSearchField() {
      this.searchValue = '';
      this.hiddenPagination(true);
      this.updateVisibleTodos(this.currentPage);
      this.pageCount();
    },
  },
  mounted() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  },
};
</script>

<style scoped>
button:hover {
  background-color: rgb(145, 133, 130);
}
.active {
  color: white;
  background-color: rgb(0, 202, 135);
}
.active:hover {
  color: white;
  background-color: rgb(0, 202, 135);
}
.search-field {
  margin-right: 20px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ac2929;
}

.search-field:hover {
  border: 1px solid rgb(0, 202, 135);
}
.search-field:focus {
  border: 1px solid rgb(0, 202, 135);
}
.search_btn {
  margin-left: 8px;
  background: transparent;
  border: none;
}
.control {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
