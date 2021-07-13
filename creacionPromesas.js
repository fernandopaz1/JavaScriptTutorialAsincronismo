const request = require("request");
let reuqest = require("request");
/*
Para crear una promesa debemos pasar una funcion completo
argumento del contructor llamada executores
Este executor debe recibir dos parametros resolve y reject (se le puede cambiar el nombre)
Esos parametros son funciones que determinan que hacemos si aceptamos la promesa o la rechazamos
Ejecutamos resolve cuando aceptamos la promesa y reject cuando la rechazamos 

*/
function leerPagina(url) {
    return new Promise(function (resolve, reject) {
        // promesa
        request(url, function (error, response) {
            // request con callbacks
            if (error) return reject(error);
            resolve(response);
        });
    });
}

let promesa = leerPagina("https://www.google.com");
promesa.then((r) => console.log("Finaliza")).catch((err) => console.log(err));
