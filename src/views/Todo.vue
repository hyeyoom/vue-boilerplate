<template>
    <div class="todo-app">
        <h1>vue-todo<router-link to="/">(main)</router-link></h1>
        <TodoInput/>
        <TodoList/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TodoInput from '@/components/TodoInput.vue'; // @ is an alias to /src
    import TodoList from '@/components/TodoList.vue'; // @ is an alias to /src

    @Component({
        components: {
            TodoInput,
            TodoList
        },
    })
    export default class Todo extends Vue {}
</script>

<style>
    .todo-app {
        margin: auto;
        margin-top: 5rem;
        width: 480px;
        background-color: #22cc88;
        padding-bottom: 2rem;
        border-radius: 10px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .todo-app > h1 {
        color: white;
        text-align: center;
        margin: 0;
        padding: 30px;
        font-size: 2.1rem;
    }

    .todo-app > div {
        box-sizing: border-box;
        padding: 0 20px;
    }
</style>