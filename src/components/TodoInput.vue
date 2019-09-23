<template>
    <div class="todo-input">
        <input v-model="todo" title="input your todo item" placeholder="type what to do">
        <button @click="addTodo">add</button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class TodoInput extends Vue {
        private todo: string = '';

        addTodo() {
            alert(`Not implemented yet! debug: ${this.todo}`)
            this.todo = ''
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo-input {
        display: flex;
        margin-bottom: 20px;
    }

    .todo-input > input {
          flex: 1;
          margin-right: 10px;
          height: 3rem;
          outline: none;
          border: none;
          border-radius: 14px;
          text-indent: 14px;
          font-size: 1.4rem;
          font-weight: 500;
      }

    .todo-input > button {
        background-color: #22cc88;
        border-radius: 4px;
        border: 3px solid white;
        color: white;
        font-size: 1.4rem;
        font-weight: 500;
    }

    .todo-input > button:focus {
        outline: none;
    }

    .todo-input > button:hover {
        cursor: pointer;
        background-color: white;
        color: #22cc88;
    }
</style>
