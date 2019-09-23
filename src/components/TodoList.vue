<template>
    <div class="todo-list">
        <TodoItem v-for="item in todoList" :key="item.id" :todo="item"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TodoItem from '@/components/TodoItem.vue';
    import TodoItemType from '@/models/TodoItemType'

    @Component({ components: { TodoItem, } })
    export default class TodoList extends Vue {
        private todoList: Array<TodoItemType> = [{
            id: 1,
            task: 'testing',
            date: new Date()
        }]
    }
</script>

<style>
    .todo-list > .todo-item {
        margin: 10px 0;
    }
</style>
