window.onload = startApp;

function startApp(){

    let cuenta1 = new Cuenta('Carmen', '100');

    console.log(cuenta1.getNombre());
    console.log(cuenta1.getcantidad())

}

function mostrar() {
    let cuenta1 = new Cuenta('Carmen', '100');
}