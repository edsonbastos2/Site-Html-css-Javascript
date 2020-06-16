export default function initFetchBiticoin() {

}

fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(biticoin => {
    const btc = document.querySelector('.btc')
    const btcSell = (100 / biticoin.BRL.sell).toFixed(4)
    btc.innerText = btcSell
  }).catch(erro => {
    console.log(erro)
  })