<template>
  <headerPrincipal/>
  <main class="login">
    <img class="login__fondo" src="../../assets/degradado1.png">
    <form class="login__formulario" @submit.prevent="login">
      <img class="login__formulario__banner" src="../../assets/banner-form.jpeg" alt="banner pokemons">
      <h2>Inicia sesión y accede a tu cuenta.</h2>
      <a class="login__formulario__registrate"><router-link to="/registro">Registrate si no lo estas ¡Es gratis!</router-link></a>
      <div class="login__formulario__contenedor">
        <input v-model="email" class="login__formulario__contenedor__email" type="email" placeholder="DIRECCION DE CORREO ELECTRONICO*" required>
        <input v-model="contrasena" class="login__formulario__contenedor__contraseña" type="password" placeholder="CONTRASEÑA" required> 
        <button type="submit" class="login__formulario__contenedor__acceder">Iniciar Sesión</button>
      </div>
      <div class="login__formulario__contenedorLogo">
        <img class="login__formulario__contenedorLogo__logoFondo" src="../../assets/Titulo.png">
      </div>
    </form>
  </main>
  <footerPrincipal/>
</template>

<script>
import headerPrincipal from "../shared/Header.vue" 
import footerPrincipal from "../shared/Footer.vue"

export default {
  name: 'Login',
  components: {
    headerPrincipal,
    footerPrincipal
  },
  data() {
    return {
      email: '',
      contrasena: ''
    }
  },
  // Métodos para comprobar el usuario y contraseña con el guardado en el localStorage
  methods: {
    login() {
      //Recupero el usuario del localStorage
      const usuarioGuardado = localStorage.getItem('usuario');
      // Comprueba si existe un usuario almacenado
      if (usuarioGuardado) {
        // Convierto el usuario en un objeto de JavaScript
        const usuario = JSON.parse(usuarioGuardado);
        // Comprueba si el email y la contraseña con iguales que los almacenados en el localStorage 
        if (usuario.email === this.email && usuario.contrasena === this.contrasena) {
          // Si coincidde se manda al usuario a la página principal
          this.$router.push('/');
        } else {
          // En caso contrario salta un alert indicando que no es correcto
          alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
      } 
    }
  }
}
</script>
