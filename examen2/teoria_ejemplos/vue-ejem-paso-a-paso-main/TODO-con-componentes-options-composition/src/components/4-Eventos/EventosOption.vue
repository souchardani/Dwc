<template>
    <ul>
            <li v-for="tarea in tareas">
                {{ tarea }}
            </li>
    </ul>
    
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
    <pre>{{ $data }}</pre>

</template>

<script>
    export default{
    name: 'EventosOption',
    components: {},
    data(){
        return{
            nuevaTarea: null,
            tareas: [
                'Aprender Vue.js',
                'Aprender ES6',
                'Programar algo todos los días'
            ]
        }
    },
    methods:{
        agregarTarea() {
            // this, hace referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
        
    }
}
</script>