<template>
    <div>
        <h1>이것은 보일러 플레이트에요!</h1>
        <router-link to="todo">todo app으로 이동</router-link>
    </div>
</template>

<script lang="ts">
    import {Vue} from 'vue-property-decorator';

    export default class Home extends Vue {}
</script>
