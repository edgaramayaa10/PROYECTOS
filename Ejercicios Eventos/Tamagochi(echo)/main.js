// Disminuye la barra//
var porcentaje1 = 100;
var porcentaje2 = 100;
var porcentaje3 = 100;
var porcentaje4 = 100;

function actualizarBarras() {
    document.getElementById('barra1').style.width = porcentaje1 + '%';
    document.getElementById('barra2').style.width = porcentaje2 + '%';
    document.getElementById('barra3').style.width = porcentaje3 + '%';
    document.getElementById('barra4').style.width = porcentaje4 + '%';
}

function disminuirPorcentajes() {
    if (porcentaje1 > 0) porcentaje1 -= 1;
    if (porcentaje2 > 0) porcentaje2 -= 1;
    if (porcentaje3 > 0) porcentaje3 -= 1;
    if (porcentaje4 > 0) porcentaje4 -= 1;
    
    actualizarBarras();
}

setInterval(disminuirPorcentajes, 1000);
//Recargar las barras//
