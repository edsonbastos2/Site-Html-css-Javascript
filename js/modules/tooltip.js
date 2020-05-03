export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');


// Adicionando evento em cada tooltip selecionada
tooltips.forEach(item => {
  item.addEventListener('mouseover', onMouseOver)
})

// Função callback 
function onMouseOver(event) {
  const toolTipBox = criarToolptipBox(this);
  onMouseMove.toolTipBox = toolTipBox;
  this.addEventListener('mousemove', onMouseMove)
  onMouseLeave.toolTipBox = toolTipBox;
  onMouseLeave.element = this
  this.addEventListener('mouseleave', onMouseLeave);
}

// Objeto para chamar o metodo handleEvent
// para ser passado como parametro para o addEventListener
const onMouseLeave = {
  handleEvent() {
    this.toolTipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
  }
}

// Objeto para fazer tooltip seguir o mouse
const onMouseMove = {
  handleEvent(event) {
    this.toolTipBox.style.top = event.pageY + 20 + 'px';
    this.toolTipBox.style.left = event.pageX + 20 + 'px';
  }
}

// Função para criar a tooltip
function criarToolptipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}