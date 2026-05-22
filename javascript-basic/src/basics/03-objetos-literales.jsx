//OBJETOS LITERALES
//Estan delimitados por {}

//Ejemplo de objetos

const persona = {
    nombre: "Alison",
    apellidoP: "Rendon",
    apellidoM: "Braulio",
    edad: 20,
    domicilio: {
        calle: "De las azucenas",
        colonia: "Gregorio Ramos",
        numeroExt: 1227,
        cp: 72340
    }
}
console.log(persona);

//Recuperar el contenido de los atributos del objeto persona
console.log(persona.nombre, persona.edad);
console.log(persona.domicilio.colonia);

//Modificar el contenido del objeto
persona.edad = 30;
console.log(persona.edad);

//Agregar nuevo atributo
persona.sexo = "Femenino";
console.log(persona.sexo);

//Eliminar un atributo
delete persona.apellidoM;
console.log(persona);

//Duplicando un objeto
const persona2 = persona; //Esto no es una copia, es una referencia al mismo objeto
console.log(persona2);

persona2.nombre = "Betzabe";
console.log(persona); //Esto tambien cambia el nombre de persona, porque persona2 es una referencia al mismo objeto

//Para hacer una copia de un objeto,se puede usar el operador spread(...)
const persona3 = {...persona}; //Esto es una copia del objeto persona
persona3.nombre = "Ana";
console.log(persona3);

