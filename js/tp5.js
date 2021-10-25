class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    }

    mostrarGeneracion(){
        if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            document.write(`<br>${this.nombre} pertenece a la Generación Z, su rasgo característico es la irreverencia.`);
        }else if(this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            document.write(`<br>${this.nombre} pertenece a la Generación Y, su rasgo característico es la frustación.`);
        }else if(this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            document.write(`<br>${this.nombre} pertenece a la Generación X, su rasgo característico es la obsesión por el éxito.`);
        }else if(this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            document.write(`<br>${this.nombre} pertenece a la Generación Baby Boom, su rasgo característico es la ambición.`);
        }else{
            document.write(`<br>${this.nombre} pertenece a la Generación Silent Generation, su rasgo característico es la austeridad.`);
        }
    }

    esMayorDeEdad(){
        if(this.edad >= 18){
            document.write(`<br>Es mayor de edad.`)
        }else{
            document.write(`<br>No es mayor de edad.`)
        }
    }

    mostrarDatos(){
        document.write(`<br>Nombre: ${this.nombre}.
        <br>Edad: ${this.edad}.
        <br>DNI: ${this.dni}.
        <br>Sexo: ${this.sexo}.
        <br>Peso: ${this.peso}kg.
        <br>Altura: ${this.altura} metros.
        <br>Año de nacimiento: ${this.anioDeNacimiento}.`)
    }

    generaDNI(){
        document.write(`<br>DNI generado: ` + Math.floor(Math.random() * (99999999 - 10000000) + 10000000));
    }
}

let tomas = new Persona(`Tomás Campusano`, 18, 44690058, `H`, 70, 1.78, 2003);

tomas.mostrarGeneracion();
tomas.esMayorDeEdad();
tomas.mostrarDatos();
tomas.generaDNI();