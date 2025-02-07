//Crear una funcion y que diga si una palabra es un palindromo

//crear funcion con parametro 
//pasar un argumento a la funcion 
//comparar el parametro con el parametro al revez

// function palindromo(str){

//     return str === str.split("").reverse().join("")

// }

// console.log(palindromo('radar'));




//iterables y iterators
//cuando un tipo de dato es iterable significa que es una estrutura de datos lineal que hace sus elementos sean publicos y se puedan recorrer

const iterable = [1,2,3,4,5];

//acedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(Symbol.iterator)

console.log(iterable);
console.log(iterador);

//nos devuelve un objeto
console.log(iterador.next());
//el value nos dice el elemento y done si quedan o no elementos 