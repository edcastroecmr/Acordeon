const pegarSetaLi = document.querySelectorAll(".item-lista");

pegarSetaLi.forEach((item) => {
    item.addEventListener("click", () => {
        // Verifica se o item clicado já está aberto
        const isOpen = item.classList.contains("seta-aberta");

        // Primeiro, esconde todos os textos e fecha todas as setas
        const todosTextos = document.querySelectorAll(".texto");
        todosTextos.forEach((texto) => {
            texto.classList.remove("mostrar");
        });

        pegarSetaLi.forEach((li) => {
            li.classList.remove("seta-aberta");
        });

        // Se o item não estava aberto, exibe o texto e abre a seta correspondente
        if (!isOpen) {
            const textoAssociado = item.querySelector(".texto");
            if (textoAssociado) {
                textoAssociado.classList.add("mostrar");
            }
            item.classList.add("seta-aberta");
        }
    });
});
