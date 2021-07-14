/*
Se recomiendo que los archivos que representan modulos
tegan extension .mjs

Los modulos son cualquier archivo que importe o exporte modulos
*/

// el nombre de la variable a exporta se conviete
// el identificador necesario para importar el dato
export const name = "Fernando";
export let edad = 28;

edad = 29;
// modificando edad luego de exportarlo hace que el valor de
// en el otro modulo tambien cambie
// este cambio afecta a todos quienes importaron este modulo

let valorPorDefecto = 20;

export default valorPorDefecto;
// Este es el valor por defecto que exporta este modulo

// export default let valorPorDefecto = 20;
// no se puede definir el valor dentro del export tiene que estar previamente definido
// ya que el eport defualt es como una asignacion en la que hacemos default = valorPorDefecto
// si hicieramos la asignacion seria como hacer default = valorPorDefecto = 20

// no se suelen exportar variables definidas con let o var ya que no pueden ser modificadas
// fuera del modulo es decir son Read Only solo puede cambiar dentro del modulo
