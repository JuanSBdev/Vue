<script setup>
import Certificados from "@/components/Certificados.vue";
</script>
<template>
  <div class="about d-flex">
  <p>
  Soy un Desarrollador front-end en busqueda constante de aprendizaje.
    En este momento me encuentro perfeccionando mis conocimientos en el framework de JavaScript VUE.
  En este momento  ACTIVO en la busqueda de un empleo que se adapte para trabajar REMOTO ya sea part o full-time.
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

</style>
