// Aguarda o carregamento completo do HTML antes de executar o JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona os elementos do formulário
    const formulario = document.getElementById("formulario-contato");
    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoMensagem = document.getElementById("mensagem");
    const mensagemRetorno = document.getElementById("mensagem-retorno");

    // Seleciona o botão de alternância de tema
    const botaoTema = document.getElementById("botao-tema");

    // Função para validar o formato do e-mail
    function emailValido(email) {
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return padraoEmail.test(email);
    }

    // Evento de envio do formulário
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // Remove espaços em branco no início e no fim dos campos
        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const mensagem = campoMensagem.value.trim();

        // Limpa mensagens anteriores
        mensagemRetorno.textContent = "";
        mensagemRetorno.className = "";

        // Validação dos campos obrigatórios
        if (nome === "" || email === "" || mensagem === "") {
            mensagemRetorno.textContent = "Por favor, preencha todos os campos antes de enviar.";
            mensagemRetorno.classList.add("erro");
            return;
        }

        // Validação do formato do e-mail
        if (!emailValido(email)) {
            mensagemRetorno.textContent = "Por favor, informe um e-mail válido.";
            mensagemRetorno.classList.add("erro");
            return;
        }

        // Simulação de envio bem-sucedido
        mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
        mensagemRetorno.classList.add("sucesso");

        // Limpa os campos do formulário após o envio
        formulario.reset();
    });

    // Evento para alternar entre tema claro e tema escuro
    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");

        // Altera o texto do botão conforme o tema ativo
        if (document.body.classList.contains("tema-escuro")) {
            botaoTema.textContent = "Tema claro";
        } else {
            botaoTema.textContent = "Tema escuro";
        }
    });

});