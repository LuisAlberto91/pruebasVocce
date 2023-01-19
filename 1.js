// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {

    array = [...array].sort();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array[i - 1] !== element && array[i + 1] !== element) {            
            return element;
        }
    }
}


/**
 * TEST Ejercicio 1
 */
console.log(findUniq(['12', 10, '12', 11, 1, 11, 10, '12'])) // 1)
console.log(findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man'])) // 'Wonder Woman'
