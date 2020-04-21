//Pruebas de async y await

//let getNombre = async() => {
//  throw new Error("No existee el usuario en BD")
//return "Diego";
//}

//Terminos de promesa

let getNombre = () => {
    return new Promise((resolve, reject) => {
        //setTimeout(() => {
        //  resolve("Diego");
        //}, 3000);
        reject("Error al consultar el nombre")
        rr
    });
}

let saludo = async() => { //Devuelve una promesa
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log("Error en el saludo:", err);
})

//console.log(getNombre());

//getNombre().then(nombre => {
//  console.log(nombre);
//}).catch(err => {
//  console.log("Error en el async:", err);
//})