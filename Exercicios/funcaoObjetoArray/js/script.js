function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");

    const pessoas = [];
    
    function criarPessoa(nome, sobrenome, peso, altura){
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
    }

    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     alert(1);
    //     console.log("Foi enviado");
    // };

let contador =1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        const pessoa1 = criarPessoa(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push(pessoa1);
        console.log(pessoas);
        resultado.innerHTML += `<p> ${pessoa1.nome} ${pessoa1.sobrenome} ${pessoa1.peso} ${pessoa1.altura}`
    }
    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();