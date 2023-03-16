//SetInterval - executa infinitamente em um intervalo informado
const timer = setInterval(function(){console.log("executando...")}, 2000);
// "executando..." irá aparecer no console a cada 2 segundos

const crono = setTimeout(function(){console.log("Olá mundo")}, 5000);
// "Olá mundo" irá aparecer no console depois de 5 segundos e finalizar