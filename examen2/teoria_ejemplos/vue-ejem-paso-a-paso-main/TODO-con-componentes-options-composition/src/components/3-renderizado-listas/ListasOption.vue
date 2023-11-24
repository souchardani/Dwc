<template>
    <!-- {{ laborales }} -->
        <!-- Matriz -->
        <ul>
            <li v-for="dia in laborales">{{ dia }}</li>
        </ul>

        <!-- Matriz de objetos (collection) -->
        <ul>
              <li v-for="(tarea, index) in tareas">
                {{ index}} - {{ tarea.nombre }} 
                <small>({{ tarea.prioridad}})</small>
            </li>
        </ul>

        <!-- Objeto -->
        <ul>
            <li v-for="(value, key, index) in persona">
               {{ index }} - {{ key }}: {{value}} 
            </li>
        </ul>
        <pre>{{ $data }}</pre>

</template>

<script>
    export default{
    name: 'ListasOption',
    components: {},
    data(){
        return{
            laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],  
            tareas: [
                {nombre: 'Hacer la compra', prioridad: 'baja'},
                {nombre: 'Aprender Vue', prioridad: 'alta'},
                {nombre: 'Ir al gimnasio', prioridad: 'baja'},
            ],
            persona: {
                nombre: 'Txomin',
                profesion: 'dev',
                ciudad: 'Bilbao'
            }
        }
    },
    methods:{
        
    }
}
</script>