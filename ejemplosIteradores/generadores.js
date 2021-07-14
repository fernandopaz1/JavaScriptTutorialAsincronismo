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
// 
let generator = counter(); 

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())  // como hay 2 yields este ultimo ya devuelve done = true y no tiene value

// las arrow functions no pueden ser usadas como generadores
// parece que habria un error sintactico en ecmascript en caso de que quisieran implementarlo

function* generarHasta5(){
    for(var i = 1 ; i <= 5; i++){
        yield i; 
        console.log(i)  // esto es analogo a generadores       
    }
}
let gen = generarHasta5()
while(!gen.next().done){}