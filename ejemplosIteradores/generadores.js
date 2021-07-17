/*
Para producir un generador debemos
crear una funcion generadora
estas agregan un asterisco luego de la palabra function

Se pueden pensar como funciones que pueden ser detenidas
a media ejecución para ser ranudadas en cuanto queramos
*/

function* counter() {
    console.log("Estoy Aqui");
    for (var i = 1; i <= 5; i++) {
        yield i;
    }
    // yield 1; // yield para la funcion aca y la reanuda en este punto
    // // el valor que esta al lado de yield es el valor que se
    // // retorna segun el protocolo de iterador
    // console.log("Ahora estoy aqui");
    // yield 2;
}

// las funciones generadoras siempre retornan generadores
//
let generator = counter();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // como hay 2 yields este ultimo ya devuelve done = true y no tiene value

// las arrow functions no pueden ser usadas como generadores
// parece que habria un error sintactico en ecmascript en caso de que quisieran implementarlo

function* generarHasta5() {
    for (var i = 1; i <= 5; i++) {
        yield i;
        console.log(i); // esto es analogo a generadores
    }
}
let gen = generarHasta5();
while (!gen.next().done) {}

// aunque no hay un return dentro de la funcion generadora
// la funcion generadora retorna un generador
// cuando usamos return dentro de la funcion generadora
// esta devuelve un objeto iterable con el valor que retornamos y con done = true

// yield dentro del generador se llama junto con una expresion que genera un resultado
// este resultado es el valor del objeto iteraterable que devulve el generador
// tambien podemos usar yield para que delegue la ejecucion a otro generador

// print solid line in terminal
console.log("--------------------------------------");

function* retornador() {
    yield* counter();
    console.log("Termine de contar");
}

let g = retornador();
let aux;
do {
    aux = g.next();
    console.log(aux);
} while (!aux.done);
