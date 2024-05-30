const emoticonos = [
    "😊", "😂", "😎", "😍", "🤗", "😜", "😇"
];

let indiceActual = 0;

function handleClick() {
    
    const emoticono = emoticonos[indiceActual];

    mostrarEmoticono(emoticono);

    indiceActual = (indiceActual + 1) % emoticonos.length;
}


function mostrarEmoticono(emoticono) {
    const resultado = document.getElementById('resultado');
    resultado.textContent += emoticono; 
}

const boton = document.getElementById('boton1');
boton.addEventListener('click', handleClick);
