/*Crea un arreglo en javascript llamado "pares" que contenga 10 
números pares
*/
const pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(pares); 

//haz una copia del arreglo "pares" y nómbralo "numeros"
const numeros = [...pares];
console.log(numeros);

//agrega 3 números más al final de "numeros"
numeros.push(21, 22, 23);
console.log(numeros);

//haz una copia del arreglo "numeros" y nómbralo "impares"
const impares = [...numeros];
console.log(impares);

//borra el contenido de "impares" y agrega 3 nùmeros impares
impares.splice(0, impares.length);
impares.push(1, 3, 7);
console.log(impares); 

//crea un nuevo arreglo "todos" que contenga a los arreglos "pares" e "impares".
const todos = [...pares, ...impares];
console.long(todos);