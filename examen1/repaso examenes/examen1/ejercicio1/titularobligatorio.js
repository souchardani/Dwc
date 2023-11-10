// Definición de la clase Cuenta
class Cuenta {
  constructor(titular, cantidad = 0) {
    if (!titular) {
      throw new Error("El titular es obligatorio.");
    }
    this._titular = titular;
    this._cantidad = cantidad;
  }

  // Resto del código igual que antes...
  // (Se mantiene el resto del código para no repetirlo aquí)
}

// Resto del código igual que antes...
// (Se mantiene el resto del código para no repetirlo aquí)
