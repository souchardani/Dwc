<template>
    <div class="container">
        <!-- <PostDetailComponent/>
        <PostDetailComponent/>
        <PostDetailComponent/>
        <PostDetailComponent/>
        <PostDetailComponent/> -->
        <!-- En vez de escribir explicitamente todos los componentes podemos hacer un v-for -->
        <PostdetailComponent v-for="element in info" key="element.title" :title="element.title" :content="element.content"/>
    </div>
    
</template>

<script setup>
    import PostDetailComponent from './PostDetailComponent.vue';
    let info = [{
        title :"Post 1",
        content : "Texto de ejemplo 1"
    },{
        title :"Post 2",
        content : "Texto de ejemplo 2"
    },{
        title :"Post 3",
        content : "Texto de ejemplo 3"
    },{
        title :"Post 4",
        content : "Texto de ejemplo 4"
    },{
        title :"Post 5",
        content : "Texto de ejemplo 5"
    }]
</script>

<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around; 
    }
</style>