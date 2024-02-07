<template>
  <headerPrincipal/>
  <main>
    <h1>Pokemon</h1>
  </main>
  <footerPrincipal/>
</template>

<script>
import headerPrincipal from "../shared/Header.vue" 
import footerPrincipal from "../shared/Footer.vue"
export default {
  name: 'Pokemon',
  components: {
    headerPrincipal,
    footerPrincipal
  }
}
</script>
