//clase mediante funcion constructora
function UserSinClass(Nombre, Apellidos, DNI, AñodeNacimiento, Provincia) {
  this.Nombre = Nombre;
  this.Apellidos = Apellidos;
  this.DNI = DNI;
  this.AñodeNacimiento = AñodeNacimiento;
  this.Provincia = Provincia;

  this.getNombre = function () {
    return this.Nombre;
  };

  this.getApellidos = function () {
    return this.Apellidos;
  };

  this.getDNI = function () {
    return this.DNI;
  };
  this.getAñodeNacimiento = function () {
    return this.AñodeNacimiento;
  };

  this.getProvincia = function () {
    return this.Provincia;
  };

  this.setNombre = function (nombre) {
    if (nombre != null && typeof nombre == "string") {
      this.Nombre = nombre;
    }
  };
  this.setApellidos = function (apellidos) {
    this.Apellidos = apellidos;
  };

  this.setDNI = function (DNI) {
    this.DNI = DNI;
  };

  this.setAñodeNacimiento = function (AñodeNacimiento) {
    this.AñodeNacimiento = AñodeNacimiento;
  };

  this.setProvincia = function (Provincia) {
    this.Provincia = Provincia;
  };

  this.generaLogin = function () {
    letraNombre = this.Nombre.charAt(0);
    arrayApellidos = this.Apellidos.split(" ");
    arrayApellidos.unshift(letraNombre);
    console.log(arrayApellidos);
    Login =
      arrayApellidos[0].at(0) +
      arrayApellidos[1].at(0) +
      arrayApellidos[2].at(0) +
      String(this.AñodeNacimiento).substring(2);
    return Login;
  };

  this.getEdad = function () {
    let edad = new Date().getFullYear() - this.AñodeNacimiento;
    return edad;
  };

  this.toString = function () {
    let cadena;
    Object.keys(this).forEach((key) => {
      if (cadena == undefined) {
        cadena = key;
      } else {
        cadena += key;
      }
    });
    return cadena;
  };

  this.toHTML = function () {
    cadenaSinHTML = this.toString();
    cadenaConHTML = cadenaSinHTML.concat("</Strong>");
    cadenaConHTML = "<strong>".concat(cadenaConHTML);
    return cadenaConHTML;
  };
}

let user = new UserSinClass(
  "Daniel",
  "Souchar Cotoret",
  "1234567",
  1998,
  "Bizkaia"
);

let user1 = new UserSinClass(
  "David",
  "Arrebola Porras",
  "789101112",
  1982,
  "Madrid"
);

let user2 = new UserSinClass("Pedro", "Perez Lopez", "65745234", 1972, "Alava");

let user3 = new UserSinClass(
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
    <h3>${element.getNombre()}</h3>
    <ul>
        <li>${element.getApellidos()}</li>
        <li>${element.getDNI()}</li>
        <li>${element.getAñodeNacimiento()}</li>
        <li>${element.getProvincia()}</li>
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
