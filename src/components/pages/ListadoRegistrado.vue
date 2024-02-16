<template>
  <div>
    <headerLogueado/>
    <main>
      <h1 class="titulo">Listado</h1>
      <div v-if="pokemons.length === 0" class="mensaje_carga">Cargando...</div>
      <div v-else class="listado">
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="carta_pokemon">
          <h2 class="nombre">{{ pokemon.name }}</h2>
          <div class="foto_pokemon">
            <img class="img" :src="pokemon.image" :alt="pokemon.name" />
          </div>
          <p class="tipo">Tipo: {{ pokemon.types.join(', ') }}</p>
        </div>
      </div>
    </main>
    <footerPrincipal/>
  </div>
</template>

<script>

import axios from 'axios';
import headerPrincipal from "../shared/Header.vue";
import footerPrincipal from "../shared/Footer.vue";

export default {
  name: 'Listado',
  components: {
    headerPrincipal,
    footerPrincipal
  },
  data() {
    return {
     // Array donde guardaremos nuestros pokemons
      pokemons: []
    };
  },
  mounted() {
    // Realiza una solicitud GET a la API de Pokémon para obtener una lista de Pokémon limitada a 50
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => {
        // Obtiene los resultados de la respuesta
        const results = response.data.results;
        // Por cada Pokémon en los resultados
        results.forEach(pokemon => {
          // Se realiza una solicitud GET a la url del pokemon para obtener más datos.
          axios.get(pokemon.url)
            .then(response => {
              // Obtiene los datos de las respuesta.
              const pokemonData = response.data;
              // Objeto para guardar los datos que necesito.
              const pokemonObject = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                types: pokemonData.types.map(type => type.type.name)
              };
              // Metemos el objeto dentro del array
              this.pokemons.push(pokemonObject);
            })
        });
      })
  }
};
</script>
