// Definición de la clase Cuenta
class Cuenta {
  constructor(titular, cantidad = 0) {
    this.titular = titular;
    this._cantidad = cantidad;
  }

  // Setters y getters
  set titular(titular) {
    this._titular = titular;
  }

  get titular() {
    return this._titular;
  }

  get cantidad() {
    return this._cantidad;
  }

  // Método para mostrar los datos de la cuenta
  mostrar() {
    console.log(`Titular: ${this.titular}, Cantidad: ${this.cantidad}`);
  }

  // Método para ingresar dinero en la cuenta
  ingresar(cantidad) {
    if (cantidad > 0) {
      this._cantidad += cantidad;
      console.log(`${cantidad} ingresado. Saldo actual: ${this.cantidad}`);
    } else {
      console.log("La cantidad ingresada debe ser mayor que 0.");
    }
  }

  // Método para retirar dinero de la cuenta
  retirar(cantidad) {
    if (cantidad > 0) {
      if (this._cantidad >= cantidad) {
        this._cantidad -= cantidad;
        console.log(`${cantidad} retirado. Saldo actual: ${this.cantidad}`);
      } else {
        console.log("Fondos insuficientes.");
      }
    } else {
      console.log("La cantidad retirada debe ser mayor que 0.");
    }
  }
}

// Crear dos cuentas
const cuenta1 = new Cuenta("Juan Perez");
const cuenta2 = new Cuenta("Maria Lopez", 100);

// Meter las cuentas en un array
const arrayCuentas = [cuenta1, cuenta2];

// Hacer algún ingreso y retirada
cuenta1.ingresar(200);
cuenta2.retirar(50);

// Mostrar los resultados
console.log("Resultados de la cuenta 1:");
cuenta1.mostrar();
console.log("Resultados de la cuenta 2:");
cuenta2.mostrar();
