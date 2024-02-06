<template>
  <headerPrincipal/>
  <main class="contacto">
    <img class="contacto__fondo" src="../../assets/Pokemons.png">
    <form class="contacto__formulario">
      <h1>Contáctanos</h1>
      <div class="contacto__formulario__contenedor">
        <input class="contacto__formulario__contenedor__nombre" type="text" placeholder="NOMBRE"> 
        <input class="contacto__formulario__contenedor__apellidos" type="text" placeholder="APELLIDOS">
      </div>
      <input class="contacto__formulario__email" type="email" placeholder="DIRECCION DE CORREO ELECTRONICO*">
      <textarea class="contacto__formulario__mensaje" placeholder="Escribe un mensaje.."></textarea>
      <button class="contacto__formulario__enviar">Enviar</button>
    </form>
  </main>
</template>

<script>
import headerPrincipal from "../shared/Header.vue" 
export default {
  name: 'Contacto',
  components: {
    headerPrincipal
  }
}
</script>
