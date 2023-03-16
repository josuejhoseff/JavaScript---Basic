const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);
console.log(alunos[1]);
alunos[1] = "Eduardo";
console.log(alunos);

alunos[3] = "Fulano"; //cria automcaticamente
console.log(alunos);

alunos[alunos.length]="Teste 1";//cria uma nova posicao e adiona um valor
alunos[alunos.length]="Teste 2";
alunos[alunos.length]="Teste 3";
console.log(alunos);


alunos.push("Teste final"); // adiciona na ultima posiçao
console.log(alunos);

alunos.unshift("Inicio"); // adiciona na primeira posição;
console.log(alunos);

alunos.pop(); //remove a ultima posição
//const removido = alunos.pop()
console.log(alunos);

alunos.shift(); // remove a primeira posição
//const removido = alunos.shift();
console.log(alunos);

delete alunos[1]; //deleta o valor, sem diminuir o tamanho
console.log(alunos);

console.log(alunos[50]); //é possivel acessar posiçoes inexistente sem alerta de erro

console.log(alunos.slice(0, 3)); // retornar de tal posicao até outra posicao
