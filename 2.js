// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array) {

    var repetidos = {};
    let acomodarObj = [];

    array.forEach(function (valor) {
        repetidos[valor] = (repetidos[valor] || 0) + 1;
    });


    valores = Object.values(repetidos)
    nombres = Object.keys(repetidos)
    for (let i = 0; i < valores.length; i++) {
        acomodarObj.push({ nombre: nombres[i], valor: valores[i] })
    }

    //sort por valor
    acomodarObj.sort((a, b) => b.valor - a.valor);
   
    var regresar = [];
    for (let index = 0; index < 3; index++) {
        regresar.push(acomodarObj[index].nombre)        
    }
    return regresar;

}

/**
 * TEST Ejercicio 2
 */
console.log(numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1])) // [ 1, 3, 2 ]
console.log(numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3])) // [ 'a', 3, 2 ]
