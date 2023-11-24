<template>
    <img 
            v-for="persona in personas" 
            :src="persona.picture.thumbnail" 
            :alt="persona.name.first">
    <pre>{{ $data }}</pre>
</template>

<script> 
    import axios from 'axios'
    export default{
    name: 'AxiosOption',
    components: {},
    data(){
        return{
            personas: []  
        }
    },
    mounted(){
        this.cargarPersonas();
    },
    methods:{
        cargarPersonas(){
            axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                    console.log(respuesta);
                    this.personas = respuesta.data.results; //la respuesta con vue-resource venia en body, AHORA VIENE EN data
                }); 
        }
    }
}
</script>

<style>

</style>