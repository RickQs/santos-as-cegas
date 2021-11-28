<template>
    <div class="row my-3">
        <div class="col-12 col-md-12 col-lg-12">
            <h2>Consentimento de Participação</h2>
        </div>
    </div>

    <section>
        <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
                <p>
                    Este documento faz parte da documentação do projeto <strong>“Santos às Cegas”</strong> e tem o objetivo de apontar e firmar os entendimentos e concordâncias relativas as condicionantes dos trajetos que ocorrerão na ciclovia da Orla de Santos.
                </p>
                <div class="card border-success mb-3">
                    <div class="card-body">
                        <strong>A concordância digital firma a veracidade das informações prestadas por mim, vontade própria e consentimento de estar de acordo com as informações prestadas no projeto.</strong>
                    </div>
                </div>
                <p>
                    Caso você tenha alguma resposta <strong>"SIM"</strong> no primeiro questionário (Prontidão para Atividade Física - 1 a 8) a sua participação estará condicionada a apresentação de um atestado médico no dia do seu trajeto. Nas três questões finais (9, 10 e 11), caso você responda <strong>"NÃO"</strong> está opção inviabiliza infelizmente sua participação.
                </p>
                <p>    
                    Tem dúvidas? Escreva para santosascegas@gmail.com
                </p>

                <!-- Button trigger modal -->
                <button type="button" class="w-100 btn btn-success" data-bs-toggle="modal" :data-bs-target="`#staticBackdrop${questions[0].id}`">
                    Responder questionário
                </button>

                <!-- Modal -->
                <div v-for="(question, i) in questions" :key="question.id" class="modal" :id="`staticBackdrop${question.id}`" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="`staticBackdropLabel${question.id}`" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" :id="`staticBackdropLabel${question.id}`">
                                    Questão {{ i + 1 }}
                                </h5>
                                <button @click="clearAnswersList" type="button" class="btn-close" data-bs-dismiss="modal" tabindex="1" aria-label="Close"></button>
                            </div>
                        <div class="modal-body">
                            {{ question.question }}
                        </div>
                            <div class="modal-footer d-flex">
                                <button v-show="i > 0" type="button" class="me-auto btn btn-light" :data-bs-target="previousModal(question.id)" tabindex="2" data-bs-toggle="modal">Anterior</button>
                                <button @click="appendAnswer(i, 'no')" type="button" class="btn btn-secondary" :data-bs-target="nextModal(i, question.id)" tabindex="3" data-bs-toggle="modal">{{ question.answers.no }}</button>
                                <button @click="appendAnswer(i, 'yes')" type="button" class="btn btn-secondary" :data-bs-target="nextModal(i, question.id)" tabindex="4" data-bs-toggle="modal">{{ question.answers.yes }}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Submit -->
                <div class="modal" id="staticBackdropSubmit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropSubmitLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 v-if="arrayContains(answersList.slice(0,8), 'yes') || arrayContains(answersList.slice(8), 'no')" class="modal-title" id="staticBackdropSubmitLabel">
                                    Atenção
                                </h5>
                                <h5 v-else class="modal-title" id="staticBackdropSubmitLabel">
                                    Deseja terminar?
                                </h5>
                                <button @click="clearAnswersList" type="button" class="btn-close" data-bs-dismiss="modal" tabindex="1" aria-label="Close"></button>
                            </div>
                            <div v-if="arrayContains(answersList.slice(8), 'no')" class="modal-body">
                                <p>Ao responder <strong>"NÃO"</strong> em pelo menos uma das últimas 3 questões (9 a 11), você infelizmente não pode participar.</p>
                            </div>
                            <div v-else-if="arrayContains(answersList.slice(0,8), 'yes')" class="modal-body">
                                <p>Ao responder <strong>"SIM"</strong> em pelo menos uma das questões de Prontidão para Atividade Física (1 a 8), é necessário apresentar atestado médico no dia do passeio.</p>
                                <div class="form-check">
                                    <input @click="toggleCheck" type="checkbox" class="form-check-input border-success" id="checkBtn" tabindex="2">
                                    <label class="form-check-label" for="checkBtn">Declaro que apresentarei atestado médico possibilitando atividades físicas aeróbicas.</label>
                                </div>
                            </div>
                            <div v-if="arrayContains(answersList.slice(8), 'no')" class="modal-footer d-flex">
                                <button type="button" class="me-auto btn btn-light" :data-bs-target="previousModal(questions.length)" tabindex="2" data-bs-toggle="modal">Voltar</button>
                                <button type="button" class="btn btn-success" data-bs-dismiss="modal" tabindex="3">Entendido</button>
                            </div>
                            <div v-else-if="arrayContains(answersList.slice(0,8), 'yes')" class="modal-footer d-flex">
                                <button type="button" class="me-auto btn btn-light" :data-bs-target="previousModal(questions.length)" tabindex="2" data-bs-toggle="modal">Voltar</button>
                                <button @click="clearAnswersList" type="button" class="btn btn-light" tabindex="3" data-bs-dismiss="modal">Cancelar</button>
                                <button v-if="!isChecked" @click="callToast" type="button" class="btn btn-success" tabindex="4" data-bs-dismiss="modal" disabled>Enviar</button>
                                <button v-else @click="callToast" type="button" class="btn btn-success" tabindex="4" data-bs-dismiss="modal">Enviar</button>
                            </div>
                            <div v-else class="modal-footer d-flex">
                                <button type="button" class="me-auto btn btn-light" :data-bs-target="previousModal(questions.length)" tabindex="2" data-bs-toggle="modal">Voltar</button>
                                <button @click="clearAnswersList" type="button" class="btn btn-light" tabindex="3" data-bs-dismiss="modal">Cancelar</button>
                                <button @click="callToast" type="button" class="btn btn-success" tabindex="4" data-bs-dismiss="modal">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div aria-live="polite" aria-atomic="true" class="position-fixed top-0 end-0 p-3">
            <div ref="liveToast" class="toast align-items-center text-white bg-success border-0" role="status" aria-live="polite" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        Agendamento marcado com sucesso.
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import questions from '@/questions.json'

export default {
    data() {
        return {
            questions,
            answersList: [],
            isChecked: false
        }
    },
    methods: {
        appendAnswer(index, answer) {
            if (!this.answersList[index]) this.answersList.push(answer)
            else this.answersList[index] = answer
        },
        clearAnswersList() {
            this.answersList = []
        },
        previousModal(questionId) {
            return `#staticBackdrop${questionId - 1}`
        },
        nextModal(index, questionId) {
            return index !== (this.questions.length - 1) ? `#staticBackdrop${questionId + 1}` : '#staticBackdropSubmit'
        },
        toggleCheck() {
            this.isChecked = !this.isChecked
        },
        arrayContains(arr, target) {
            return arr.includes(target)
        },
        async callToast() {
            const toast = new bootstrap.Toast(this.$refs.liveToast)
            toast.show()

            await new Promise(r => setTimeout(r, 3000))
            this.$router.push('agendamento')
        }
    }
}
</script>