/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
// en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
// recibe un string llamado 'nombre'.
// Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.

function buscarAmigo(amigos, nombre) {
  var res = amigos.find((amigo) => amigo.nombre === nombre);
  return res;
}

//  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
//  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

var amigos_test = [
  { nombre: "toni", edad: 33 },
  { nombre: "Emi", edad: 25 },
];

console.log(buscarAmigo(amigos_test, "toni"));

// No modifiques nada debajo de esta linea //

/* module.exports = buscarAmigo; */
