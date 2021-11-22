<template>
    <div class="row my-3">
        <div class="col-12 col-md-12 col-lg-6">
            <h2>Agendamento</h2>
            <h3>Selecione a data e horário.</h3>
        </div>
    </div>

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
                        <div class="row row-cols-3 row-cols-md-6 row-cols-lg-6 justify-content-evenly gap-3">
                            <router-link v-for="item in date" :key="item.id" to="views/cadastro" class="date-card d-flex flex-column justify-content-center btn btn-light border-success">
                                <span>
                                    <strong>{{ item.date }}</strong>
                                </span>
                                <br />
                                <span>{{ item.hour }}</span>
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
        height: 8rem;
    }
</style>
