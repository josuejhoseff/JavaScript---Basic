//Tratamento de erro/exceções com o bloco try/catch
try{
    console.log(naoDeclarada);
}
catch(erro){
    console.log("Variavel não declarada: "+ erro);}
finally{
    console.log("Sempre estarei aqui!");
}

function soma (x, y){
    if(typeof x !== "number" || typeof y !=="number"){
        throw new Error("Minha exceção personalizada");
       //throw("Minha exceção personalizada");

    }
    return x + y;
}

console.log(soma("1", 2));
