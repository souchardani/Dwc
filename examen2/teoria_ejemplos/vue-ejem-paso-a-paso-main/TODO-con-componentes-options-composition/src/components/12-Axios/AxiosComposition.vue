<template> 
    <br>
    <h1>USERS</h1>
    <img 
            v-for="persona in personas" 
            :src="persona.picture.thumbnail" 
            :alt="persona.name.first">     
</template>

<script setup>
    import axios from 'axios'
    import { ref, onMounted } from 'vue';
    const personas = ref([]);

    onMounted( ()=>{
        cargarPersonas();
    })

    function cargarPersonas(){
        axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                    console.log(respuesta);
                    personas.value = respuesta.data.results; //la respuesta con vue-resource venia en body, AHORA VIENE EN data
                });
    }
</script>
<style>
</style>