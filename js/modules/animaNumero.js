export default function initAnimaNumero() {
  const numeros = document.querySelectorAll('[data-numero]')
  function animaNumero() {
    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const time = setInterval(() => {
        start = start + incremento;
        numero.innerText = start
        if (start > total) {
          numero.innerText = total
          clearInterval(time)
        }
      }, 50 * Math.random())
    })

  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumero();
    }
  }
  const observeTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation)

  observer.observe(observeTarget, { attributes: true })

}
