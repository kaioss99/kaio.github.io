document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validação simples
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
        // Aqui você poderia adicionar lógica para enviar a mensagem para um servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Função para alternar tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Adicionando evento para alternar tema
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
