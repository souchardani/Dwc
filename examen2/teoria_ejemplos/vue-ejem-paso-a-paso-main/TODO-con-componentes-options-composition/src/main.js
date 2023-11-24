// import './assets/main.css'

import { createApp, onUpdated } from 'vue'
import App from './App.vue'


const app=createApp(App)

//Como queremos que las directivas se aplique a nivel global, las definimos en main.js
//directiva personalizada. Aplicamos aquí lo que queremos
app.directive('fontSize',{
    beforeMount: (el, binding) =>{//se aplica la directiva personalizada antes de montarse la instancia
        el.style.fontSize = '50px'
    }
})

//Directiva personalizada. El value a aplicar se obtiene desde el componente 
app.directive('customSize1',{
    beforeMount:(el, binding) =>{//ahora aplicamos la directiva en función de lo que se especifica en el Componente
        el.style.fontSize = binding.value + "px"
    },
    updated:(el,binding) =>{//como ahora la dirctiva se aplica al modificar la instancia tenemos que añadir este Hook
        el.style.fontSize = parseInt(binding.value) + "px"
    }
})

//Directiva personalizada. El value que queremos aplicar se obtiene como un argumento desde el componente
app.directive('customSize2',{
    beforeMount:(el, binding) =>{//ahora aplicamos la directiva en función de lo que se especifica en el Componente
        let size = 18;
        switch(binding.arg){
            case 'sm':
                size = 10;
                break;
            case 'md':
                size = 18;
                break;
            case 'lg':
                size = 25;
                break;
            case 'xl':
                size = 45;
                break;
        }
        el.style.fontSize = size + "px"
    }
})
//Directiva personalizada. Aplicando modificadores
app.directive('customFont',{
    beforeMount:(el, binding) =>{//ahora aplicamos la directiva en función de lo que se especifica en el Componente
        let size = 18;
        if(binding.modifiers.sm){
            size = 10;
        }else if (binding.modifiers.lg){
            size = 25;
        }else if (binding.modifiers.xl){
            size = 45;
        }
        if (binding.modifiers.red){
            el.style.color = 'red';
        }else if (binding.modifiers.green){
            el.style.color = 'green';
        }else if (binding.modifiers.blue){
            el.style.color = 'blue'
        }

    }
})
app.mount('#app')



