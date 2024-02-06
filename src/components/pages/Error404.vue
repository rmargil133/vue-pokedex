<template>
  <headerPrincipal/>
  <main class="main404">
    <h1 class="titulo404">S O R R Y</h1>
    <h2 class="error404">404</h2>
    <p class="mensaje404">Pokemon not found</p>
    <router-link to="/"><button class="backHome">BACK HOME</button></router-link>
  </main>
</template>

<script>
import headerPrincipal from "../shared/Header.vue" 
export default {
  name: 'Error404',
  components: {
    headerPrincipal
  }
}
</script>
