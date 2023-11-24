<template>
    <ul>
        <h1>POSTS</h1>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
</template>

<script>
    import { PostServicio } from '@/servicios/PostServicioOption.js'
    export default{
        name: 'PostListOption',
        components: {},
        data(){
            return {
                service: new PostServicio(),
                posts : [], 
            }
        },
        async mounted() {
            // this.posts = this.service.posts
            await this.service.fetchAll();
            this.posts = await this.service.posts
        },
        methods:{
            
        },
        computed:{
            
        }
    }
</script>


<style scoped>
</style>