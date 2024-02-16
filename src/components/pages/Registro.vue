<template>
  <headerPrincipal/>
  <main class="registro">
    <img class="registro__fondo" src="../../assets/degradado1.png">
    <form class="registro__formulario">
      <img class="registro__formulario__banner" src="../../assets/banner-form.jpeg" alt="banner pokemons">
      <h2>Registrate y accede a tu cuenta</h2>
      <p><router-link to="login">¿Estás registrado? ¡Inicia Sesión!</router-link></p>
      <div class="registro__formulario__contenedor">
      <input class="registro__formulario__contenedor__nombre" type="text" placeholder="NOMBRE" >
      <input class="registro__formulario__contenedor__email" type="email" placeholder="DIRECCION DE CORREO ELECTRONICO*">
      <input class="registro__formulario__contenedor__contraseña" type="password" placeholder="CONTRASEÑA"> 
      <button class="registro__formulario__contenedor__registrar">Registrarse</button>
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
  }
}
</script>