/*


    Problema B:
    - Preguntarle en que materias se quiere inscribir
    - Si ya hay 20 inscritos negarle la inscripcion 
    - si hay menos de 20, inscribirlo y añadirlo a la lista de alumnos
*/

const materias = {
        fisica: ["Ramirez","pedro","pepito","cofla","maria"],
        programacion: ["Duvan","pedro","pepito","cofla","maria"],
        logica: ["Duvan","pedro",,"cofla","maria"],
        quimica: ["Rodrigo","pedro","pepito","maria"],
    }

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if(alumnos.length >= 2){
        document.write(`
            Lo siento <b>${alumno}</b> las clase de ${materia} ya esta llena 
            `)
    }
}

inscribir("pepito","fisica");