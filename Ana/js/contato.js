const toggleTheme = document.getElementById("toggleTheme");

const rootHtml = document.documentElement;

const accordionHeaders = document.querySelectorAll(".accordion-header");



//função para alternar o tema 
function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

} 

toggleTheme.addEventListener("click", changeTheme);
//fim da função mudar o tema

accordionHeaders.forEach( header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove ("active") :
        accordionItem.classList.add("active");
    })
})


    // Configuração do Typed.js
    document.addEventListener("DOMContentLoaded", function () {
        var typed = new Typed("#typed-text", {
            strings: ["Preparo", "Oportunidades", "Respeito"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
            startDelay: 500,
            loop: true
        });
    });

    /* enviar mensagem */

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messages = document.getElementById('messages');

        // Criar o elemento de mensagem enviada
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerHTML = `<p>${messageText}</p>`;

        // Adicionar a nova mensagem na caixa de mensagens
        messages.appendChild(messageElement);

        // Limpar o campo de entrada
        messageInput.value = '';

        // Rolagem automática para a última mensagem
        messages.scrollTop = messages.scrollHeight;
    }
}