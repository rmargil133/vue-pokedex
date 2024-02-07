<template>
  <headerPrincipal/>
  <main class="main">
    <img class="main__pikachu" src="../../assets/PikachuBienvenida.png">
    <p>Bienvenido a Pokédex, la mejor página para buscar pokemons y conocer sus caracteristicas, ataques, hablidiades, etc.</p>
    <p>Encuetras varios pokemons interesantes y te gustaría guardarlos pues puedes añadirlos a tu apartado de favoritos y consultarlos más tarde.</p>
    <p>Si te animas a adentrarte y buscar tus pokemons favoritos puedes registrate Aqui!</p>
  </main>
  <footerPrincipal/>
</template>

<script>
import headerPrincipal from "../shared/Header.vue" 
import footerPrincipal from "../shared/Footer.vue"
export default {
  name: 'Home',
  components: {
    headerPrincipal,
    footerPrincipal
  }
}
</script>
