<template>  
    <!-- {{ laborales }} -->
        <!-- Matriz -->
        <ul>
            <li v-for="dia in laborales">{{ dia }}</li>
        </ul>
        <br>
        <!-- Matriz de objetos (collection) -->
        <ul>
              <li v-for="(tarea, index) in tareas">
                {{ index}} - {{ tarea.nombre }} 
                <small>({{ tarea.prioridad}})</small>
            </li>
        </ul>
        <br>
        <!-- Objeto -->
        <ul>
            <li v-for="(value, key, index) in persona">
               {{ index }} - {{ key }}: {{value}} 
            </li>
        </ul>
        
</template>

<script setup>
    import { ref } from 'vue'
    let counter = ref(0);

    const laborales =ref( ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']);  
    const tareas= ref( [
                {nombre: 'Hacer la compra', prioridad: 'baja'},
                {nombre: 'Aprender Vue', prioridad: 'alta'},
                {nombre: 'Ir al gimnasio', prioridad: 'baja'},
            ]);
    const persona= ref( {
                nombre: 'Txomin',
                profesion: 'dev',
                ciudad: 'Bilbao'
            })



</script>

<style scoped>

</style>