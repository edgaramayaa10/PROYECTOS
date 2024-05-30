let cartas = ["🎴", "🎴", "🎴", "🎴", "🎴", "🎴", "🎴"];
let cartaComodin = "🃏";
let posicion = Math.floor(cartas.length / 2); 

cartas.splice(posicion, 0, cartaComodin); 

console.log(cartas); 



