console.log(Math.round(Math.random())); //numero aleatorio 0 o 1

function moneda(){
    //Generar un número aleatorio entre 0 y 1
    const resultado = Math.floor(Math.random() * 2);

    return resultado === 1 ? "cara" : "cruz";
}

const resultadoMoneda = moneda();

console.log("El resultado es:", resultadoMoneda);