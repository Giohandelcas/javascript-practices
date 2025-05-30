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
    if(alumnos.length >= 20){
        document.write(`
            Lo siento <b>${alumno}</b> las clase de ${materia} ya esta llena 
            `)
    } else {
        alumnos.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: alumnos,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"],
        }
        } else if(meteria == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion: alumnos,
                logica: materias["logica"],
                quimica: materias["quimica"],
        }
        } else if(meteria == "logica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: alumnos,
                quimica: materias["quimica"],
        }
        } else if(meteria == "quimica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: alumnos,
        }
        }
    }
}

inscribir("pepito","fisica");