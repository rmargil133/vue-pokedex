<template>
  <header class="principal">
    <div class="principal__logo">
      <router-link to="/homeregistrado">
        <img class="principal__logo__pokeball" src="../../assets/Pokeball.png" alt="Pokeball">
        <img class="principal__logo__titulo" src="../../assets/Titulo.png" alt="titulo">
      </router-link>
    </div>
    <nav class="principal__menu">
      <ul>
        <li><router-link to="/listadoregistrado">Pokemons</router-link></li>
        <li><router-link to="/contactoregistrado">Contacto</router-link></li>
        <li><router-link to="/:pathMatch(.*)*">Página 404</router-link></li>
      </ul>
    </nav>
    <div class="principal__contenedor">
      <div class="principal__contenedor__buscador">
      <input type="search" placeholder="Buscar Pokémon..." class="principal__contenedor__buscador__input">
      <router-link to="id">
      <img src="../../assets/lupa.png" class="principal__contenedor__buscador__lupa">
      </router-link>
    </div>
      <img class="principal__contenedor__darkMode" src="../../assets/Dark-mode.png">
      <router-link to="/">
      <img class="principal__contenedor__login" src="../../assets/Squirtle.png" alt="user">
      </router-link>
    </div>
  </header>
</template>

<script>
export default{
  name:'headerLogueado'
}
</script>