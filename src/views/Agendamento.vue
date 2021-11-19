<template>
    <h1>Agendamento</h1>
    <h2>Selecione a data e horário.</h2>
    <h3>Terças-feiras</h3>
    <div class="area">
        <router-link to="views/cadastro" class="card"></router-link>
        <router-link to="views/cadastro" class="card"></router-link>
        <router-link to="views/cadastro" class="card"></router-link>
        <router-link to="views/cadastro" class="card"></router-link>
    </div>
    <h3>Quartas-feiras</h3>
    <div class="area">
        <router-link to="views/cadastro" class="card"></router-link>
        <router-link to="views/cadastro" class="card"></router-link>
        <router-link to="views/cadastro" class="card"></router-link>
        <router-link to="views/cadastro" class="card"></router-link>
    </div>
</template>

<style scoped>
    .area {
        display: flex;
        justify-content: center;
        gap: 5px;
    }
    .card {
        width: 200px;
        height: 200px;
        background-color: purple;
    }
</style>