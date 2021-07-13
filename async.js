const fetch = require("node-fetch");
/*
Las funciones async se diferncian de las comunes
ya que devuelven una promesa sin importar que
hay defiinido en el cuerpo de la funcion
*/

async function suma(v1, v2) {
    return v1 + v2;
}

async function suma(v1, v2) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 400, 5);
    });
}

// En ambos casos retorna una promesa
// en el primer caso retonra una promesa  ya resuelta con el valor
// calculado por la funcion

// await solo se puede usar dentro de una funcion asincrona

(async function () {
    let promesa = await new Promise(function (resolve, reject) {
        setTimeout(resolve, 400, 5);
    });
    console.log(promesa);
})();

// La expresion (funcion)(); es una funcion autoejecutable

// await evita que tengamos que usar then, catch o finally
// await lo transforma en un valor tradicional no una promesa

// await
async function showGithubInfo() {
    let response = await fetch(
        "https://api.github.com/users/fernandopaz1/repos"
    ); // esto seria una promesa pero con await se transforma en el valor de la promesa
    let repos = await response.json(); // pasaar a json devuelve tambien promesa pero el await me lo convierte a json
    console.log(repos);
}
showGithubInfo();
