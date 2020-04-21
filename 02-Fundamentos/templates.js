let nombre = "Deadpool";
let real = 'Wade Wilson';

console.log(nombre + " " + real); //Primera forma de imprimir en consola 
console.log(`${nombre} ${real}`); //Segunda forma de imrpimir en consola (más práctica)

let nombreCompleto = nombre + " " + real; //Se almacena el nombre que se imprimió antes
let nombreTemplate = `${nombre} ${real}`; //Se almacena el nombre que se imprimió de la segunda manera

console.log(nombreCompleto === nombreTemplate); //Se compara el valor de las variables

function getNombre() {
    return `${nombre} ${real}`; //funcion que obtiene el valor de las varibales nombre y real
}

console.log(`El nombre es: ${getNombre()}`); //imprime el valor obtenido de la función getNombre()