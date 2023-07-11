
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoPersonagem(personagem);

        personagem.classList.add('selecionado');

        modificandoPersonagemSelecionado(personagem);

        modificandoNome(personagem);

        modificandoDescricao(personagem);
    })
})

function modificandoDescricao(personagem) {
    const descricaoPersonagem = document.querySelector('#descricao-personagem');
    descricaoPersonagem.innerHTML = personagem.getAttribute('data-description');
}

function modificandoNome(personagem) {
    const nomePersonagem = document.querySelector('#nome-personagem');
    nomePersonagem.innerHTML = personagem.getAttribute('data-name');
}

function modificandoPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `../src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem(personagem) {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
