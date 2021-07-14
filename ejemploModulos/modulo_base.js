import nombreDefault, { name, edad } from "./modulo_dos.mjs";

// edad = 50; esta linea tira error edad se importa como constante

console.log(`Hola me llamo ${name} tengo ${edad}`);

// al importar de un modulo default se puede importar y asiganr cualquier nombre
console.log(`El import por default es ${nombreDefault}`);
