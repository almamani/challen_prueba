/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento
      // Tu código aca:
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;
    }

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.
      // Tu código aca:
      this.amigos.push({ nombre: nombre, edad: edad });
    }

    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.
      // Tu código aca:
      this.hobbies.push(hobby);
    }
    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.

      return this.amigos.map((amigo) => amigo.nombre);
    }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Tu código aca:
      return this.hobbies.map((hobby) => hobby);
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio  (33 + 25) / 2 = 29
      // Tu código aca:
      var suma = this.amigos.reduce((total, amigo) => total + amigo.edad, 0);
      var promedio = suma / this.amigos.length;
      return promedio;
    }
  }

  return Persona;
}

let Persona = crearClasePersona();

let persona1 = new Persona(
  "Juan",
  30,
  ["pescar", "cazar"],
  [
    { nombre: "toni", edad: 12 },
    { nombre: "Emi", edad: 12 },
  ]
);

console.log(persona1);
console.log(persona1.getFriends());
console.log(persona1.getHobbies());
console.log(persona1.getPromedioEdad());

/* persona1.addFriend("Pablo", 18);
persona1.addFriend("Marcos", 25);
persona1.addHobby("bailar"); */
// No modifiques nada debajo de esta linea //

/* module.exports = crearClasePersona; */
