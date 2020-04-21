//Forma Habitual
//function sumar(a, b) {
//return a + b;
//}

//Función Flecha

let sumar = (a, b) => a + b;

let saludar = () => "Hola Diego";

let deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: "Regeneración",
    getNombre: () => `${deadpool.nombre} ${deadpool.apellido} - poder ${deadpool.poder}`

}

console.log(`${saludar()}`);

console.log(`la suma de 3 + 4 = ${sumar(3,4)}`);

console.log(deadpool.getNombre());