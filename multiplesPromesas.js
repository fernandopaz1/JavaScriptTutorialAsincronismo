let request = require("request-promise");

let p1 = new Promise((res, rej) => setTimeout(res, 500, "Hola mundo"));

let p2 = new Promise((res, rej) => setTimeout(res, 500, "Segundo hola mundo"));

function todoFinalizado() {
    console.log("Todo finalizo");
}

p1.then((resultado) => console.log(resultado));

// queremos ejecutar todoFinalizado una vez que todas las promesas finalizan
// podriamos meter una promesa detro de un callback pero seria un callback hell
// podemos usar un metodo estatico de Promise con

// Promise.all recibe un arreglo de iterables y produce una nueva promesa que es resuelta
// recien cuando son resueltas todas las del iterable o que al menos una de ellas falle
// cuando falla alguna de las primesas falla toda la promesa nueva
Promise.all([p1, p2])
    .then((resultados) => {
        console.log(resultados);
        todoFinalizado();
    })
    .catch((err) => console.log(err));
//Por ejemplo Si tenemos muchas peritciones para construir una vista
// podemos poner todas esas promesas en Promise.all para resolver la vista
// una vez que se hayan cumplido todas las peticiones

// Que pasa si necesitamos que termine una para procesar la siguiente

// let p3 = new Promise((res, rej) => setTimeout(res, 500, "Tercer Hola mundo"));

// let p4 = new Promise((res, rej) => setTimeout(res, 500, "Cuarto hola mundo"));

// para esto las funciones a encadenar deber retornar promesas

function tercerPromesa() {
    return new Promise((res, rej) => setTimeout(res, 600, "Tercer hola mundo"));
}
function cuartaPromesa() {
    return new Promise((res, rej) => setTimeout(res, 400, "Cuarto hola mundo"));
}

tercerPromesa()
    .then((r) => console.log(r))
    .then(cuartaPromesa)
    .then((r) => console.log(r));

// podemos encadenar todas las operaciones que querramos siempre y cuando
// las funciones retornen una promesa

// si la funcion de la cuarta promesa recibe un parametro toma como parametro en
// el resultado de la operacion anterior
