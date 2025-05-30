/*
    Cofla termino el primer semestre y cofla no sabe si aprobara o no las materias, debe contar con al menos de el 90% de asistencia 

    el promedio por materia debe ser de almenos 7/10
    y debe tener al menos el 75% de los trabajos practicos entregados

    - Solicitar los datos y decile si aprueba o no
    - Mostrar todo esto con colores representativos en consola
*/

let materias = {
    fisica: [90,6,4,"fisica"],
    matematica: [90,6,4,"matematicas"],
    logica: [90,6,4,"logica"],
    quimica: [90,6,4,"quimica"],
    calculo: [90,6,4,"calculo"],
    biologia: [90,6,4,"biologia"],
    bbdd: [90,6,4,"bbdd"],
    algebra: [90,6,4,"algebra"],
}

const asistencia =()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        if (asistencias >= 90){
            console.log(materias[materia][3]);
            console.log("%cAprobado","color:green");
        } else {
            console.log(materias[materia][3]);
            console.log("%cDesaprobado","color:red");
        }
    }
}

asistencia();