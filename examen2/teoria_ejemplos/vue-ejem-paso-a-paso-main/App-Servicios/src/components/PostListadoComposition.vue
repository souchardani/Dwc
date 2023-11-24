<template> 
    <h1>Hola Mundo</h1>
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
</template>

<script setup>

    import { PostServicio } from '@/servicios/PostServicio'
    import { onMounted} from 'vue'
    const service = new PostServicio();
    const posts = service.posts; //Importante aquí estamos llamando al getter, y como hemos seguido la nomenclatura de getters y setters 
    
    onMounted(async ()=>{//al montar la instancia llamamos al servicio para que recoja los datos
        await service.fetchAll();
    })

</script>

<style scoped>
</style>