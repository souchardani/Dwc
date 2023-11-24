<template>
    <h1>{{ mensaje }}</h1>
        <!-- <h2>{{ mensaje.split('').reverse().join('')  }}</h2> -->

        <h2>{{ mensajeAlReves}}</h2>
        

        
       <ul>
            <!-- Caso de no usaar propedades computadas -->
            <!-- <li v-if="tarea.prioridad" v-for="tarea in tareas">
                {{ tarea.titulo }} -->
            <!-- <li v-for="tarea in tareasConPrioridad">
                {{ tarea.titulo }}
            </li> -->
        </ul> 

        <ul>
            <li v-for="tarea in tareasPorAntiguedad">
                {{ tarea.titulo }}
            </li>
        </ul> 

        <form v-on:submit.prevent="agregarTarea">
            <input type="text" placeholder="Introduce tu tarea" v-model="nuevaTarea" >
            <input type="submit" value="Enviar tarea" >
        </form>

</template>

<script setup>
    import { ref, computed } from 'vue';
    const mensaje = ref( 'Hola Mundo :) !');
    const nuevaTarea = ref(null);
    const tareas = ref (
        [{
                    titulo: 'Aprender Vue.js',
                    prioridad: true,
                    antiguedad: 23
                },
                {
                    titulo: 'Aprender ES6',
                    prioridad: false,
                    antiguedad: 135
                },
                {
                    titulo: 'Programar algo todos los días',
                    prioridad: true,
                    antiguedad: 378
                }]
        );
   const agregarTarea= () =>{
        tareas.value.unshift(nuevaTarea.value);
        nuevaTarea.value=null;
    } 
    const mensajeAlReves= computed (() => {
            return mensaje.value.split('').reverse().join('');
        })
    const tareasConPrioridad =computed( () =>{
        tareas.value.filter(function(tarea){
                return tarea.prioridad;
            })
    });
    const tareasPorAntiguedad = computed(()=>{
        return tareas.value.sort((a,b)=> b.antiguedad - a.antiguedad)
    })

</script>   


<style>
</style>