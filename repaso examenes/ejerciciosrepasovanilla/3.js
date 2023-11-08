// 1. Escribe un script donde definas las siguientes estructuras de datos:
// Un objeto llamado Jugador con las siguientes propiedades:
//  nombre (cadena de caracteres).
//  numeroVidas (entero).
//  tienePistola (booleano).
//  tieneGranada (booleano).
//  numeroBalas (entero).
// Además contará con los métodos:
//  Jugador(). Constructor sin parámetros que inicializa todas las
// propiedades.
// 
// Jugador(nombre,numeroVidas,tienePistola,tieneGranada,
// numeroBalas). Constructor con parámetros. Debería
// comprobarse que si no tiene pistola el número de balas debería
// ser 0.
//  setPropiedad(propiedad). Permite establecer el valor de la
// propiedad (para cada propiedad).
//  getPropiedad():valor. Devuelve el valor de la propiedad (para
// cada propiedad).
//  toString():Cadena. Devuelve la información correspondiente al
// jugador en un String. Por ejemplo: &quot;El jugador Pepe tiene 3 vidas,
// tiene pistola con 2 balas y granada&quot;.
// Un objeto llamado Partida con las siguientes propiedades:
//  Un array de jugadores.
// Además contendrá los siguientes métodos:
//  Un constructor sin parámetros donde instanciaremos los datos de
// 5 jugadores. Dichos datos serán estáticos (no es necesario
// pedirlos por pantalla).
//  Un método imprime() que recorrerá el array y mostrará en el
// documento HTML los datos de los 5 jugadores.
//  Un método ruletaRusa() que escoja al azar a uno de los
// jugadores y establezca su número de vidas a 0.
// Instancia un objeto de tipo Partida y llama de manera secuencial a los
// métodos imprime(), ruletaRusa() e imprime() de nuevo, comprobando
// que funcionan correctamente.
// Definición del objeto Jugador
class Jugador {
  constructor(nombre, numeroVidas, tienePistola, tieneGranada, numeroBalas) {
    this.nombre = nombre;
    this.numeroVidas = numeroVidas;
    this.tienePistola = tienePistola;
    this.tieneGranada = tieneGranada;
    if (!tienePistola) {
      this.numeroBalas = 0;
    } else {
      this.numeroBalas = numeroBalas;
    }
  }

  setPropiedad(propiedad, valor) {
    this[propiedad] = valor;
  }

  getPropiedad(propiedad) {
    return this[propiedad];
  }

  toString() {
    return `El jugador ${this.nombre} tiene ${this.numeroVidas} vidas, ${
      this.tienePistola
        ? "tiene pistola con " + this.numeroBalas + " balas"
        : "no tiene pistola"
    } y ${this.tieneGranada ? "granada" : "no tiene granada"}.`;
  }
}

// Definición del objeto Partida
class Partida {
  constructor() {
    this.jugadores = [
      new Jugador("Jugador1", 3, true, false, 5),
      new Jugador("Jugador2", 3, false, true, 0),
      new Jugador("Jugador3", 2, true, true, 10),
      new Jugador("Jugador4", 1, false, false, 0),
      new Jugador("Jugador5", 2, true, false, 6),
    ];
  }

  imprime() {
    this.jugadores.forEach((jugador) => {
      console.log(jugador.toString());
    });
  }

  ruletaRusa() {
    const index = Math.floor(Math.random() * this.jugadores.length);
    this.jugadores[index].setPropiedad("numeroVidas", 0);
  }
}

// Crear instancia de Partida
const partida = new Partida();
console.log("Imprimiendo jugadores antes de ruleta rusa:");
partida.imprime();
partida.ruletaRusa();
console.log("Imprimiendo jugadores después de ruleta rusa:");
partida.imprime();

// 2. Queremos hacer una aplicación en JavaScript para gestionar edificios con
// la información de la situación del edificio y de los propietarios de cada piso.
// Para ello queremos almacenar la siguiente información de cada edificio:
//  Calle.
//  Número.
//  Código postal.
//  Plantas del edificio (dentro de cada planta tendremos un número de
// puertas y para cada puerta almacenaremos el nombre del propietario).
// Implementarás esta propiedad utilizando un array bidimensional.
// Se pide:
//  Crear un objeto que nos permita instanciar edificios. Cada vez que
// instanciemos un edificio le pasaremos la calle, número y código postal
// como parámetros. Se pide además crear los siguientes métodos para el
// objeto Edificio:
// o agregarPlantasYPuertas(numplantas, puertas) // Se le
// pasa el número de plantas que queremos crear en el piso y el
// número de puertas por planta. Cada vez que se llame a este
// método, añadirá el número de plantas y puertas indicadas en los
// parámetros, a las que ya están creadas en el edificio.
// o modificarNumero(numero) // Se le pasa el nuevo número del
// edificio para que lo actualice.
// o modificarCalle(calle) // Se le pasa el nuevo nombre de la
// calle para que lo actualice.
// o modificarCodigoPostal(codigo) // Se le pasa el nuevo
// número de código postal del edificio.
// o getCalle():Cadena // Devuelve el nombre de la calle del edificio.
// o getNumero():Entero // Devuelve el número del edificio.
// o getCodigoPostal():Cadena // Devuelve el código postal del
// edificio.
// o agregarPropietario(nombre,planta,puerta) // Se le pasa un
// nombre de propietario, un número de planta y un número de
// puerta y lo asignará como propietario de ese piso.
// o imprimePlantas() // Recorrerá el edificio e imprimirá todos los
// propietarios de cada puerta en el documento

