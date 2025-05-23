/* 
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

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i =0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

