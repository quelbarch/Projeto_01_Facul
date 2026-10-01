document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('mensagem-formulario');
            msg.textContent = 'Cadastro enviado com sucesso! Agradecemos sua participação.';
            msg.style.color = 'green';
            msg.style.marginTop = '1rem';
            form.reset();
        });
    }
});
