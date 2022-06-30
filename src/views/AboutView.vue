<script setup>
import Certificados from "@/components/Certificados.vue";
</script>
<template>
  <div class="about d-flex">
  <p>
  Soy un Desarrollador front-end capacitado en Coderhouse y autodidacta. Mas especificamente desarrollo de paginas web, full responsive
  utilizando las ultimas tecnologías para ello (html5, css3, sass, bootstrap, bootstrapVue, vue3).

   En busqueda constante de aprendizaje.
    En este momento me encuentro perfeccionando mis conocimientos en el framework de JavaScript VUE.
    Aspiro a un trabajo el cual me permita el espacio para seguir formando y capacitandome.

  </p>
 </div>
</template>

<style>
  .about {
    min-height: 100vh;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    align-content: center;
  }
  .certis{
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
  img{
        padding: 1%;

  }
  .img1{
    width: 40%;
  }
  .img2{
    padding-top: 5%;
    width: 30%;
  }
    .img1:hover{
    width: 80%;
  }
    .img2:hover{
    width: 80%;
    position: initial;
  }
@media  screen and (max-width: 980px) {
  .about{
    justify-content: start;
    padding-top: 1rem;
  }
}
</style>
