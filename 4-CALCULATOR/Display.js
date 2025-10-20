class Display {
    constructor(displarValorAnterior, displarValorActual) {
        this.displarValorAnterior = displarValorAnterior;
        this.displarValorActual = displarValorActual;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorAnterior = '';
        this.valorActual = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: '*',
            dividir: '/'
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }
    
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displarValorActual.textContent = this.valorActual;
        this.displarValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorActual, valorAnterior);
    }
}