<template>  
    <ul>
            <li v-for="tarea in tareas">
                {{ tarea }}
            </li>
    </ul>
    <p></p>
    <!--1 Con Vuejs -->
    <!-- <input type="text" placeholder="Introduce tu tarea" v-model="nuevaTarea">
    <input type="button"  value="Enviar tarea" v-on:click="agregarTarea"> -->

    <!--2 Con Vuejs -->
    <input type="text" placeholder="Introduce tu tarea" v-model="nuevaTarea" @keyup.enter="agregarTarea">

    
    <!--3 Con Vuejs -->
    <!-- <form v-on:submit.prevent="agregarTarea">
        <input type="text" placeholder="Introduce tu tarea" v-model="nuevaTarea" >
        <input type="submit" value="Enviar tarea" >
    </form> -->
        
</template>

<script setup>
    import { ref } from 'vue';
    const nuevaTarea = ref('');
    let tareas = ref( ['Aprender Vue.js', 'Aprender ES6', 'Programar algo todos los días']);

    function agregarTarea(){
        tareas.value.unshift(nuevaTarea.value);
        nuevaTarea.value=null;
    }
</script>
<style>
</style>