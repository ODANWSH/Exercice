<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.checked" />
        <span
          :style="{ textDecoration: todo.checked ? 'line-through' : 'none' }"
          style="margin-left: 10px"
        >
          {{ todo.text }}
        </span>
      </li>
    </ul>
    <p v-if="todos.length > 0">You have {{ todos.length }} todos</p>
    <p v-else>You have nothing to do</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: '',
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo, checked: false })
        this.newTodo = ''
      }
    },
  },
}
</script>
