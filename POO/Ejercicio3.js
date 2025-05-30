/*
    Problema A:

    - Que las funcion nos devuelva:
        Profesor asignado
        nombre de los alumnos
        funcion que nos indique en cuantas clases esta cofla
        nombre de esas clases y sus profesores


    Problema B:
    - Preguntarle en que materias se quiere inscribir
    - Si ya hay 20 inscritos negarle la inscripcion 
    - si hay menos de 20, inscribirlo y añadirlo a la lista de alumnos
*/

const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Ramirez","pedro","pepito","cofla","maria"],
        programacion: ["Duvan","pedro","pepito","cofla","maria"],
        logica: ["Duvan","pedro",,"cofla","maria"],
        quimica: ["Rodrigo","pedro","pepito","maria"],
    }
    if (materias[materia] !== undefined){
        return [materias[materia], materia];
    } else {
        return false;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = obtenerInformacion(materia)[0][0]
    let alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    document.write(`
        El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
        `)
}
}

const clasesDeAlumno = (alumno) => {
    let materias = {
        fisica: ["Ramirez","pedro","pepito","cofla","maria"],
        programacion: ["Duvan","pedro","pepito","cofla","maria"],
        logica: ["Duvan","pedro",,"cofla","maria"],
        quimica: ["Rodrigo","pedro","pepito","maria"],
    };

    let clasesInscrito = [];
    for (let materia in materias) {
        let alumnos = materias[materia];
        // Buscamos el nombre del alumno en la lista (ignorando el primer elemento que es el profesor)
        if (alumnos.includes(alumno)) {
            clasesInscrito.push(materia);
        }
    }

    if (clasesInscrito.length > 0) {
        document.write(`${alumno} está inscrito en ${clasesInscrito.length} clase(s): <b>${clasesInscrito.join(", ")}</b><br>`);
    } else {
        document.write(`${alumno} no está inscrito en ninguna clase.<br>`);
    }
}


mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

clasesDeAlumno("cofla");
clasesDeAlumno("pedro");
clasesDeAlumno("pepito");
clasesDeAlumno("maria");
clasesDeAlumno("angela"); // Caso: alumno no inscrito
