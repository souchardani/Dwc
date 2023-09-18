//*******CALCULAR IMC */
document.getElementById("AccionCalcularIMC").addEventListener("click", () => {
  let centimetros = document.getElementById("centimetros").value;
  let peso = document.getElementById("peso").value;
  centimetros = centimetros / 100;
  let IMC = (peso / Math.pow(centimetros, 2)).toFixed(2);
  let categoria = "";
  IMC < 16.0
    ? (categoria = "Infrapeso (delgadez severa)")
    : IMC >= 16.0 && IMC <= 16.99
    ? (categoria = "Infrapeso (delgadez moderada)")
    : IMC >= 17.0 && IMC <= 18.49
    ? (categoria = "Infrapeso (delgadez aceptable)")
    : IMC >= 18.5 && IMC <= 24.99
    ? (categoria = "Peso normal")
    : IMC >= 25.0 && IMC <= 29.99
    ? (categoria = "Sobrepeso")
    : IMC >= 30.0 && IMC <= 34.99
    ? (categoria = "Obeso (Tipo I)")
    : IMC >= 35.0 && IMC <= 40.0
    ? (categoria = "Obeso (Tipo II)")
    : IMC > 40.0
    ? (categoria = "Obeso (Tipo III)")
    : (categoria = "");

  //MOSTRAR DATOS
  document.getElementById(
    "resultadoIMC"
  ).innerHTML = `Segun tus datos, tu indice de masa corporal es: <span class="fw-bold mt-2" id="resultadoIMC">${IMC}</span>
  <br><br>Segun la OMS, tu situacion actual es: <p class="lead">${categoria}<p>`;
});
