<template>
    <div class="row mt-3">
        <div class="col-12 col-md-12 col-lg-6">
            <h2>Cadastrar</h2>
            <h3>Preencha com suas informações.</h3>
            <p>O sinal de <span style="color: #AA2222"><strong>*</strong></span> indica que o preenchimento do campo é obrigatório.</p>
        </div>
    </div>

    <section>
        <form @submit="checkRegisterForm" action="/termo-consentimento">
            <div v-if="errors.length" class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <strong>Por favor, corrija o(s) seguinte(s) erro(s):</strong>
                    <ul>
                        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
                    </ul>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="registerName" class="form-label">Nome</label>
                    <input ref="nome" v-model="name" type="text" minlength="3" class="form-control border-success" id="registerName" tabindex="1" aria-describedby="nameHelp">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="registerBirth" class="form-label">Data de nascimento</label><small> (dd/mm/yyyy)</small>
                    <input ref="data de nascimento" v-model="birth" v-mask="'##/##/####'" type="tel" class="form-control border-success" id="registerBirth" tabindex="2" aria-describedby="ageHelp">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="registerPhone" class="form-label">Telefone</label><small> ((00) 00000-0000)</small>
                    <input ref="telefone" v-model="phone" v-mask="['(##) ####-####', '(##) #####-####']" type="tel" class="form-control border-success" id="registerPhone" tabindex="3" aria-describedby="phoneHelp">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="registerEmail" class="form-label">Email</label>
                    <input ref="email" v-model="email" type="email" class="form-control border-success" id="registerEmail" tabindex="4" aria-describedby="emailHelp">
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="registerPassword" class="form-label">Senha</label>
                    <input ref="senha" v-model="senha" type="password" class="form-control border-success" id="registerPassword" tabindex="5" aria-describedby="emailHelp">
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12 col-lg-6">
                    <button class="btn btn-success w-100 mb-3" role="button" tabindex="6" aria-disabled="false">
                        Continuar
                    </button>
                    <div class="text-center">
                        <router-link to="views/login" class="link-secondary text-decoration-none" tabindex="7">
                            Já tenho conta
                        </router-link>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            name: null,
            birth: null,
            phone: null,
            email: null,
            senha: null
        }
    },
    mounted() {
        this.$refs.nome.focus()
    },
    methods: {
        checkRegisterForm(e) {
            if (this.name && this.birth && this.birth.length === 10 && this.phone && this.phone.length >= 14 && this.email && this.senha) {
                return true
            }

            this.errors = []

            if (!this.name) {
                this.errors.push('Nome')
            }
            if (!this.birth || this.birth.length < 10) {
                this.errors.push('Data de nascimento')
                this.birth = ''
            }
            if (!this.phone || this.phone.length < 14) {
                this.errors.push('Telefone')
                this.phone = ''
            }
            if (!this.email) {
                this.errors.push('Email')
            }
            if (!this.password) {
                this.errors.push('Senha')
            }

            let input = this.errors[0].toLowerCase()
            this.$refs[input].focus()

            e.preventDefault()
        }
    }
}
</script>

<style scoped>
    .form-label::after {
        content: "*";
        color: #AA2222;
        padding-left: 0.25rem;
        font-weight: bold;
    }
</style>
