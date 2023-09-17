//*******CALCULAR IMC */
document.getElementById("AccionCalcularIMC").addEventListener("click", () => {
  let centimetros = document.getElementById("centimetros").value;
  let peso = document.getElementById("peso").value;
  centimetros = centimetros / 100;
  let IMC = (peso / Math.pow(centimetros, 2)).toFixed(2);
  document.getElementById(
    "resultadoIMC"
  ).innerHTML = `Segun tus datos, tu indice de masa corporal es: <span class="fw-bold mt-2" id="resultadoIMC">${IMC}</span>`;
});

//show and hide modals
//show imc
let botonImc = document.getElementById("boton_imc");
botonImc.addEventListener("click", () => {
  document.querySelector("#modal1IMC").classList.toggle = "d-none";
});
