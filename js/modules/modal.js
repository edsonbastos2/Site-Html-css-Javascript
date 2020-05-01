export default function controlModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const container = document.querySelector('[data-modal="container"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"');

  if (botaoAbrir && botaoFechar && container) {
    function toggeModal(event) {
      event.preventDefault()
      container.classList.toggle('ativo')
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        toggeModal(event)
      }
    }

    botaoAbrir.addEventListener('click', toggeModal)
    botaoFechar.addEventListener('click', toggeModal)
    container.addEventListener('click', cliqueForaModal)
  }
}

