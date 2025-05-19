class Animal {
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Ladrido");
  }
}

function reproducirSonido(animal) {
  animal.hacerSonido();
}

reproducirSonido(new Perro());
