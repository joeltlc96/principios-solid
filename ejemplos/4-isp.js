class Impresora {
  imprimir() {
    console.log("Imprimiendo...");
  }
}

class Escaner {
  escanear() {
    console.log("Escaneando...");
  }
}

class Multifuncional {
  constructor(impresora, escaner) {
    this.impresora = impresora;
    this.escaner = escaner;
  }

  imprimir() {
    this.impresora.imprimir();
  }

  escanear() {
    this.escaner.escanear();
  }
}
