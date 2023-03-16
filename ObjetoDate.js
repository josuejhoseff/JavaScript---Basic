const data = new Date();
console.log(data.toString()); // data de hoje 


const data2 = new Date("2019-04-17 20:20:15.100");
console.log(data2.toString());
console.log("Dia", data2.getDate());
console.log("Mês", data2.getMonth());
console.log("Ano", data2.getFullYear());
console.log("Hora", data2.getHours());
console.log("Minuto", data2.getMinutes());
console.log("Segundos", data2.getSeconds());
console.log("Milisegundos", data2.getMilliseconds());
console.log("Dia da Semana", data2.getDay());