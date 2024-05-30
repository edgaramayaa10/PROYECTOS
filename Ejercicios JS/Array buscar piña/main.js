const arr = ["🍕", "🍕", "🍍", "🍕", "🍕"];
let stock = 0;
arr.find(item => {
    if (item == "🍍") {
            stock++;
    };
});
if(stock !=0) console.log("Hay una " + stock + "🍍 entre las pizzas");