// Cada vez que se crea un edificio que muestre automáticamente un mensaje del
// estilo:
// Construido nuevo edificio en calle: xxxxxx, nº: xx, CP: xxxxx.
// Cada vez que se añada un propietario a un piso de un edificio que muestre un
// mensaje del estilo:
// xxxxxxxx es ahora el propietario de la puerta x de la planta x.
// Además de crear el objeto, vas a crear varias instancias que nos permita
// comprobar que funciona correctamente, llamando los métodos que hemos
// definido.

// DDWEC04 – Ejercicios propuestos
// UT4: Modelo de objetos predefinidos en Javascript
// Aquí se muestra un ejemplo de lo que tendría que mostrar la aplicación:
// Trabajando con objetos Javascript:
// Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:
// Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
// Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
// Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
// El código postal del edificio A es: 15706.
// La calle del edificio C es: San Clemente.
// El edificio B está situado en la calle Camino Caneiro número 29.
// Agregamos 2 plantas y 3 puertas por planta al edificio A...
// Agregamos 4 propietarios al edificio A...
// Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
// Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
// Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
// Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.
// Listado de propietarios del edificio calle García Prieto número 58
// Propietario de la puerta 1 de la planta 1: Jose Antonio Lopez.
// Propietario de la puerta 2 de la planta 1: Luisa Martinez.
// Propietario de la puerta 3 de la planta 1: Marta Castellón.
// Propietario de la puerta 1 de la planta 2:
// Propietario de la puerta 2 de la planta 2: Antonio Pereira.
// Propietario de la puerta 3 de la planta 2:
// Agregamos 1 planta más al edificio A...
// Agregamos 1 propietario más al edificio A planta 3, puerta 2...
// Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.
// Listado de propietarios del edificio calle García Prieto número 58
// Propietario de la puerta 1 de la planta 1: Jose Antonio Lopez.
// Propietario de la puerta 2 de la planta 1: Luisa Martinez.
// Propietario de la puerta 3 de la planta 1: Marta Castellón.
// Propietario de la puerta 1 de la planta 2:
// Propietario de la puerta 2 de la planta 2:
// Propietario de la puerta 1 de la planta 3:
// Propietario de la puerta 2 de la planta 3: Pedro Meijide.
// Definición del objeto Edificio
class Edificio {
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantasYPuertas = [];
    console.log(
      `Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${codigoPostal}.`
    );
  }

  agregarPlantasYPuertas(numPlantas, puertas) {
    for (let i = 0; i < numPlantas; i++) {
      this.plantasYPuertas.push(new Array(puertas).fill(""));
    }
  }

  modificarNumero(numero) {
    this.numero = numero;
  }

  modificarCalle(calle) {
    this.calle = calle;
  }

  modificarCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  getCalle() {
    return this.calle;
  }

  getNumero() {
    return this.numero;
  }

  getCodigoPostal() {
    return this.codigoPostal;
  }

  agregarPropietario(nombre, planta, puerta) {
    this.plantasYPuertas[planta - 1][puerta - 1] = nombre;
    console.log(
      `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`
    );
  }

  imprimePlantas() {
    for (let i = 0; i < this.plantasYPuertas.length; i++) {
      for (let j = 0; j < this.plantasYPuertas[i].length; j++) {
        console.log(
          `Propietario de la puerta ${j + 1} de la planta ${i + 1}: ${
            this.plantasYPuertas[i][j] || ""
          }.`
        );
      }
    }
  }
}

// Crear instancias de Edificio
const edificioA = new Edificio("Garcia Prieto", 58, "15706");
edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);
edificioA.imprimePlantas();
edificioA.agregarPlantasYPuertas(1, 1);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);
edificioA.imprimePlantas();
const edificioB = new Edificio("Camino Caneiro", 29, "32004");
const edificioC = new Edificio("San Clemente", "s/n", "15705");

console.log(
  `El código postal del edificio A es: ${edificioA.getCodigoPostal()}.`
);
console.log(`La calle del edificio C es: ${edificioC.getCalle()}.`);
console.log(
  `El edificio B está situado en la calle ${edificioB.getCalle()} número ${edificioB.getNumero()}.`
);
