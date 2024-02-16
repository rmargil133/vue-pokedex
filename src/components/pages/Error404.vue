<template>
  <headerPrincipal/>
  <main class="main404">
    <h1 class="main404__titulo404">E R R O R</h1>
    <div class="main404__contenedor">
      <p class="main404__contenedor__error404">4</p>
      <img class="main404__contenedor__pokeball404" src="../../assets/Pokeball404.png" alt="pokeball">
      <p class="main404__contenedor__error404">4</p>
    </div>
    <p class="main404__mensaje404">Not Found</p>
    <router-link to="/"><button class="main404__backHome">BACK HOME</button></router-link>
  </main>
  <footerPrincipal/>
</template>

<script>
import headerPrincipal from "../shared/Header.vue" 
import footerPrincipal from "../shared/Footer.vue"
export default {
  name: 'Error404',
  components: {
    headerPrincipal,
    footerPrincipal
  }
}
</script>
