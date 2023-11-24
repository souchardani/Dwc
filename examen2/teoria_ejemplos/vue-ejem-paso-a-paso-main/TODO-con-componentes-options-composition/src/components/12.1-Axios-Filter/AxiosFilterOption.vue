<template>
    <br>
    <img 
            v-for="persona in personas" 
            :src="persona.picture.medium" 
            :alt="persona.name.first">
        <hr><hr>


        
        <select name="" id="" v-model="sexo">
            <option value="male" selected>Hombre</option>
            <option value="female">Mujer</option>
        </select>
        <img 
            v-for="persona in personasHM" 
            :src="persona.picture.medium" 
            :alt="persona.name.first">

</template>

<script>
import axios from 'axios'
    export default{
    name: 'AxiosFilteroption',
    components: {},
    data(){
        return{
            personas: [],
            sexo: ''
        }
    },
    methods:{   
        cargarPersonas() {
            axios.get('https://randomuser.me/api/?results=20')
                .then((respuesta) => {
                    console.log(respuesta);
                    this.personas = respuesta.data.results; //la respuesta con vue-resource venia en body, AHORA VIENE EN data
                });
        }
    }, 
    mounted() {
        this.cargarPersonas();
    },
    computed:{
        personasHM() {
            return this.personas.filter((sdg) => sdg.gender == this.sexo);
        }
    }
}
</script>

<style>
</style>