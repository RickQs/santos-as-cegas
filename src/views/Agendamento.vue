<template>
    <h1>Agendamento</h1>
    <h2>Selecione a data e horário.</h2>

    <section>
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Terças-feiras
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <div class="d-flex justify-content-evenly flex-wrap">
                            <router-link v-for="date in dates[0].tuesday" :key="date.id" to="views/cadastro" class="btn btn-light border-success">
                                <span>
                                    <strong>{{ date.date }}</strong>
                                </span>
                                <br />
                                <span>{{ date.hour }}</span>
                            </router-link>
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
                        <div class="d-flex justify-content-evenly flex-wrap">
                            <router-link v-for="date in dates[0].wednesday" :key="date.id" to="views/cadastro" class="btn btn-light border-success">
                                <span>
                                    <strong>{{ date.date }}</strong>
                                </span>
                                <br />
                                <span>{{ date.hour }}</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import dates from '@/dates.json'

    export default {
        data() {
            return {
                dates
            }
        }
    }
</script>

<style scoped>

</style>
