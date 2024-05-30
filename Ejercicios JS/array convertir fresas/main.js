let fruta = ["🍓", "🍋", "🍓", "🍋", "🍓" ];

let frutaModificada = fruta.map(function(fruta) {
    if (fruta === "🍓") {
        return "🍄";
    } else {
        return fruta;
    }
});

console.log(frutaModificada);
