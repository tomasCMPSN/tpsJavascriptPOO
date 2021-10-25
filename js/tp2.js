let cuenta = {
    titular: `Alex`,
    saldo: 0,
    ingresar: function (saldoIngresado) {
        this.saldo = this.saldo + saldoIngresado;
    },
    retirar: function (saldoRetirado) {
        this.saldo = this.saldo - saldoRetirado;
        if(this.saldo < 0){
            document.write(`El saldo no puede ser inferior a cero.`);
        }
    },
    informar: function () {
        document.write(`<br>Titular: ${this.titular}
        <br>Saldo: ${this.saldo}`);
    }
}

cuenta.ingresar(5000);
cuenta.retirar(2000);
cuenta.informar();