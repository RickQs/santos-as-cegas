<template>
    <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
            <h1>Cadastrar</h1>
            <h2>Preencha com suas informações.</h2>
            <p>O sinal de <span style="color: #ff0000">*</span> indica que o preenchimento do campo é obrigatório.</p>
        </div>
    </div>

    <section>
        <form>
            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="exampleInputName" class="form-label">Nome</label>
                    <input type="text" class="form-control border-success" id="exampleInputName" aria-describedby="nameHelp">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="exampleInputAge" class="form-label">Idade</label>
                    <input type="date" min="2003-01-01" class="form-control border-success" id="exampleInputAge" aria-describedby="ageHelp">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="exampleInputPhone" class="form-label">Telefone</label>
                    <input type="tel" class="form-control border-success" id="exampleInputPhone" aria-describedby="phoneHelp">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12 col-md-12 col-lg-6">
                    <label for="exampleInputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control border-success" id="exampleInputEmail" aria-describedby="emailHelp">
                </div>
            </div>
            <div class="mb-5 row form-check">
                <div class="col-12 col-md-12 col-lg-6">
                    <input type="checkbox" class="form-check-input border-success" id="exampleCheck">
                    <label class="form-check-label" for="exampleCheck">Trazer atestado médico possibilitando atividades físicas aeróbicas.</label>
                </div>
            </div>

            <div class="mb-3 row">
                <div class="col-12 col-md-12 col-lg-6">
                    <router-link to="views/termo-consentimento">
                        <button class="btn btn-success w-100">Continuar</button>
                    </router-link>
                </div>
            </div>
        </form>
    </section>
</template>

<style scoped>
    .form-label::after {
        content: "*";
        color: #ff0000;
        padding-left: 0.25rem;
    }
</style>
