/*
class animal {
    //creando un constructor
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //Creando el metodo
    verInfo(){
        document.write(this.info + "<br>")
    }
}

let perro = new animal("perro",5,"marron");
let gato = new animal("gato",3,"negro");
let pajaro = new animal("pajaro",1,"rojo");

/*
document.write(perro.info)
*/
/*
perro.verInfo();
gato.verInfo();
pajaro.verInfo();
*/
/*
    Caracteristicas de la POO
    - Abstraccion
    - Modularidad
    - Encapsulamiento
    - Polimorfismo

    Otros conceptos de POO
    -Herencia
    -Metodos estaticos
    -Metodos accesore(Getters, setters)
*/

// Creando soluciones
/*
    a) Cofla entro a una tienda que vende celulares porque le pareceio bastante bueno comprarse un nuevo celular.
    De todos los modelos que hay disponibles en esa tienda, a cofla le llamaron la atencion 3 telefonos especificamente, el problema es que ningun vendedor sabe nada al respecto entonces no puede recomendarle absolutamente nada pero claro: el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahi y entramos nosotros.

    - Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
    - Cada celular debe tener color, peso, resolucion de pantalla, resilucioon de camara y memoria ram
    -Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar 
*/

class celulares {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else{
            alert("El celular  esta apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular")
        } else {
        alert("el celular esta apagado")
    } 
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.rdc}`)
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        Tamaño: <b>${this.rdp}</b> </br>
        Resolucion de camara: <b>${this.rdc}</b> </br>
        Resolucion de video: <b>${this.rdc}</b> </br>
        Memoria Ram: <b>${this.ram}</b> </br>
        `
    }
}

celular1 = new celulares("rojo","150g","5","full hd","2GB");
celular2 = new celulares("negro","150g","5","full hd","2GB");
celular3 = new celulares("morado","150g","5","full hd","2GB");


/*
celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();
*/
/*
document.write(`
    ${celular1.mostrarInfo()}</br>
    ${celular2.mostrarInfo()}</br>
    ${celular3.mostrarInfo()}</br>
    `);
*/

/*
    B) Cofla no esta satisfecho con los celulares asi que decide ir a la seccion de celulares de alta gama, donde va a poder encontrar los celulares mas caros del lugar, asi que al entrar vio dos celulares que le encantaron, estos 2 celulares de alta gama pueden hacer todo lo que podian hacer los 3 anteriores pero tambien mejores caracteristicas y ademas pueden grabar en cara super lenta, tienen reconocimiento facial y camara extra.

    Crear soluciones
    - Implementar todas estas cualidades en los celulares de alta gama
*/

class celularesAltaGama extends celulares{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram,rdce);
        this.rdce = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta")
    }
    reconocimientoFacial(){
        alert("Leyendo rostro")
    }
    infoAltaGama(){
        return this.mostrarInfo + `Resolucion de camara trasera: ${this.rdce}`
    }
} 

celular4 = new celularesAltaGama("rojo", "130g", "5.2","4k", "3GB", "full hd");
celular5 = new celularesAltaGama("negro", "142g", "5.2","4k", "3GB", "full hd");

document.write(`
    ${celular4.infoAltaGama()} </br>
    ${celular5.infoAltaGama()} </br>
    `)