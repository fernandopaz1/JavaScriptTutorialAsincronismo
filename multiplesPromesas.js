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
