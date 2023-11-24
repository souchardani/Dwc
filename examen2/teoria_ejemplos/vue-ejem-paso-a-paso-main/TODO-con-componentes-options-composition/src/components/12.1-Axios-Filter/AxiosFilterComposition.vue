<template>  
    <img 
        v-for="persona in personas" 
        :src="persona.picture.medium" 
        :alt="persona.name.first">
    <hr><hr>


    
    <select name="" id="" v-model="sexo">
        <option value="male">Hombre</option>
        <option value="female">Mujer</option>
    </select>
    <img 
        v-for="persona in personasHM" 
        :src="persona.picture.medium" 
        :alt="persona.name.first">  
</template>

<script setup>
    import axios from 'axios'
    import { ref, onMounted, computed } from 'vue';
    const personas = ref([]);
    const sexo =ref('');

    onMounted( ()=>{
        cargarPersonas();
    })

    function cargarPersonas(){
        axios.get('https://randomuser.me/api/?results=10')
                .then((respuesta) => {
                    console.log(respuesta);
                    personas.value = respuesta.data.results; //la respuesta con vue-resource venia en body, AHORA VIENE EN data
                });
    }
    const personasHM = computed(()=>{
        return personas.value.filter((sdg) => sdg.gender == sexo.value);
    })

   
</script>
<style>
</style>