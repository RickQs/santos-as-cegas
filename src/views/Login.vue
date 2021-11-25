<template>
    <div class="row mt-3">
        <div class="col-12 col-md-12 col-lg-6">
            <h2>Login</h2>
            <h3>Preencha com suas informações.</h3>
            <p>O sinal de <span style="color: #AA2222"><strong>*</strong></span> indica que o preenchimento do campo é obrigatório.</p>
        </div>
    </div>
    
    <form @submit="checkLoginform" action="/termo-consentimento">
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
                    <label for="loginEmail" class="form-label">Email</label>
                    <input ref="email" v-model="email" type="email" class="form-control border-success" id="loginEmail" tabindex="1" aria-describedby="emailHelp">
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="loginPassword" class="form-label">Senha</label>
                    <input ref="senha" v-model="password" type="password" class="form-control border-success" id="loginPassword" tabindex="2" aria-describedby="emailHelp">
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12 col-lg-6">
                    <button class="btn btn-success w-100 mb-3" role="button" tabindex="3" aria-disabled="false">
                        Entrar
                    </button>
                    <div class="text-center">
                        <router-link to="views/cadastro" class="link-secondary text-decoration-none" tabindex="4">
                            Não tenho conta
                        </router-link>
                    </div>
                </div>
            </div>
        </form>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            email: null,
            password: null
        }
    },
    mounted() {
        this.$refs.email.focus()
    },
    methods: {
        checkLoginform(e) {
            if (this.email && this.password) {
                return true
            }

            this.errors = []

            if (!this.email) {
                this.errors.push('Email')
            }
            if (!this.password) {
                this.errors.push('Senha')
            }

            const input = this.errors[0].toLowerCase()
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
