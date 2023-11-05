class Cuenta {
  #titular;
  #cantidad;
  constructor(titular = "Titular", cantidad) {
    this.#titular = titular;
    this.#cantidad = cantidad;
  }

  set titular(titular) {
    this.#titular = titular;
  }

  get titular() {
    return this.#titular;
  }

  get cantidad() {
    return this.#cantidad;
  }

  mostrar() {
    console.log(`Titular = ${this.titular} \nCantidad = ${this.cantidad}`);
  }

  ingresar(cantidad) {
    cantidad < 0 ? null : (this.#cantidad += cantidad);
  }

  retirar(cantidad) {
    this.cantidad < cantidad ? null : (this.#cantidad -= cantidad);
  }
}

let dani = new Cuenta("Dani", 100);
let david = new Cuenta("David", 50);

let cuentas2 = [dani, david];
let cuentas = Array(dani, david);
