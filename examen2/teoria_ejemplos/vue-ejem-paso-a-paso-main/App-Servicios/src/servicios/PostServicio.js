import { ref } from 'vue';

class PostServicio{
    #posts; //generamos una variable privada de clase
    constructor () {
        this.#posts = ref([]);//de esta manera conseguimos que esta variable sea reactiva y la podamos usar en el template
    }
    get posts(){
        return this.#posts;
    }

    async fetchAll (){
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url);
            const json = await response.json();
            this.#posts.value = await json //recordad que ponemos el value porque es un elemento reactivo

        }catch(error){
            console.log(error);
        }
    }
}
export { PostServicio }

