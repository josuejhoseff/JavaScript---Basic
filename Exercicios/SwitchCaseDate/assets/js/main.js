const data = new Date();
const h1 = document.querySelector(".data");
const opc = {
    dateStyle: "full",
    timeStyle: "short"
}
h1.innerHTML = data.toLocaleString('pt-br', opc);


// let diaSemana = data.getDay();
// let diaSemanaTexto = "";

// let mes = data.getMonth();
// let mesTexto = "";

// switch(diaSemana){
//     case 0: diaSemanaTexto = "Domingo";
//     break;
//     case 1: diaSemanaTexto = "Segunda-feira";
//     break;
//     case 2: diaSemanaTexto = "Terça-feira";
//     break;
//     case 3: diaSemanaTexto = "Quarta-feira";
//     break;
//     case 4: diaSemanaTexto = "Quinta-feira";
//     break;
//     case 5: diaSemanaTexto = "Sexta-feira";
//     break;
//     case 6: diaSemanaTexto = "Sábado";
//     break;
// }

// switch(mes){
//     case 0: mesTexto = "Janeiro";
//     break;
//     case 1: mesTexto = "Fevereiro";
//     break;
//     case 2: mesTexto = "Março";
//     break;
//     case 3: mesTexto = "Abril";
//     break;
//     case 4: mesTexto = "Maio";
//     break;
//     case 5: mesTexto = "Junho";
//     break;
//     case 6: mesTexto = "Julho";
//     break;
//     case 7: mesTexto = "Agosto";
//     break;
//     case 8: mesTexto = "Setembro";
//     break;
//     case 9: mesTexto = "Outubro";
//     break;
//     case 10: mesTexto = "Novembro";
//     break;
//     case 11: mesTexto = "Dezembro";
//     break;
// }

// const frase = `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;

// const resultado = document.querySelector(".data");
// resultado.innerHTML = frase;

//OUTRA MANEIRA FACIL DE FAZER
// function getDiaSemanaText(diaSemana){
//     const diasSemana = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

//     return diasSemana[diaSemana];
// }

