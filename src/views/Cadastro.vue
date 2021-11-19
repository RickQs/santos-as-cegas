<template>
    <h1>Cadastro</h1>
    <h2>Preencha o formulário com suas informações.</h2>
    <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <router-link to="views/termo-consentimento">
            <button>Continuar</button>
        </router-link>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    button {
        width: 100%;
    }
</style>
