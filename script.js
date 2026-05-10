// script.js

// Captura o formulário
const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio real

    // Pega os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação simples
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de formato de e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    form.reset();
});

// Botão de alternar tema
const botaoTema = document.createElement("button");
botaoTema.textContent = "Tema Escuro"; // começa oferecendo o escuro
botaoTema.style.margin = "20px";
document.body.insertBefore(botaoTema, document.body.firstChild);

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Atualiza o texto do botão conforme o tema ativo
    if (document.body.classList.contains("dark-theme")) {
        botaoTema.textContent = "Tema Claro";
    } else {
        botaoTema.textContent = "Tema Escuro";
    }
});