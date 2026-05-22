//tipos de datos
/*
javacript cuenta con dos familias de tipos de datos
*primitivos
*no primitivos
*/

//

//

//cadenas o string
let nombre = "Alison Rendon";
//nulos
let vacio = null;
//indefinidos
let indefinido = undefined;
//simbolo
let simbolo = Symbol();

console.log("---tipos de datos primitivos---"));
console.log(typeof(entero));
console.log(typeof(verdadero));
console.log(typeof(nombre));
console.log(typeof(vacio));
console.log(typeof(indefinido));
console.log(typeof(simbolo));

//datos no primitivos o compuestos
//objetos
let persona = {
    nombre : "Alison",
    edad : 20,
    casado : true
};
//arreglos o arrays
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Alison", "Betzabe", "Diana"];
console.log("---Tipos de datos no primitivos");
console.log(typeof(numeros));
console.log(typeof(nombres));

//concatemacion de cadenas, union de cadenas
let nombrePila = "Alison";
let apellidoPaterno = "Rendon";
let apellidoMaterno = "Braulio";

let nombreCompleto = nombrePila + " " + apellidoPaterno + " " + apellidoMaterno;
console.log(nombreCompleto);

//concatenacion con cadenas con formato
let nombreCompleto2 = '${nombrePila} ${apellidoPaterno}  ${apellidoMaterno}';
console.log(nombreCompleto2);