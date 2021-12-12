<template>
  <div class="homepage base-page">
    <CreateTodo @todo-created="onTodoCreated" />
     <div class="separator"><hr/></div>
    <div class="delete-all">
      <button @click='onDeleteAllTodoClicked'>Удалить все</button>
    </div>
    <!-- Выводим задания -->
    <ul class="todo-list">
      <!-- v-for для списоков -->
      <!-- Списки vue работает только по ключам поэтому он тут -->
      <TodoItem
        v-for="todoItem in todoList"
        @todo-done="onTodoDone"
        @todo-deleted="onTodoDeleted"
        :key="todoItem.id"
        :todoItem="todoItem"
        :class="{ done: todoItem.isDone }"
      />
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import TodoItem from "@/components/TodoItem";
import { fetchTodoList, deleteAllTodo } from "@/netClient/todoService";
export default {
  name: "HomePage",
  components: {
    CreateTodo,
    TodoItem,
  },
  data: () => ({
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    onTodoCreated() {
      // this.todoList.unshift(newTodo) //unshift - добавление в начало
      this.fetchTodoList();
    },
    onTodoDone() {
      this.fetchTodoList();
    },
    onTodoDeleted() {
      this.fetchTodoList();
    },
    async onDeleteAllTodoClicked(){
      try {
        await deleteAllTodo();
        this.fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>