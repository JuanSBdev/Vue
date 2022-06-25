<template>
  <div class="about">
  <p>
  Soy un Desarrollador front-end en busqueda constante de aprendizaje.
    En este momento me encuentro perfeccionando mis conocimientos en el framework de JavaScript VUE.
  En este momento  ACTIVO en la busqueda de un empleo que se adapte para trabajar REMOTO ya sea part o full-time.
  </p>
  <h1>Cerificados</h1>
    <div class="certis row">
      <img class="img1" src="../img/629bfa10959e350024c1e932 (1).png" alt="">
      <img class="img2" src="../img/SARMIENTO BILIKYAN.CE-2022-00429571-UNC-DC_FL (1)_page-0001.jpg" alt="">
    </div>
  </div>
</template>

<style>
  .about {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
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
