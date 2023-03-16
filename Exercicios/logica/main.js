// escreva uma função que receba 2 numeros e retorna o maior deles

const maior = (x, y) => x > y ? x : y;
// function maior(num1, num2){
//    return num1 > num2 ? num1 : num2;
// }
console.log(maior(90, 10));

//Escreva uma funçao chamada ePaisagem que recebe dois parametros'
//, largura e altura de uma imagem (number). Retorne  true se a imagem
// estiver no modo paisagem

const ePaisagem = (largura, altura) => largura > altura ? true : false;
console.log(ePaisagem(360, 200));

//Escreva uma funçao que recebe um numero e retorne o seguinte:
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//Numero não é divisel por 3 e 5 = retorna  o proprio numero
//Checar se o numero é realmente um numero = Retorna o proprio número
//Use a funçao com numeros  de 0 a 100

function verifica(x){
    let result = "";
    x % 3 === 0 ? result+="Fizz" : result="";
    x % 5 === 0 ? result+="Buzz" : result+="";
    x %3 !==0 && x%5 !==0 ? result = x : result= result;
    x === NaN ? result = x : result=result;

    return result;
}


for(let i=0; i<=100;i++){
    console.log(`${i} - ${verifica(i)}`);
}