<template>
  <headerLogueado/>
  <main class="contacto">
    <img class="contacto__fondo" src="../../assets/Pokemons.png">
    <form @submit.prevent="enviarForm" id="formulario" class="contacto__formulario">
      <h1>Contáctanos</h1>
      <div class="contacto__formulario__contenedor">
        <input v-model="nombre" id="nombre" class="contacto__formulario__contenedor__nombre" type="text" placeholder="NOMBRE"> 
        <span v-if="!nombreValido" class="error">Por favor ingresa tu nombre.</span>
        <input v-model="email" id="email" class="contacto__formulario__contenedor__email" type="email" placeholder="CORREO ELECTRONICO">
        <span v-if="!emailValido" class="error">El email no es valido.</span>
      </div>
      <input v-model="asunto" id="asunto" class="contacto__formulario__asunto" type="text" placeholder="ASUNTO">
      <span v-if="!asuntoValido" class="error">Por favor ingresa el asunto.</span>
      <textarea v-model="mensaje" id="mensaje" class="contacto__formulario__mensaje" placeholder="Escribe un mensaje.."></textarea>
      <span v-if="!mensajeValido" class="error">Por favor ingresa tu mensaje.</span>
      <button class="contacto__formulario__enviar">Enviar</button>
      <div v-if="!mostrarSpinner" id="spinner" class="hidden flex justify-center mt-10">
                <div class="sk-chase">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                </div>
            </div>
    </form>
    
  </main>
  <footerPrincipal/>
</template>

<script>
import headerLogueado from "../shared/HeaderLogueado.vue" 
import footerPrincipal from "../shared/Footer.vue"
export default {
  name: 'ContactoRegistrado',
  components: {
    headerLogueado,
    footerPrincipal
  },
  data() {
    return {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
      nombreValido: true,
      emailValido: true,
      asuntoValido: true,
      mensajeValido: true,
      mostrarSpinner: true 
    };
  },
  methods: {
    enviarForm() {
      // Validación de los campos del formulario
      this.nombreValido = !!this.nombre;
      this.emailValido = this.validarEmail(this.email);
      this.asuntoValido = !!this.asunto;
      this.mensajeValido = !!this.mensaje;

      if (this.nombreValido && this.emailValido && this.asuntoValido && this.mensajeValido) {

        this.mostrarSpinner = false;
        setTimeout(() => {
          this.mostrarSpinner = true;
          const confirmar = document.createElement("P")
          confirmar.textContent = "Mensaje Enviado correctamente"
          formulario.appendChild(confirmar)

          setTimeout(() => {
            confirmar.remove()

          }, 3000);
        }, 3000);
      }
    },

    validarEmail() {
      // Validación de email simple
      const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return re.test(this.email);
    }
  }
};
</script>
