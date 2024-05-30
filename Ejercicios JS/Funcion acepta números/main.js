function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const mayorNumero = encontrarMayor(10, 5);
console.log("El mayor número es:", mayorNumero);