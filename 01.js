/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
// Debe devolver un arreglo con solo los enteros.
// Ej:
// soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

// Tu código aca:
function soloNumeros(array) {
  var res = array.filter((elemento) => typeof elemento === "number");

  return res;
}

var test = [1, "Henry", 2];

console.log(soloNumeros(test));

/* // No modifiques nada debajo de esta linea //


module.exports = soloNumeros */
