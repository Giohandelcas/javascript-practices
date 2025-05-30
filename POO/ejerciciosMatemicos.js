/*
    Problema A:

    - Que las funcion nos devuelva:
        Profesro asignado
        nombre de los alumnos
        funcion que nos indique en cuantas clases esta cofla
        nombre de esas clases y sus profesores


    Problema B:
    - Preguntarle en que materias se quiere inscribir
    - Si ya hay 20 inscritos negarle la inscripcion 
    - si hay menos de 20, inscribirlo y añadirlo a la lista de alumnos
*/

/* Calculadora rapida*/

class Calculadora {
    constructor(){

    }
sumar = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2);
}
restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if(operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = Calculadora.sumar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar(numero1, numero2)
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = Calculadora.dividir(numero1, numero2)
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = Calculadora.multiplicar(numero1, numero2)
    alert(`El resultado es ${resultado}`);
}
else {
    alert("Operacion no existente")
}