const umaString = "uma string sei";

console.log(umaString.charAt(1)); // Retorna o valor da pos
console.log(umaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc
console.log(umaString.concat(' ', 'ei', ' ', 'sister')) // raramente usado
console.log(umaString.concat(' ', 'ei', ' ', 'sister')); // raramente usado
console.log(umaString.indexOf('e', 0)); // Retorna o índice da primeira string informada
console.log(umaString.lastIndexOf('e', umaString.length)); // Retorna o índice da ultima string informada
console.log(umaString.match(/[A-Za-z]+/g)); // Retorna um array com os valores encontrados (se g)
console.log(umaString.slice(-3, -1));// retorna as letras nestes indices
console.log(umaString.split(' ', 2));// retorna um arrays com as duas primeiras strings separadas por ' ';
console.log(umaString.toUpperCase()); // retorna a string maiuscula
console.log(umaString.toLowerCase());// retorna a string minuscula