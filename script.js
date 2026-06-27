 const input = document.getElementById('campo-pesquisa');
    const button = document.getElementById('botao-pesquisa');

    // Função para executar a pesquisa
    function executarPesquisa() {
        const termo = input.value.trim();
        if (termo) {
            alert("Você pesquisou por: " + termo);
        } 
        else {
            alert("Digite algo para pesquisar!");
        }
    }

    // Clique no botão
    button.addEventListener('click', executarPesquisa);

    // Pressionar Enter no campo de texto
    input.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            executarPesquisa();
        }
    });