<template>
    <div class="home">
        <img alt="Turismo logo" src="../assets/turismo_200x200.png">  
    </div>
    <h1>En esta página te mostramos los eventos turísticos que has elegido</h1>
    <p></p><hr><p></p>
    <h2 v-if="!hayFavoritos">TODAVÍA NO HAS SELECCCIONADO ACTIVIDADES FAVORITAS</h2>

    <table v-if="hayFavoritos" class="content-table">
      <thead>
        <tr>
        <th scope="col">Evento</th>
        <th scope="col">Fecha</th>
        <th scope="col">Territorio</th>
        <th scope="col">Más Info</th>
        <th scope="col">Quitar de favoritos</th>
      </tr>
      </thead>
      <tbody>
        <tr  scope="row" v-for="evento in favoritos">
          <td>{{ evento.documentName }}</td>
          <td>{{ evento.eventStartDate }}</td>
          <td>{{ evento.territory }}</td>
          <td><a  target="_BLANK" :href="evento.friendlyUrl">{{ evento.friendlyUrl }}</a></td>
          <td><button id="btnFavorito" style="background-color: lightgrey;" @click="borrarFavorito($event,evento)">Eliminar de favorito</button></td>         
        </tr>
      </tbody>
    </table>  
</template>
  
<script>
  export default {
      
      data(){
        return{
          favoritos : [],
          hayFavoritos : false,
          ordFecha : ''

        }
      },
      mounted() {
        this.leerStorage()
      },
      
    methods:{
      leerStorage(){
        if (sessionStorage.getItem('favoritos') != null){
          this.favoritos=JSON.parse(sessionStorage.getItem('favoritos'));
          this.hayFavoritos=true
        }
        else{
          this.hayFavoritos=false
        }
      },
      borrarFavorito(e, evento){
        //cambiar color del botón
        /* e.target.style.backgroundColor="tomato";   
        e.target.textContent="Borrado de favorito" */    

        //buscamos el elemento a eliminar 
        const i = this.favoritos.findIndex(el => el.documentName === evento.documentName)
        // alert(i);
        
        if( i!=-1 ){
          this.favoritos.splice(i,1);
          sessionStorage.setItem("favoritos", JSON.stringify(this.favoritos))
        }
      
      }
      }
    

  }

</script>