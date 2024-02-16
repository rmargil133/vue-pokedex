<template>
  <headerLogueado/>
  <main class="main">
    <img class="main__fondo" src="../../assets/Home.png">
    <div>
    <section class="main__info">
      <h1 class="main__titulo">Universo Pokémon.</h1>
      <p class="main__parrafo">Millones de Pokémons. No necesitas tarjeta de crédito.</p>
      <router-link to="/listadoregistrado"><a class="main__botonVer">Ver Pokémons</a></router-link>
    </section>
    
    <section class="main__elijePokemon">   
      <h2>Prueba a elegir unos de los tres pokemon principales!</h2>  
        <article class="main__elijePokemon__pokemons">
          <img class="main__elijePokemon__pokemons__imagen" src="../../assets/Bulbalsur.png">
          <button class="main__elijePokemon__pokemons__botonElejirBulbalsur">Elijo a Bulbalsur</button>
        </article>
        <article class="main__elijePokemon__pokemons">
          <img class="main__elijePokemon__pokemons__imagen" src="../../assets/Charmander.png">
          <button class="main__elijePokemon__pokemons__botonElejirCharmander">Elijo a Charmander</button>
        </article>
        <article class="main__elijePokemon__pokemons">
          <img class="main__elijePokemon__pokemons__imagen" src="../../assets/Squirtle.png">
          <button class="main__elijePokemon__pokemons__botonElejirSquirtle">Elijo a Squirtle</button>
        </article>
        
      
    </section>
  </div>
  </main>
  <footerPrincipal/>
</template>

<script>
  import headerLogueado from "../shared/HeaderLogueado.vue"
  import footerPrincipal from "../shared/Footer.vue"
export default {
  name: 'home',
  components: {
    headerLogueado,
    footerPrincipal
  }
}
</script>
