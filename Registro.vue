<template>
  <headerPrincipal/>
  <main class="registro">
    <img class="registro__fondo" src="../../assets/degradado1.png">
    <form class="registro__formulario" @submit.prevent="submitForm">
      <img class="registro__formulario__banner" src="../../assets/banner-form.jpeg" alt="banner pokemons">
      <h2>Regístrate y accede a tu cuenta</h2>
      <p><router-link to="login">¿Estás registrado? ¡Inicia Sesión!</router-link></p>
      <div class="registro__formulario__contenedor">
        <input v-model="nombre" class="registro__formulario__contenedor__nombre" type="text" placeholder="NOMBRE" required>
        <input v-model="email" class="registro__formulario__contenedor__email" type="email" placeholder="DIRECCIÓN DE CORREO ELECTRÓNICO*" required>
        <input v-model="contrasena" class="registro__formulario__contenedor__contraseña" type="password" placeholder="CONTRASEÑA" required> 
        <button type="submit" class="registro__formulario__contenedor__registrar">Registrarse</button>
      </div>
      <div class="registro__formulario__contenedorLogo">
        <img class="registro__formulario__contenedorLogo__logoFondo" src="../../assets/Titulo.png">
      </div>
    </form>
  </main>
  <footerPrincipal/>
</template>

<script>
import headerPrincipal from "../shared/Header.vue" 
import footerPrincipal from "../shared/Footer.vue"

export default {
  name: 'Registro',
  components: {
    headerPrincipal,
    footerPrincipal
  },
  data() {
    return {
      nombre: '',
      email: '',
      contrasena: '' 
    }
  },
  // Método para el form de registro y guardar los datos en el localStorage
  methods: {
    submitForm() {
      // Comprueba si todos los campos estan completos
      if (this.nombre && this.email && this.contrasena) {
        // Si estan completos se guardan en el localStorage.
        localStorage.setItem('usuario', JSON.stringify({ 
          nombre: this.nombre,
          email: this.email,
          contrasena: this.contrasena
        }));
        // Con el usuario registrado se le manda a la página principal.
        this.$router.push('/'); 
      } 
    }
  }
}
</script>
