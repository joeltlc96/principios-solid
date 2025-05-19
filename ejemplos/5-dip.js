class ServicioCorreo {
  enviar(mensaje) {
    console.log("Correo enviado:", mensaje);
  }
}

class Notificador {
  constructor(servicio) {
    this.servicio = servicio;
  }

  notificar(mensaje) {
    this.servicio.enviar(mensaje);
  }
}

const correo = new ServicioCorreo();
const notificador = new Notificador(correo);
notificador.notificar("Hola mundo");
