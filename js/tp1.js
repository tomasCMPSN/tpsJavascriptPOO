let auto = {
    marca: "Volkswagen",
    modelo: "Sudan",
    año: "2018",
    color: "gris",
    encendido: false,
    encender: function () {
        if(this.encendido == false){
            this.encendido = true;
            document.write("El vehículo se encendió.")
        }else{
            document.write("El vehículo ya se encuenta encendido.")
        }
    },
    apagar: function () {
        if(this.encendido == true){
            this.encendido = false;
            document.write("El vehículo se apagó.")
        }else{
            document.write("El vehículo ya está apagado.")
        }
    }
}

auto.encender();