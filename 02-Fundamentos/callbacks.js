//setTimeout(function() {
//console.log("Hola mundo");
//}, 3000);

//FUNCION normal arriba

//Funcion flecha
// setTimeout(() => {
//console.log("Hola mundo");
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Diego",
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe!`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log("Usuario de la base de datos: ", usuario);
});