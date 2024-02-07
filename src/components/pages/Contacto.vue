<template>
  <headerPrincipal/>
  <main class="contacto">
    <img class="contacto__fondo" src="../../assets/Pokemons.png">
    <form id="formulario" class="contacto__formulario">
      <h1>Contáctanos</h1>
      <div class="contacto__formulario__contenedor">
        <input id="nombre" class="contacto__formulario__contenedor__nombre" type="text" placeholder="NOMBRE"> 
        <input id="email" class="contacto__formulario__contenedor__email" type="email" placeholder="CORREO ELECTRONICO">
      </div>
      <input id="asunto" class="contacto__formulario__asunto" type="text" placeholder="ASUNTO">
      <textarea id="mensaje" class="contacto__formulario__mensaje" placeholder="Escribe un mensaje.."></textarea>
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

//Selectores y Listeners
document.addEventListener("DOMContentLoaded", () => {

//Obejto

const emailOBJ = {
  nombre:"",
  email:"",
  asunto:"",
  mensaje:"",
} 


const email = document.querySelector("#email")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#formulario")

function validarEmail(email){
    regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    resultado = regex.test(email)
    return resultado
  }
})
</script>
