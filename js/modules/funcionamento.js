export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)


  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours()

  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;
  const hoararioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && hoararioAberto) {
    funcionamento.classList.add('aberto')
  }
}

/*
*** Função para coverter milisegundos em dias

const agora = new Date();
const promocao = new Date('December 24 2020 23:59');

function converterDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterDias(agora);
const diasFututro = converterDias(promocao);

const faltam = diasFututro - diasAgora;

console.log(Math.floor(faltam))*/