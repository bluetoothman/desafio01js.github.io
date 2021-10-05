// Archivo Javascript

const PI = 3.1416

let nombre = prompt('Ingresa tu nombre');
let apellido = prompt("y tu apellido");

datos = nombre + " " + apellido;
let radio = prompt("Para calcular el area de un circulo. Ingresa su radio: ");

console.log("Señor ", datos + ".\n" + "El area del circulo es (pi)*r^2= ", PI * radio * radio)
alert("Señor " + datos + ".\n" + "El area del circulo es (pi)*r^2= " + PI * radio * radio)