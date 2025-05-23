/*
    Ejercicio:

    Un joven muy afortunado logro ganar el primer premio de la loteria
    el decide hacer una fiestapara festejar que salio de la pobreza, compro
    una maquina que solo deja pasar a los mayores de edad

    1. Dejar pasar solo a los mayores de edad
    2. La primer persona que entre despues de las 2 AM no paga
*/

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18){
        if(time >= 2 && time < 7 && free == false){
            alert("podes pasar gratis")
            free = true;
        } else {
            alert("podes pasar pero tenes que pagar la entrada")
        }
    }else {
        alert("Mira papu, sos menor de edad por ende no vas a pasar, MAQUINA");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(3);