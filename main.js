function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas.forEach((tecla) => {
  const classe = tecla.classList[1];
  tecla.onclick = () => {
    tocaSom(`#som_${classe}`);
  };
});
