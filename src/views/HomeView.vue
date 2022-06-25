<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { computed } from '@vue/runtime-core'


</script>



<template>
  <main>
  <h1>¿Buscando front-end developer Jr?</h1>

  <h2> Tecnologías que manejo:</h2>
    <TheWelcome v-if="paso" class="the" />

  </main>
  
</template>
<script>
export default {
        data() {
            return {
                paso: false
            }
        },

        mounted() {
            setTimeout(() => this.paso = true, 1000)
            
        }
    }



</script>

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
.the{
  

}

</style>