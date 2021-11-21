<template>
    <h1>Consentimento de Participação</h1>

    <section>
        <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
                <p>
                    Este documento faz parte da documentação do projeto “Santos às Cegas” e tem o objetivo de apontar e firmar os entendimentos e concordâncias relativas as condicionantes dos trajetos que ocorrerão na ciclovia da Orla de Santos.
                </p>
                <p>
                    A CONCORDÂNCIA DIGITAL FIRMA A VERACIDADE DAS INFORMAÇÕES PRESTADAS POR MIM, VONTADE PRÓPRIA E CONSENTIMENTO DE ESTAR DE ACORDO COM AS INFORMAÇÕES PRESTADAS NO PROJETO.
                </p>
                <p>
                    Caso você tenha alguma resposta SIM no primeiro questionário (Prontidão para Atividade Física - 1 a 8) a sua participação estará condicionada a apresentação de um atestado médico no dia do seu trajeto. Nas três questões finais (9, 10 e 11), caso você responda "NÃO" está opção inviabiliza infelizmente sua participação.
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
                                    <strong>Questão {{ question.id + 1 }}</strong>
                                </h5>
                                <button @click="clearAnswersList" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div class="modal-body">
                            {{ question.question }}
                        </div>
                            <div class="modal-footer d-flex">
                                <button v-show="question.id > 0" type="button" class="me-auto btn btn-light" :data-bs-target="previousModal(question.id)" data-bs-toggle="modal">Anterior</button>
                                <button @click="appendAnswer(i, 'no')" ref="btnYes" type="button" class="btn btn-secondary" :data-bs-target="nextModal(i, question.id)" data-bs-toggle="modal">{{ question.answers.no }}</button>
                                <button @click="appendAnswer(i, 'yes')" ref="btnNo" type="button" class="btn btn-secondary" :data-bs-target="nextModal(i, question.id)" data-bs-toggle="modal">{{ question.answers.yes }}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Submit -->
                <div class="modal" id="staticBackdropSubmit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropSubmitLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropSubmitLabel">
                                    <strong>Deseja enviar?</strong>
                                </h5>
                                <button @click="clearAnswersList" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-footer d-flex">
                                <button type="button" class="me-auto btn btn-light" :data-bs-target="previousModal(questions.length)" data-bs-toggle="modal">Voltar à última questão</button>
                                <button @click="clearAnswersList" type="button" class="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Enviar</button>
                            </div>
                        </div>
                    </div>
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
            answersList: []
        }
    },
    methods: {
        appendAnswer(index, answer) {
            if (!this.answersList[index]) this.answersList.push(answer)
            else this.answersList[index] = answer
            console.log(this.answersList)
        },
        clearAnswersList() {
            this.answersList = []
        },
        previousModal(questionId) {
            return `#staticBackdrop${questionId - 1}`
        },
        nextModal(index, questionId) {
            return index !== (this.questions.length - 1) ? `#staticBackdrop${questionId + 1}` : '#staticBackdropSubmit'
        }
    }
}
</script>