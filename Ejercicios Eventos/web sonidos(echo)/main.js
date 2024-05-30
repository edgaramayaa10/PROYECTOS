
var botonReproducir = document.getElementById('timba');
var miAudio = document.getElementById('sonidoTimba');


botonReproducir.addEventListener('click', function() {

if (miAudio.paused) {
    miAudio.play();
} else {
    miAudio.pause();
}
});

var btonReproducir = document.getElementById('tarola');
var miAudio2 = document.getElementById('sonidoTarola');


btonReproducir.addEventListener('click', function() {

if (miAudio2.paused) {
    miAudio2.play();
} else {
    miAudio2.pause();
}
});

var btonReproducir = document.getElementById('pandereta');
var miAudio3 = document.getElementById('sonidoPandereta');


btonReproducir.addEventListener('click', function() {

if (miAudio3.paused) {
    miAudio3.play();
} else {
    miAudio3.pause();
}
});

var btonReproducir = document.getElementById('batucada');
var miAudio4 = document.getElementById('Sonidobatucada');


btonReproducir.addEventListener('click', function() {

if (miAudio4.paused) {
    miAudio4.play();
} else {
    miAudio4.pause();
}
});



