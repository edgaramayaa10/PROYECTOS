const array = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];

const newArray = array.map(item => {
    if (item === "🌶️") {
        return item + "🥵";
    } else {
        return item;
    }
});

console.log(newArray);
