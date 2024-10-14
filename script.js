document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value || '';
    const pais = document.getElementById('pais').value;
    const comentarios = document.getElementById('comentarios').value;

    // Validação simples
    if (nome === '' || email === '' || senha === '') {
        alert('Por favor, preencha os campos Nome, Email e Senha.');
        return;
    }

    // Exibe os dados abaixo do formulário
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Dados do Formulário:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gênero:</strong> ${genero}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Comentários:</strong> ${comentarios}</p>
    `;

    // Modifica o título da página
    document.querySelector('h1').textContent = 'Formulário Enviado com Sucesso!';

    // Altera o estilo do formulário após validação
    document.querySelector('form').style.backgroundColor = '#d4edda';
    document.querySelector('form').style.border = '2px solid #155724';
});
