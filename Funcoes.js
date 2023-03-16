function saudacao(nome){
    return `Bom dia ${nome}!`;
    //console.log(`Bom dia ${nome}!`);
};

const variavel= saudacao("Josué");
const variavel2= saudacao("Luiz");

console.log(variavel, variavel2);

function soma(x, y){ // function
    return x + y;
}
console.log(soma(1, 2));
console.log(soma(32, 56));
//----------------------- function ...
function soma2(x=1, y=1){
    return x + y;
}
console.log(soma2());
console.log(soma2(4))
//----------------------- Variavel function
const raiz = function (x){
    return x ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
//------------------------ Arrow function
const exp = (x) => x ** 2;
// const exp = (x) =>{
//     return x ** 2;
// };
console.log(exp(2));
console.log(exp(4));

