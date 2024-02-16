<template>
  <headerPrincipal/>
  <main class="login">
    <img class="login__fondo" src="../../assets/degradado1.png">
    <form class="login__formulario">
      <img class="login__formulario__banner" src="../../assets/banner-form.jpeg" alt="banner pokemons">
      <h2>Inicia sesión y accede a tu cuenta.</h2>
      <a class="login__formulario__registrate"><router-link router-link to="/registro">Registrate si no lo estas ¡Es gratis!</router-link></a>
      <div class="login__formulario__contenedor">
        <input class="login__formulario__contenedor__email" type="email" placeholder="DIRECCION DE CORREO ELECTRONICO*">
        <input class="login__formulario__contenedor__contraseña" type="password" placeholder="CONTRASEÑA"> 
        <button class="login__formulario__contenedor__acceder">Iniciar Sesión</button>
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
  }
}
</script>
