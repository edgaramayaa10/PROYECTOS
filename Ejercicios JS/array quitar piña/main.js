let pizzas = ["🍕", "🍕", "🍍", "🍕", "🍕"];


let pizzasSinPina = pizzas.filter(function(elemento) {
    return elemento !== "🍍"; 
});

console.log(pizzasSinPina);
