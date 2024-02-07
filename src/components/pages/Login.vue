<template>
  <headerPrincipal/>
  <main class="login">
    <form class="login__formulario">
      <h1>Login</h1>
      <input class="login__formulario__email" type="email" placeholder="DIRECCION DE CORREO ELECTRONICO*">
      <input class="login__formulario__contraseña" type="password" placeholder="CONTRASEÑA"> 
      <button class="login__formulario__acceder">Acceder</button>
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
