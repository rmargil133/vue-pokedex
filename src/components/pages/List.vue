<template>
  <headerPrincipal/>
  <main>
    <router-link to="id"><h1>Listado</h1></router-link>
  </main>
  <footerPrincipal/>
</template>

<script>
import headerPrincipal from "../shared/Header.vue"
import footerPrincipal from "../shared/Footer.vue" 
export default {
  name: 'List',
  components: {
    headerPrincipal,
    footerPrincipal
  }
}
</script>
