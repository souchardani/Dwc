//*******CALCULAR FCM */
document.getElementById("AccionCalcularFCM").addEventListener("click", () => {
  let edad = document.getElementById("edad").value;
  console.log(edad);
  let sexo = document.querySelector("input[name='sexo']:checked").value;
  console.log(sexo);
  let FCM = null;
  if (sexo == "hombre") {
    FCM = 220 - edad;
  } else {
    FCM = 226 - edad;
  }

  //MOSTRAR DATOS
  document.getElementById("resultadoFCM").innerHTML = `
    <span class="lead">Tu frecuencia cardiaca maxima es</span>: <span class="fw-bold">${FCM}</span>
    <br>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Zona</th>
        <th scope="col">Valores</th>
      </tr>
    </thead>
  <tbody>
    <tr  class="table-success">
      <th scope="row">Zona de recuperación</th>
      <td>${(FCM * 0.6).toFixed(2)} - ${(FCM * 0.7).toFixed(2)}</td>
    </tr>
    <tr>
      <th scope="row">Zona aeróbica</th>
      <td>${(FCM * 0.7).toFixed(2)} - ${(FCM * 0.8).toFixed(2)}</td>
    </tr>
    <tr >
      <th scope="row">Zona anaeróbica</th>
      <td>${(FCM * 0.8).toFixed(2)} - ${(FCM * 0.9).toFixed(2)}</td>
    </tr>
    <tr class="table-danger">
      <th scope="row">Línea roja</th>
      <td>${(FCM * 0.9).toFixed(2)} - ${FCM}</td>
    </tr>
  </tbody>
</table>
  `;
});
