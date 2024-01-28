# Vue.js - Ejercicios

## Ejercicio 1

![Captura Ejercicio1](./Imagenes/CapturaEjer1.JPG)

Modificar el componente HelloWorld. Ponerle como nombre Ejercicio1.

Crea un aplicación que haga lo siguiente:

1.  Muestre un boton que incremente un valor de 2 en 2.
2.  Muestre una caja de texto que nos permita iniciar el contador activándose en el evento keyup.
3.  Muestre en un párrafo los vales de las posiciones x e y cuando desplazamos el ratón por dicho párrafo.

## Ejercicio 2

![Inicio de Ejercicio2](./Imagenes/CapturaEjer2.JPG)

Modificar el componente HelloWorld. Ponerle como nombre Ejercicio2.

### Crea una app que haga lo siguiente:

1.  Tendrá un campo de tipo texto mediante el que se añadirán tareas a un array.
2.  Para añadir la tarea se podrá hacer:
    1.  Pulsando la tecla return
    2.  Al pulsar un botón
3.  Al inicio se mostrará un mensaje indicando que no hay elementos a mostrar
4.  Cuando se meta algún elemento en la lista ya se mostrarán en un nuevo ul

## Ejercicio 3

![Inicio de Ejercicio3](./Imagenes/Ejer3.JPG)

Modificar el componente HelloWorld. Ponerle como nombre Ejercicio3.

### Crea una app que haga lo siguiente:

1.  Tendremos varios botones para inicializar la cuenta atrás: 2seg, 5seg, 55seg y 89seg.
2.  Existirá un campo así mismo, en donde se irá visualizando la cuenta atrás hasta llegar a 0.
3.  En cualquier momento el contador se reinicia al pulsar un nuevo botón

## Ejercicio 4

![Inicio de Ejercicio4](./Imagenes/CapturaEjercicio4-0.JPG)

![Inicio de Ejercicio4](./Imagenes/CapturaEjercicio4.JPG)

Crear dos componentes Ejercicio4 y ListaTareas.

### Crea una app que haga lo siguiente:

1.  El componente Ejercicio4.vue tendrá un campo de tipo texto y un botón crear.
    1.  Al pulsar el botón agregar se llamará auna función que agregará la ueva tarea
2.  Cuando haya tareas agregadas, se visualizará un div, y en el se cargará el componente listaTareas, al qu se le pasará la propiedad tarea para que la muestre .
3.  El componente hijo listaTareas tendrá un botón que enviará el evento de la tarea a eliminar al padre para que lo borre de la lista de tareas

## Ejercicio 5

![Inicio de Ejercicio5](./Imagenes/CapturaEjercicio_5-0.JPG)

Crear dos componentes Ejercicio5 y PokeGuia.

### Crea una app que usando la API https://pokeapi.co/ haga lo siguiente:

1.  El componente Ejercicio5.vue cargará al inicio la información del pokemon "pikachu", sus habilidades y sus movimientos.
    1.  El nombre y la foto se enviarán como una propiedad al componente PokeGuia, y éste mostrará estos datos
2.  Una vez cargada la información de pikachu, podremos buscar la información de otros pokemons
    1.  Existe un campo de texto en el cual podremos buscar la información de un pokemon en concreto a partir de su nombre.
    2.  Al inicio cargaremos en un campo select todos los nombres de los pokemons.
3.  Al poner el nombre de un pokemon y pulsar buscar, o bien al cambiar el campo select se traerá la información de dicho pokemon
4.  Las habilidades y los moviminetos se cargan en el propio componente Ejercicio5.vue.
5.  EL nombre del pokemon y la imagen se le envía al componente PokeGuia para que los muestre.

![Ejecución de Ejercicio5](./Imagenes/CapturaEjercicio_5-1.JPG)

## Ejercicio 6

![Inicio de Ejercicio6](./Imagenes/CapturaEjercicio_6-0.JPG)

### Crea una app que usando la API https://cataas.com/ haga lo siguiente:

1.  En el primer componente padre Ejercicio6 estableceremos las características del gato a traer
    1.  Seleccionaremos las características que queramos teniendo en consideración la documentación de la API. En la imagen hay un ejemplo
2.  Al pulsar el botón mostrar gato, accedermos a la API con las características seleccionadas y la url devuelta se la mandaremos a un componente hijo para que la muestre.

![Ejecución de Ejercicio6](./Imagenes/CapturaEjercicio_6-1.JPG)

## Ejercicio 7

![Inicio de Ejercicio7](./Imagenes/CapturaEjercicio_7-Inicio.JPG)

### Crea una app que utilice rutas y haga lo siguiente:

Queremos hacer una páginaweb para publicitar el ciclo de Desarrollo de Aplicaciones Web del CIFP Txurdinaga LHII

1.  La página tendrá 4 rutas posibles: Inicio, Requisitos, Contacto, About
    1.  Inicio: Nos da información sobre el ciclo y los módulos a cursar en 1º curso y 2º curso
    2.  Requisitos: Nos da información sobre los requisitos de acceso al ciclo
    3.  Contacto: Nos muestra nuestra ubicación a partir de Google Maps.
    4.  About: Página About

![Requisitos de Ejercicio7](./Imagenes/CapturaEjercicio_7-Requisitos.JPG)

![Contacto de Ejercicio7](./Imagenes/CapturaEjercicio_7-Contacto.JPG)

![About de Ejercicio7](./Imagenes/CapturaEjercicio_7-About.JPG)

# Ejercicio 8 RUTAS Pikachu

![Inicio de Ejercicio8](./Imagenes/CapturaEjercicio_8-0.png)

La app dos enlaces de navegación Home y Pokemon

### Crea una app que usando la API https://pokeapi.co/ haga lo siguiente:
1. Desde home se visualzará un slider con fotos de pokemons.
2. Al pulsar el enlace del menú "pokemon" se accederá a una vista diferente en la que aparecerá un select con todos los pokemons, y una vez seleccinado pulsando el botón nos mostrará información del pokemon seleccionado: altura y peso. Para ello enviaremos por la ruta el nombre del pokemon y en la misma 
2. .

![Ejecución de Ejercicio8](./Imagenes/CapturaEjercicio_8-1.png)
![Ejecución de Ejercicio8](./Imagenes/CapturaEjercicio_8-2.png)
