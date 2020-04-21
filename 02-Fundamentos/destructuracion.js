let deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: "Regeneración",
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

//Opcion 1
console.log(deadpool.getNombre());
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

//Opcion 2
let { nombre, apellido, poder } = deadpool; //Se aplica destructuración
console.log(nombre, apellido, poder);