function tocaSom(idElementoAudio) {
  const elem = document.querySelector(idElementoAudio);
  if (elem !== null && elem.localName === 'audio') {
    elem.play();
  } else {
    alert('Elemento não encontrado ou seletor inválido.');
  }
}

function animacaoBotao(tecla) {
  tecla.onkeydown = (evento) => {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }
  };
  tecla.onkeyup = () => {
    tecla.classList.remove('ativa');
  };
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas.forEach((tecla) => {
  const classe = tecla.classList[1];
  tecla.onclick = () => {
    tocaSom(`#som_${classe}`);
  };
  animacaoBotao(tecla);
});
