<template>  
    <h2>Valor del contador</h2>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script setup>
    import { ref } from 'vue'
    let counter = ref(0);
    const addCounter= ()=> counter.value++;
</script>

<style>

</style>