<template>
     <section class="create-todo">
      <input v-model='name' type="text" placeholder="Название">
      <input v-model="desc" type="text" placeholder="Описание">
      <button @click='onCreateTodoClicked'>Создать</button>
      </section>
</template>

<script>
import {createTodo} from "@/netClient/todoService";
export default {
    name: 'CreateTodo',
    data: () => ({
        name:'',
        desc:'',
        }),
    methods: {
        async onCreateTodoClicked()
    {
      try {
       const newTodo = await createTodo({title: this.name, description: this.desc});
       if(newTodo)
       {
       //  this.todoList.push(newTodo);
         this.name = '';
         this.desc= '';
       }
       this.$emit('todo-created', newTodo)
      } catch (error) {
        console.error({error})
      }
    },},
};
</script>