//clase mediante palabra class
class UserConClass {
  constructor(Nombre, Apellidos, DNI, AñodeNacimiento, Provincia) {
    this.Nombre = Nombre;
    this.Apellidos = Apellidos;
    this.DNI = DNI;
    this.AñodeNacimiento = AñodeNacimiento;
    this.Provincia = Provincia;
  }

  get Nombre() {
    return this._Nombre;
  }

  get Apellidos() {
    return this._Apellidos;
  }

  get DNI() {
    return this._DNI;
  }

  get AñodeNacimiento() {
    return this._AñodeNacimiento;
  }

  get Provincia() {
    return this._Provincia;
  }

  set Nombre(nombre) {
    if (nombre != null && typeof nombre == "string") {
      this._Nombre = nombre;
    } else {
      console.log("no se puede agregar tu nombre");
    }
  }

  set Apellidos(apellidos) {
    this._Apellidos = apellidos;
  }

  set DNI(DNI) {
    this._DNI = DNI;
  }

  set AñodeNacimiento(AñodeNacimiento) {
    this._AñodeNacimiento = AñodeNacimiento;
  }

  set Provincia(Provincia) {
    this._Provincia = Provincia;
  }

  generaLogin() {
    let letraNombre = this.Nombre.charAt(0);
    let arrayApellidos = this.Apellidos.split(" ");
    arrayApellidos.unshift(letraNombre);
    console.log(arrayApellidos);
    let Login =
      arrayApellidos[0].at(0) +
      arrayApellidos[1].at(0) +
      arrayApellidos[2].at(0) +
      String(this.AñodeNacimiento).substring(2);
    return Login;
  }

  getEdad() {
    let edad = new Date().getFullYear() - this.AñodeNacimiento;
    return edad;
  }

  toString() {
    let cadena;
    Object.keys(this).forEach((key) => {
      if (cadena == undefined) {
        cadena = key;
      } else {
        cadena += key;
      }
    });
    return cadena;
  }

  toHTML() {
    let cadenaSinHTML = this.toString();
    let cadenaConHTML = cadenaSinHTML.concat("</Strong>");
    cadenaConHTML = "<strong>".concat(cadenaConHTML);
    return cadenaConHTML;
  }
}

let user = new UserConClass(
  "Daniel",
  "Souchar Cotoret",
  "1234567",
  1998,
  "Bizkaia"
);

let user1 = new UserConClass(
  "David",
  "Arrebola Porras",
  "789101112",
  1982,
  "Madrid"
);

let user2 = new UserConClass("Pedro", "Perez Lopez", "65745234", 1972, "Alava");

let user3 = new UserConClass(
  "Juan",
  "Garcia Lopez",
  "54676998723",
  1967,
  "Andalucia"
);

let users = [user, user1, user2, user3];

let cadenaHTML = function () {
  let cadenaTotal = "";
  users.forEach((element) => {
    cadenaTotal += `
      <h3>${element.Nombre}</h3>
      <ul>
          <li>${element.Apellidos}</li>
          <li>${element.DNI}</li>
          <li>${element.AñodeNacimiento}</li>
          <li>${element.Provincia}</li>
          <li>${element.generaLogin()}</li>
          <li>${element.getEdad()}</li>
          <li>${element.toString()}</li>
          <li>${element.toHTML()}</li>
      </ul>
      `;
  });
  return cadenaTotal;
};

let cadenaFinal = cadenaHTML();

//to html
document.getElementById("usuarios").innerHTML = `${cadenaFinal}`;
