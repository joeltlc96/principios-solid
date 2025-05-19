class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  obtenerNombre() {
    return this.nombre;
  }
}

class UsuarioImpresora {
  imprimir(usuario) {
    console.log("Usuario:", usuario.obtenerNombre());
  }
}

const joel = new Usuario("Joel");
const impresora = new UsuarioImpresora();
impresora.imprimir(joel);
