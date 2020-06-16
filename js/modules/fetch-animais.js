import initAnimaNumero from './animaNumero.js';
export default function initFetcAnimais() {

  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    const numeroGrid = document.querySelector('.numeros-grid');

    animaisJson.forEach(animal => {
      const divAnimal = createAnimais(animal);
      numeroGrid.appendChild(divAnimal)
    });
    initAnimaNumero();
  }
  function createAnimais(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `
        <h3>${animal.specie}</h3>
        <span data-numero>${animal.total}</span>`;

    return div;
  }
  fetchAnimais('./animais.json');

}
