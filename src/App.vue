<template>
  <main class="container my-3">
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
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;800&display=swap');

  * {
    font-family: 'Open Sans', Verdana, Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: 'Montserrat', Calibri, sans-serif;
  }
</style>