<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/TX.jpg">
    <br>
    <img alt="Vue logo" src="../assets/euskadi-azul_200x200.jpg">
    <!-- <img alt="Vue logo" src="../assets/turismo_200x200.png"> -->
    <HelloWorld msg="Ongi etorri CIFP Txurdinaga LHII-ko turismo orrira"/>
    <hr>
    <!-- <h3>
      Si quieres personalizar y guardar de manera local tu recorrido turístico danos tu nombre. Si no tus preferencias no se guardarán.
    </h3>  
    <form @submit.prevent>
		<p>
			<label for="nombre">Nombre: </label>
			<input type="text" id="nombre" placeholder="Introduce tu nombre" v-model="nombreUsuario">
		</p>
             
      <br>
      <button value="Login usuario" @click="comprobarUsuario">Login Usuario</button>
  </form> -->


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{
      nombreUsuario:'',

    }
  },
  methods:{
    comprobarUsuario(){
      if(localStorage.getItem("nombreUsuario")){
        alert();
        alert("Bienvenido " +localStorage.getItem("nombreUsuario"))
        this.nombreUsuario=localStorage.getItem('nombreUsuario')
        }
      else{
        alert("Nuevo usuario: " + this.nombreUsuario)
        localStorage.setItem("nombreUsuario", this.nombreUsuario)
      }
    }
  }
}
</script>
