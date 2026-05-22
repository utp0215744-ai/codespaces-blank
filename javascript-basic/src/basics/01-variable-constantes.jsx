//variables y constantes
/*
una variable es un espacio de memoriareservado que almacena un valor, este espacio de memoria tambien tiene una 
clave asociada que pertmite recuperar el valor almacenado en este.
*/

// Tipos de variables

//Global.- tienen acceso en todo el contexto de la aplicacion
var nombre = "Alison";
var edad = 20;
var casado = false;

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(casado));

// Modificacion de una variable
nombre = "Betzabe";
console.log(nombre);

var apellido = "Rendon";
console.log(apellido);

//variable local.- existen en un contexto limitado
let soltero = false;
let estatura = 148;
// modificacion de una variable local
soltero = true
console.log(soltero);

// constantes.- existen en ambitos limitados pero son inmutables 
const curp = "vvhfhn876543";
//curp = "gjjwkdjsnd77216";

//contexto o scope
console.log(edad);
if (true) {
    let edad = 30;
    console.log(edad);
}
console.log(edad);

