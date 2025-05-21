// Funciones

// Primera forma
/*
function saludar(){
    respuesta = prompt("Como fue tu dia");
    if(respuesta == "bien") {
        alert("Me alegro")
    } else{
        alert("Una pena")
    }
}

saludar()
*/

//Segunda forma 

// const saludar = function(nombre) {
//     let frase = `!Hola ${nombre} como estas?`;
//     document.write(frase)
// }
// saludar("Angelo")

//Tercera forma funciones flecha

const saludar = (nombre)=> {
    let frase = `!Hola ${nombre} como estas?`;
     document.write(frase)
}
saludar("Angelo")

// Variables

// function suma (num1, num2){
//     let res = num1 + num2;
//     document.write(res);
//     document.write("<br>")
// }

// suma(100,200) 