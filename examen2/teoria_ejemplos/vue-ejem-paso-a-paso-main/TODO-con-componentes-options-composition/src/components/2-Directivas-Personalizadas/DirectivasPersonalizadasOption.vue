<template>
    <!-- Cuando creamos una directiva personalizada, ésta se define en main.js, para que se aplique sobre todos los componentes de la App -->
   
    <h1>Aplicando directivas personalizadas</h1>
    <p>Este parrafo no tiene directiva aplicada</p>
    <p></p>
    <hr>
    <h3>Directiva aplicada con dato especificado en main.js</h3>
    <p v-fontSize>Este párrafo ha cambiado de tamaño la letra desde una directiva personalizada</p>
    <br>
    <p v-fontSize>{{ mensaje }}</p>
    <hr>
    <h3>Directiva aplicada con valores que ponemos en el componente</h3>
    <p v-customSize1="10">Párrafo customizado a tamaño 10px</p>
    <p v-customSize1="30">Párrafo customizado a 30px</p>
    <input type="text" v-model="size1"/>Tamaño del parrafo
    <p v-customSize1="size1">Tamaño personalizado al valor introducido en el campo de texto {{ size1 }}px</p>
    <hr>
    <h3>Directiva aplicada a través de argumentos bindeados</h3>
    <p v-customSize2:sm>Párrafo customizado a small tamaño 10px</p>
    <p v-customSize2:lg>Párrafo customizado a large tamaño 25px</p>
    <hr>
    <h3>Directiva aplicada a través de modificadores</h3>
    <p v-customFont.lg>Aplicamos modificador de tamaño a 25px</p>
    <p v-customFont.red>Aplicamos modificados de color a red</p>
    <p v-customFont.xl.green>Aplicamos modificador de tamaño xl y color green</p>
</template>

<script> 
    export default{
    name: 'DirectivasPersonalizadasOption',
    components: {},
    data(){
        return{
            size1 : '10'
        }
    },
    mounted(){
    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>