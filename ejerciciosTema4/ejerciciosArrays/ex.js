array1 = new Array("Rojo", "Verde", "Azul");
array2 = new Array("70", "9", "800");
array3 = new Array(50, 10, 2, 300);
array4 = new Array("70", "8", "850", 30, 10, 5, 400);

array1.sort();
array2.sort();
array4.sort(comparar);

console.log(array1);
console.log(array2);
console.log(array4);

array2.sort(comparar);
console.log(array2);

function comparar(a, b) {
  return a - b;
}
