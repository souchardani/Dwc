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
        <pre>{{ $data }}</pre>
</template>

<script>
    export default{
        name: 'PropiedadesComputadasOption',
    components: {},
    data(){
        return{
            mensaje: 'Hola Mundo :) !',
            nuevaTarea: null,
            tareas: [{
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
                },
            ] 
        }
    },
    methods:{
        agregarTarea() {
            // this, hace referencia a la instancia Vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            });
            this.nuevaTarea = null;
        },
        
    },
    computed:{
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad() {
            return this.tareas.filter(function(tarea){
                return tarea.prioridad;
            });
            // return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad() {
             // return this.tareas.sort(function(a, b){
             //        return b.antiguedad - a.antiguedad;
             // });
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
    }
</script>