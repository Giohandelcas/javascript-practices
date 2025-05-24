/* 
    Problema 1
    Logica:

    Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir.
    Al otro dia comienzan las clases del ciclo basico de la universidad (Porque cofla
    quiere ser programador y se incribio en la facultad de ingenieria para estudiar desarrollo)
    En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad:
    Se rompio el sistema de registros de asistencias y durante los procimos 30 dias no se podran hacer 
    registrosde datos de ningun tipo, por ende las clases no podran comenzar

    - Crear mini sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase
    - Pasados los 30 dias mostrar la situacion final de todos los estudiantes (Nro total de asistencias y ausencias)
    - se puede tener un maximo de 10% de ausencias por semestre, se tienen mas aclarar que esta reprobado
*/

/*
let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i =0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=> {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0]);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
        Asistencias: ${alumnosTotales[alumno][1]} <br>
        ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}
    `;
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado += "<b style=`color:red`>Reprobado por inacistencias</b><br>";
    } else {
        resultado+= "<br></br>"
    }
    document.write(resultado) 
}
*/

/* Calculadora rapida*/

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("Que operacion deseas realizar");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if(operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1, numero2)
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1, numero2)
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2)
    alert(`El resultado es ${resultado}`);
}
else {
    alert("Operacion no existente")
}