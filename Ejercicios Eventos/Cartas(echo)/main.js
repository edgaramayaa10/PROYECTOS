const img = document.getElementById('imagen');
function frontSrc(){
    img.src = './card-front.png';
}

function backSrc(){
    img.src = './card-back.png';
}

img.addEventListener("mouseover", frontSrc);
img.addEventListener("mouseout", backSrc);
