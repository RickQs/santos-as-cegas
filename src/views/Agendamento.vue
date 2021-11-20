<template>
    <h1>Agendamento</h1>
    <h2>Selecione a data e horário.</h2>

    <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Terças-feiras
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                    <div class="d-flex justify-content-evenly">
                        <router-link v-for="(card, i) in cards.slice(0,2)" :key="i" to="views/cadastro" class="card btn btn-secondary"></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                    Quartas-feiras
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                    <div class="d-flex justify-content-evenly">
                        <router-link v-for="(card, i) in cards" :key="i" to="views/cadastro" class="card btn btn-secondary"></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [0,1,2,3]
        }
    }
}
</script>

<style scoped>
    .card {
        width: 15vw;
        height: 20vh;
        background-color: purple;
    }
</style>
