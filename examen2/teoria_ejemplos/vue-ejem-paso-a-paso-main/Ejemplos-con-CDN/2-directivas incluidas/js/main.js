//Vuejs 2
/* const vm = new Vue ({
	el: 'main',
	data: {
		conectado: true, 
		edad : 35
	}
}); */

//Vuejs 3
const app = {
	data(){
		return{
			conectado: false, 
			edad : 35
		}
	} 
}

Vue.createApp(app).mount('main');

/* Vue.createApp({
	//el: 'main',
	data(){
		return{
			conectado: true, 
			edad : 35
		}
	} 
}).mount('main'); */