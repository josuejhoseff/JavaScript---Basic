// Arrays

const pessoas = ["Fulano", "Ciclano", "Tirando", "Irlando", "Matutando"];

const [primeiro, segundo, ,...resto] = pessoas;
// espaço vazio entre virgula pula o valor (ignora)
console.log(primeiro);
console.log(segundo);
console.log(resto);

// Objects

const pessoa = {
    nome: "Josué",
    sobrenome: "Jhoseff",
    idade: undefined,
    endereco:{
        rua: "Av Amazonas",
        numero: 320
    }
};

const {nome, sobrenome}= pessoa;
console.log(nome);

const {nome: n, sobrenome: s, endereco} = pessoa;
console.log(n, s, endereco );

const {idade ="Não tem"} = pessoa; // caso idade seja undefined será exibido o valor padrao. Neste caso "Não tem"
console.log(idade);