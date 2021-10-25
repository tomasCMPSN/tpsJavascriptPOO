class Productos{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDatos(){
        document.write(`Código: ${this.codigo}
        <br>Nombre: ${this.nombre}
        <br>Precio: ${this.precio}`);
    }
}

let arroz = new Productos(111111, `Arroz`, 100);
let fideos = new Productos(222222, `Fideos`, 150);
let esponja = new Productos(333333, `Esponja`, 200);

let productos = [arroz, fideos, esponja];

esponja.mostrarDatos();