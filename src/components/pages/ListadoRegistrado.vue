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
import headerLogueado from "../shared/HeaderLogueado.vue";
import footerPrincipal from "../shared/Footer.vue";

export default {
  name: 'ListadoRegistrado',
  components: {
    headerLogueado,
    footerPrincipal
  },
  data() {
    return {
      pokemons: []
    };
  },
  mounted() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(response => {
        const results = response.data.results;
        results.forEach(pokemon => {
          axios.get(pokemon.url)
            .then(response => {
              const pokemonData = response.data;
              const pokemonObject = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                types: pokemonData.types.map(type => type.type.name)
              };
              this.pokemons.push(pokemonObject);
            })
            .catch(error => {
              console.error('Error al obtener datos de Pokemon:', error);
            });
        });
      })
      .catch(error => {
        console.error('Error al obtener lista de Pokémon:', error);
      });
  }
};
</script>