//Cargamos el fichero antes de que lea el HTML
window.onload = startApp;

//Declaramos las funaciones
function startApp() {
    document.getElementById('enviar').addEventListener('click', function(){
        crear();
    });

    document.getElementById('borrar').addEventListener('click', function(){
        borrar();
    });

    document.getElementById("participantes").addEventListener("mouseover",kolorea);
    document.getElementById("participantes").addEventListener("mouseout",kolorebarik);
}

//Creamos la funcion de crear un nuevo participante
function crear(){

    //recogemos los todos datos 
    const nombre = document.getElementById('nombre').value;
    const puntuacion = document.getElementById('puntuacion').value;
    const pais = document.getElementById('pais').value;

    //regex para validar
    const regexNombre = /^[ A-Za-z-ÑñÁÉÍÓÚáéíóú]+$/;
    const regexPuntuacion = /^[0-9]{1,3}$/;

    //miramos que los valores no esten vacios y que cumplen con las condiciones.
    //si esta bien se crea la fila
    //si esta mal nos comunica mediante un alert 
    if(!nombre && !regexNombre.test(nombre)){
        alert("el nombre no puede estar vacio"); 
    }
    
    if(!puntuacion && !regexPuntuacion.test(puntuacion)){
        alert("la puntuacion debe ser entre 0-100"); 
    }
    
    if(!pais && !regexNombre.test(pais)){
        alert("el pais no puede estar vacio"); 
    } else{
        document.getElementById("participantes").innerHTML += "<th>Participantes</th>";
        document.getElementById("participantes").innerHTML += "<td>" + nombre + "</td> <td>" + puntuacion + "</td> <td> <img src='img/"+pais+".png'></td>";    
    }
}

let fila = 0;

//funcion para borrar la ultima fila
function borrar(){
    document.getElementById("participantes").innerHTML -= "<td>" + nombre + "</td> <td>" + puntuacion + "</td> <td> <img src='img/"+pais+".png'></td>";    

}

function kolorea() {
    document.getElementById("participantes").style.backgroundColor = "red";
}

function kolorebarik() {
    document.getElementById("participantes").style.backgroundColor = "transparent";
}