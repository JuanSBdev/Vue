<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>
       Front-end developer Jr.
    </h2>
    <h4>24 años</h4>
    <h4>Córdoba, Argentina.</h4>
    <a  target="_blank" class="linked " href="https://www.linkedin.com/in/jlsb/">
      <img class="in" src="https://masempresas.cea.es/wp-content/uploads/2018/11/LINKEDIN.png" alt="">
    </a>
    <a target="_blank" class="linked" href="https://github.com/JuanSBdev">
      <img class="in2" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="">
    </a>

  </div>
</template>

<style scoped>
.in{
  margin-top: 2%;
  width: 10%;
}
.in:hover{
  width: 11%;
  margin-top: 1%;
}
.in2{
  margin-top: 2%;
  width: 8%;
}.in2:hover{
  width: 9%;
}
.linked {
  text-decoration: none;
  margin-top: 22%;
}
.linked:hover{
  background-color: transparent;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
