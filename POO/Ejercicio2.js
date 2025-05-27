/*
    Cofla ya tiene su celular nuevo y ahora esta mirnado las aplicaciones del play store ya que quiere jugar juegos que sean muy populares, que tengan buena puntuacion y que pesen poco, pero las 7 apps que llamaron su atencion son un tanto similares y sabe que si se descarga todas, probablemente juegeu con todas, pero el se va a descargar solo para tener perdidas innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidise cual de todas estas aplicaciones es la que va a descargar

    Crear soluciones
    - crear un sistema que ayude a cofla a decidir cual app descargar
    - la informacion de los instaladores debe tener la cantidad de descargas y la puntuacion y el peso 
    - Las apps se deben poder inslar, abirr, cerrar y desinstalar
*/

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada = falsa){
            this.iniciada == true;
            alert("App iniciada")
        }
    }
    cerrar(){
        if(this.iniciada == true){
            this.iniciada = false;
            alert("App cerrada")
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}