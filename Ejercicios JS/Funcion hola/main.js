function saludarTresVeces(saludo) {
    
    var saludoRepetido = saludo.repeat(3);
    return saludoRepetido;
}


var saludo = "Hola ";
var saludosRepetidos = saludarTresVeces(saludo);
console.log(saludosRepetidos); 
