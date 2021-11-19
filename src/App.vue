<template>
  <button @click="goBack">Voltar</button>
  <router-view/>
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
