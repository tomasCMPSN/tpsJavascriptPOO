class Rectangulo{
    constructor(altura, ancho){
        this.altura = altura;
        this.ancho = ancho;
    }

    propiedades(){
        document.write(`Altura: ${this.altura}cm<br>
        Ancho: ${this.ancho}cm`);
    }

    perimetro(){
        document.write(`El perímetro es: `,2 * (this.ancho + this.altura));
    }

    area(){
        document.write(`<br>El área es: `, this.altura * this.ancho);
    }
}

let rectangulo84 = new Rectangulo(8,4);

rectangulo84.perimetro();

rectangulo84.area();