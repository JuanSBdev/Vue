<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { computed } from '@vue/runtime-core'
import {onMounted} from 'vue'

</script>


<template>
  <main>
  <h1>¿Buscando front-end developer Jr?</h1>

  <h2  > Tecnologías que manejo:</h2>
    <TheWelcome  class="the" />

  </main>
  
</template>


<style scoped>
h1 {
  font-size: 2rem;
  display: flex;
  justify-content: center;
    transition: all 1s ease;

}
h2 {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
      transition: all 2s ease;

}
.ml3 {
  font-weight: 900;
  font-size: 3.5em;
}

</style>
