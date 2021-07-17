// los simnolos son tipos de datos primitovos
// son unicos e irremplazables
// sirve cuando quiero compartir un objeto o metodo
// entre varios archivos sin que nadin se pueda modificar

// si usamos simbolos el nombre de esa variable es ya no puede ser usado

let simbolo = Symbol("descrptor-del-simbolo");
let simbolo2 = Symbol("descrptor-del-simbolo");

console.log(simbolo == simbolo2); // false ya que son unicos

// como son unicos e irremplazables sirven como key en diccionarios
let obj = {};
obj[simbolo] = function () {
    console.log("Mi nombre es un simbolo");
};

obj[simbolo](); // la funcion solo puede ser llamada si tengo el simbolo correcto
// hay pocos casos en los que conviene usar simbolos sobre cadenas de texto
// uno de esos casos es el de iterables

// los iterables nos permiten definir el comportamiento de un objeto cuando lo pasamos por un iterador for of

function* counter() {
    for (var i = 0; i <= 5; i++) {
        yield i;
    }
}

let generador = counter();

let numeros = [2, 5, 10];

// iterando a traves de los elementos de un generador
for (numero of generador) {
    console.log(numero);
}

// para que un objeto sea iterable tiene que implementar el metodo @@iterator
// este metodo esta identificado en los objetos por un simbolo y no una cadena
// El simbolo que representa al metodo es Symbol.iterator
// este es lo que se llama un well known symbol
console.log(Symbol.iterator);

let iterador = {
    currentValue: 1,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        let result = { value: null, done: false };
        if (this.currentValue > 0 && this.currentValue <= 5) {
            result.value = { value: this.currentValue, done: false };
            this.currentValue += 1;
        } else {
            result = { done: true };
        }
        return result;
    },
};

// Para que pueda ser terado con for of  el objeto debe implementar el metodo @@iterator
// este metodo debe retornar un iterable
for (i of iterador) {
    console.log(`El valor del iterador es ${i.value}`);
}

let contador = {
    [Symbol.iterator]() {
        return {
            currentValue: 1,
            next() {
                let result = { value: null, done: false };
                if (this.currentValue > 0 && this.currentValue <= 5) {
                    result.value = { value: this.currentValue, done: false };
                    this.currentValue += 1;
                } else {
                    result = { done: true };
                }
                return result;
            },
        };
    },
};

for (i of contador) {
    console.log(`El valor del contador es ${i.value}`);
}

// podemos implementar un rango al estilo de python con
let rango = {
    min: null,
    max: null,
    currentValue: null,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.currentValue == null) {
            this.currentValue = this.min;
        }
        let result = {};
        if (this.currentValue >= this.min && this.currentValue <= this.max) {
            result.value = { value: this.currentValue, done: false };
            this.currentValue += 1;
        } else {
            result = { done: true };
        }
        return result;
    },
};

rango.min = 0;
rango.max = 10;

for (i of rango) {
    console.log(`El valor de rango es ${i.value}`);
}

// haciendo el rango con generadores
let rangoGeneradores = {
    min: null,
    max: null,
    [Symbol.iterator]() {
        return this.generador();
    },
    generador: function* () {
        for (var i = this.min; i <= this.max; i++) {
            yield i;
        }
    },
};

rangoGeneradores.max = 10;
rangoGeneradores.min = 0;
for (n of rangoGeneradores) console.log(`El valor del rango es ${n}`); // con generadores no uso value
