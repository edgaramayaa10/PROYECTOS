function sustituirLetras(cadena) {
    
    return cadena.replace(/A/g, 'O');
}


var cadenaOriginal = "En la clase de arbitro hemos pitado faltas y fueras de juego";
var cadenaModificada = sustituirLetras(cadenaOriginal);
console.log(cadenaModificada);

