const ImprimirnombreApellidos = () => {
    const nombre = "Edgar";
    const apellido = "Amaya";
    return '${Edgar} ${Amaya}'
};
const nombreApellidos = ImprimirnombreApellidos();

console.log(nombreApellidos);


const imprimirNombre = (valorBooleano) => {
    console.log("El valor es:",valorBooleano);
}
imprimirNombre(true);
imprimirNombre(false);


const mostrarParametros = (...parametros) => {
    parametros.forEach(parametro => {
        console.log(parametro);
    });
};
mostrarParametros(1, 2, 3, 4, 5);