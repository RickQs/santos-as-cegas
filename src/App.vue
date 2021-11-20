<template>
  <main class="container mt-3">
    <button @click="goBack" class="btn btn-secondary">Voltar</button>
    <router-view/>
  </main>
</template>

<script>
  export default {
      methods: {
          goBack() {
              window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
          }
      }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>