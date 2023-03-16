const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos =0;
let timer;


document.addEventListener("click", function(e){
    const el = e.target; // target irar capturar a tag clicada


    if(el.classList.contains("iniciar")){//se na tag clicada conter a classe iniciar faça....
        relogio.classList.remove("pausado");
        clearInterval(timer);
        iniciarTimer();
    }

    if(el.classList.contains("pausar")){
        clearInterval(timer);
        relogio.classList.add("pausado");
    }

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        relogio.classList.remove("pausado");
        segundos = 0;
    }
})


function criarHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {hour12: false, timeZone: "UTC"});
}
function iniciarTimer(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarHora(segundos);}, 1000)
    };


   // iniciar.addEventListener("click", function(e){
        //     relogio.classList.remove("pausado");
        //     clearInterval(timer);
        //     iniciarTimer();
        // });
        // pausar.addEventListener("click", function(e){
        //     clearInterval(timer);
        //     relogio.classList.add("pausado");
        // });
        
        // zerar.addEventListener("click", function(){
        //     clearInterval(timer);
        //     relogio.innerHTML = "00:00:00";
        //     relogio.classList.remove("pausado");
        //     segundos = 0;
        // });