function convertirNumero(cadena) {
    let numero;
    switch(cadena.toLowerCase()) {
      case 'uno':
        numero = 1;
        break;
      case 'dos':
        numero = 2;
        break;
      case 'tres':
        numero = 3;
        break;
      case 'cuatro':
        numero = 4;
        break;
      case 'cinco':
        numero = 5;
        break;
      default:
        numero = 'Número no válido';
    }
    return numero;
}

console.log(convertirNumero('uno')); 
console.log(convertirNumero('tres')); 
