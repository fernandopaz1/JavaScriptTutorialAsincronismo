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
