<template>
    <h1>Agendamento</h1>
    <h2>Selecione a data e horário.</h2>

    <section>
        <div class="accordion" id="accordionPanelsStayOpen">
            <div v-for="(date, weekday, i) in dates" :key="i" class="accordion-item">
                <h2 class="accordion-header" :id="`panelsStayOpen-heading${capitalizeString(weekday)}`">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#panelsStayOpen-collapse${capitalizeString(weekday)}`" aria-expanded="true" :aria-controls="`panelsStayOpen-collapse${capitalizeString(weekday)}`">
                        {{ weekdays[i] }}
                    </button>
                </h2>
                <div :id="`panelsStayOpen-collapse${capitalizeString(weekday)}`" class="accordion-collapse collapse show" :aria-labelledby="`panelsStayOpen-heading${capitalizeString(weekday)}`">
                    <div class="accordion-body">
                        <div class="d-flex justify-content-evenly flex-wrap gap-3">
                            <router-link v-for="items in date" :key="items.id" to="views/cadastro" class="date-card d-flex flex-column justify-content-center btn btn-light border-success">
                                <span>
                                    <strong>{{ items.date }}</strong>
                                </span>
                                <br />
                                <span>{{ items.hour }}</span>
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
            dates,
            weekdays: ['Terças-feiras', 'Quartas-feiras']
        }
    },
    methods: {
        capitalizeString(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    }
}
</script>

<style scoped>
    .date-card {
        width: 20%;
        height: 20vh;
    }
</style>
