<template>
    <div   :class="['p-3','text-white', fondo]"><!--Aquí utilizo un valor classtradicional y un valor class bindeado mediante un array a vuejs,
            donde hay dos valores estáticos (cuidado como están bindeados se ponen entre comas)
            y uno enlazado con la variable fondo declarada en el data-->    
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus inventore at nobis cupiditate quo fuga aperiam vel officiis. Ad aliquam est vitae sint, explicabo architecto ducimus blanditiis a quaerat.  
            </p>
        </div>


        <h1>Tareas</h1>


        <h2>{{ tareasCompletadas.length }} completadas</h2>
        
        <!-- En este 2º caso asociamos la clase completado en caso de que la tarea esté completada -->
        <ul>
            <li v-for="tarea in tareas"
                @click="completarTarea(tarea)"
                v-bind:class="{completado: tarea.completado}">
                {{ tarea.titulo }}
            </li>
        </ul>
</template>

<script setup>
    import { ref, computed } from 'vue';
    const tareas = ref( [
                        {titulo: 'Hacer la compra', completado: false},
                        {titulo: 'Aprender Vue.js', completado: false},
                        {titulo: 'Aprender Firebase', completado: false},
                        {titulo: 'Dominar ES6', completado: false},
                        {titulo: 'Salir a correr', completado: false},
                    ]);
    const fondo = ref('bg-warning');
    function completarTarea(tarea) {
                tarea.completado = !tarea.completado;
    }
    const tareasCompletadas = computed(
        () => {
            return tareas.value.filter((tarea) => tarea.completado)
        }
    )


</script>   


<style scope>
li {
    cursor: pointer;
}
.completado {
    text-decoration: line-through;
}
</style>