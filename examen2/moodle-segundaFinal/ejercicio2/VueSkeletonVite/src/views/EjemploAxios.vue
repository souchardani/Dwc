<template>
    
</template>
  
<script>
  import axios from 'axios';
  export default {
      
      data(){
        return{
          
        }
      },
      mounted() {
          this.cargarUsuarios();
      },
    methods:{
      cargarUsuarios() {
              
              axios.get('../json/Usuarios.json')
                  .then((respuesta) => {
                      console.log(respuesta);
                      console.log(respuesta.data);
                  });
          }
      }
    }
</script>
  