<template>
<section class="todo-item">
    <div class='title'>Название:<br>{{todoItem.title}}</div>
    <div class='desc'>Описание:<br>{{todoItem.description}} </div>
        <div class="actions">
         <input 
            type='checkbox' 
            class="checkbox"
            v-model="todoItem.isDone"
            :checked='todoItem.isDone'
            @input="onCheckBoxInput(todoItem.id, todoItem.isDone)"
            />
            <button @click='onDeleteTodoClicked(todoItem.id)'>x</button>
        </div>
</section>
</template>

<script>
import {patchTodo, deleteTodo} from "@/netClient/todoService";
export default ({
    props: {
        todoItem:{
            type: Object,
            required: true
        }
    },
    name: 'TodoItem',
    methods:{
        async onCheckBoxInput(id, isDone){
      try {
       // const todo = this.todoList.find((item)=> item.id ===id)
         await patchTodo({id,isDone: !isDone});
        // this.fetchTodoList() //fix this 
        // todo.isDone = !todo.isDone
         this.$emit('todo-done')
      } catch (error) {
        console.error({error})
      }
    },
        async onDeleteTodoClicked(id)
    {
      try {
       await deleteTodo({id});
       this.$emit('todo-deleted')
      } catch (error) {
        console.error({error})
      }
    },
}})
</script>
