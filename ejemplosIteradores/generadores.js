/*
Para producir un generador debemos
crear una funcion generadora
estas agregan un asterisco luego de la palabra function

Se pueden pensar como funciones que pueden ser detenidas
a media ejecución para ser ranudadas en cuanto queramos
*/

function* counter(){
    console.log("Estoy Aqui")
    yield 1; // yield para la funcion aca y la reanuda en este punto
                // el valor que esta al lado de yield es el valor que se 
                // retorna segun el protocolo de iterador
    console.log("Ahora estoy aqui")
    yield 2;
}

// las funciones generadoras siempre retornan generadores
let generator = counter(); 