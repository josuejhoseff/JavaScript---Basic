const pessoa1 = {
    nome : 'Josué',
    sobrenome : 'Jhoseff',
    idade : 21
}
console.log(pessoa1.nome);
//---------------------------
function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa2 = criarPessoa("Lucas", "Silva", 22);
console.log(pessoa2);
//-------------------------------
const pessoa3 = {
        nome: "Douglas",
        sobrenome: "Oliveira",
        idade: 43,

    fala(){
        console.log("Olá mundo!");
    }
};

pessoa3.fala();
