// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const nombreCliente = pedido.shift(); 
    console.log("Cliente:", nombreCliente); 
    
    pedido.unshift("bebida"); 
    pedido.push(nombreCliente); 
    
    console.log("Pedido procesado:", pedido); 
    return pedido;
}
const pedido = ['Juan', 'hamburguesa', 'papas'];
procesarPedido(pedido);

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0;
    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            suma += numero;
            console.log("Número par encontrado:", numero); 
        }
    });
    
    console.log("Suma total de pares:", suma); 
    return suma;
}

const numeros = [1, 2, 3, 4, 5, 6];
sumarPares(numeros);
// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    const resultado = palabras.every(palabra => palabra.endsWith('a'));
    console.log("Todas terminan con 'a':", resultado); 
    return resultado;
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const indice = words.indexOf(word);
    if (indice !== -1) {
        const resultado = words.slice(indice + 1);
        console.log("Palabras después de " + word + ":", resultado); 
        return resultado;
    } else {
        console.log(word + " no encontrada"); 
        return [];
    }
}


const words = ['hola', 'mundo', 'javascript', 'node'];
console.log(buscaPalabras(words, 'mundo')) // El resultado debe ser: ['javascript', 'node']

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const fila = matrix[i];
        const columna = fila.indexOf('JavaScript');
        if (columna !== -1) {
            console.log("Encontrado en fila:", i, "columna:", columna); 
            return [i, columna];
        }
    }
    console.log("JavaScript no encontrado"); 
    return [-1, -1];
}


// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < books.length; i++) {
        if (books[i] < books[minIndex]) {
            minIndex = i;
            console.log("Nuevo mínimo encontrado:", books[i], "en índice:", minIndex); 
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i;
            console.log("Nuevo máximo encontrado:", books[i], "en índice:", maxIndex);
        }
    }

    console.log("Índice mínimo:", minIndex, "Índice máximo:", maxIndex); 
    return [minIndex, maxIndex];

}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
