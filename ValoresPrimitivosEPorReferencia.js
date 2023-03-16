/*
Primitivos (imutáveis) - String, Number, Boolean, Undefined, Null(bigint, symbol) - valores copiados
Referencia (mutáveis) - array, object, function - Passados por referencia
*/

const a = 'A';
const b = a; //Copia de valor
b[0] ='Outra coisa'; // Imutavel!
console.log(a, b);

const array1 = [1, 2, 3];
const array2 = array1; //referncia (aponta para o mesmo espaço em memoria)
array2.push(4); // Mutavel
console.log(array1, array2);
