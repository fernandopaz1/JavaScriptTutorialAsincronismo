let request = require("request");

// request es una función asincronica,
// al terminar de ejecutar el request ejecuta la
// función que le pasamos como segundo parametro
request("https://www.google.com", function () {
    console.log("Termine la peticion");
});

// mientras que se ejecuta el codigo de request
// se sigue ejecutando el script
// cuando en el event loop se detecta que el request termino
// recin ahi ejecuta el callback pero para cuando eso pasa
// ya se ejecuto el console.log("Hola")
console.log("Hola");
