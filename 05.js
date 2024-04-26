/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
// propiedad.
// La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
function pluck(array, propiedad) {
  var res = array.map((elemento) => elemento[propiedad]);
  return res;
}

var productos = [
  { name: "TV LCD", price: 100 },
  { name: "Computadora", price: 500 },
];

console.log(pluck(productos, "name"));

// debería devolver['TV LCD', 'Computadora']

// No modifiques nada debajo de esta linea //

/* module.exports = pluck */
