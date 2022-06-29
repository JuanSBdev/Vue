<script setup>
import Contacto from '@/components/historia.vue'

</script>

<template>
<div class="afuera d-flex row">
    <h1 class="col-8">
    ¿Te gustó mi perfil?
    </h1>
    <Contacto class="col-12"/>
</div>
</template>
<style scoped>
  .afuera{
      color: hsla(160, 100%, 37%, 1);
    border: 3px solid hsla(160, 100%, 37%, 1);
    border-radius: 1rem;
    align-items: center;
    align-content: center;
    justify-content: center;    
    padding-left: 12px;
 }

</style>