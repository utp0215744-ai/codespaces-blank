//ARREGLOS
//Un arreglo es una coleccion de elementos ordenados, delimitados por []

// Definir un arreglo con la super clase Array
const arreglo1 = new Array();
console.log(arreglo1); // []

//Definir un arreglo con un tamaño especifico
const arreglo2 = new Array(5);
console.log(arreglo2); // [empty x 5]

//Definir un arreglo usando un delimitador
const arreglo3 = [];
console.log(arreglo3); // []

//Definir un arreglo con elementos iniciales (por defecto)
const arreglo4 = [1, 2, 3, 4, 5];
console.log(arreglo4); // [1, 2, 3, 4, 5]

//Definir un arreglo con elementos de diferentes tipos
const arreglo5 = [1, 'dos', true, null, undefined, { nombre: 'Juan' }, [1, 2, 3]];
console.log(arreglo5); // [1, 'dos', true, null, undefined, { nombre, 'Juan' }, [1, 2, 3]]

//Acceder a elementos de un arreglo
console.log(arreglo4[0]); //1
console.log(arreglo4[2]); //3
console.log(arreglo4[5]); //{ nombre: 'Juan' }
console.log(arreglo4[6]); //[1, 2, 3]
console.log(arreglo4[6][0]); //1

//Identificando el tamaño de un arreglo usando la propiedad length
console.log(arreglo5.length);

// ---Metodos de inscripcion de elementos en un arreglo----
//psh() - Agrega un elemento al final del arreglo
arreglo4.push(6);
console.log(arreglo4); // [1, 2, 3, 4, 5, 6]

//unshift() - Agrega un elemento al inicio del arreglo
arreglo4.unshift(0);
console.log(arreglo4); // [0, 1, 2, 3, 4, 5, 6]

// splice() - Agregar elementos en una posicion especifica del arreglo
arreglo4.splice(3, 0, 'tres');
console.log(arreglo4); // [0, 1, 2, 'tres',  3, 4, 5, 6]

// ---Metodos de eliminacion de elementos de un arreglo---
//pop() - Elimina el ultimo elemento del arreglo
arreglo4.pop();
console.log(arreglo4); // [0, 1, 2, 'tres', 3, 4, 5]

//shif() - Eliminar el primer elemento del arreglo
arreglo4.shif();
console.log(arreglo4); // [1, 2, 'tres', 3, 4, 5]

//splice() - Eliminar elementos en una posicion especifica del arreglo
arreglo4.splice(2, 1);
console.log(arreglo4); // [1, 2, 3, 4, 5]

//Modificacion de elementos de un arreglo
arreglo4[1] = 'dos';
console.log(arreglo4); // [1, 'dos', 3, 4, 5]