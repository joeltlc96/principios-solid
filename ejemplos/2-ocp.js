class Figura {
  obtenerArea() {
    return 0;
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  obtenerArea() {
    return this.lado * this.lado;
  }
}

const cuadrado = new Cuadrado(5);
console.log(cuadrado.obtenerArea());
