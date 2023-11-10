class Cuenta{

    constructor(nombre = '', cantidad = ''){
        this.nombre = nombre;
        this.cantidad = cantidad;

    }

    // GETTERS
    getNombre(){
        return this.nombre;
    }

    getcantidad(){
        return this.cantidad;
    }

    // SETTERS
    setNombre(nombre){
        if(nombre !== ''){
            this.nombre = nombre;
        }
    }

    setcantidad(cantidad){
        if(cantidad !== ''){
            this.cantidad = cantidad;
        }
    }


    mostrar() {
        return "nombre" + this.nombre + "cantidad" + this.cantidad;
    }

    ingresar(cantidad) {
        
    }

    retirar(cantidad) {
        
    }

}