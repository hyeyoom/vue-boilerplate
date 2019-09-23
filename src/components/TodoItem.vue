<template>
    <div class="todo-item">
        <div class="task">{{ todo.task }}</div>
        <div class="date">{{ todo.date }}</div>
        <div @click="removeTodo" class="remove">remove</div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import TodoItemType from '@/models/TodoItemType'

    @Component
    export default class TodoItem extends Vue {
        @Prop() private todo!: TodoItemType;

        removeTodo() {
            alert(`Not implemented yet! debug: ${this.todo.task}`)
        }
    }
</script>

<style scoped>
    .todo-item {
        height: 4rem;
        border: 3px solid white;
        border-radius: 14px;

        color: white;

        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 20px;

        position: relative;
    }

    .todo-item:hover {
        cursor: pointer;
    }

    .todo-item.finished {
        display: block;
    }

    .todo-item.finished > .task {
        text-decoration: line-through;
    }

    .todo-item > .task,
    .todo-item > .date {
        flex: 1 0 0;
        line-height: 29px;
    }

    .todo-item > .task {
        font-size: 1.2rem;
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 330px;
    }

    .todo-item > .date {
        font-size: 0.9rem;
        font-weight: 300;
    }

    .todo-item > .remove {
        font-size: 1.2rem;
        font-weight: 300;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }

    .todo-item > .remove:hover {
        font-weight: 500;
    }
</style>
