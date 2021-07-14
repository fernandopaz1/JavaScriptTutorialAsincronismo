/*
Los iteradores son estructuras de datos que permiter interacion sin 
tener que guardar la estructura completa en memeori

Cualquier objeto puede ser un iterador siempre y cuando cumpla el
protocolo del iterador
Para esto debe implementar una funcion next que retorne un objeto
con una propiedad value, otra done y que implemente el protocolo iterador
*/

let iterador = {
    currentValue: 1,
    next() {
        let result = { value: null, done: false };
        if (this.currentValue > 0 && this.currentValue <= 5) {
            result = { value: this.currentValue, done: false };
            this.currentValue++;
        } else {
            result = {done: true };
        }
        return result;
        // return {
        //     value: null, //value es el valor que queremos iterar
        //     done: true, // done indica si terminamos de iterar o no
        // };
    },
};

// de esta forma recorremos los elementos unno or uno y estos
// no estan en memoria hasta que los necesitamos
// no hay forma de reiniciarlo
// el ultimo iterador debe devolver el ultimo valor y el done como true

let item = iterador.next();

while (!item.done) {
    item = iterador.next();
    console.log(item.value);
}
