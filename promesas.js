let request = require("request-promise");
// request-promise esta deprecado pero para usos didadcticos funciona bien

request("https://www.google.com").then(() =>
    console.log("Termine la peticion1")
);
console.log("Hola");

// basicamente hacemos lo mismo que con los callbacks pero
// usando promesas

let promesa = request("https://www.google.com");
// en este caso la request devuelve una promesa
console.log(typeof promesa);
promesa.then(() => console.log("Termine la peticion2")); // ejecuta la funcion una vez que se cumple la promesa
promesa.catch((err) => console.log(err)); // si ocurre un error lo atrapamos con el catch e imprimos el error
console.log("Hola");

// una promesa es un objeto que probablemente produzca un valor en el futuro
//  puede ser que le valor sea el resultado de una operacion asincrona o un error en la misma
// Las promesas pasan por diferentes estados

/* 
fullfiled (completada): la promesa se completo con exito
rejected (rechazada): la promesa no se completo con exito
pending (pendiente): es cuando la operacion todavia no termino promesa no cumplida
settled (finalizada): cuando la promesa termino con exito o con error 
*/
