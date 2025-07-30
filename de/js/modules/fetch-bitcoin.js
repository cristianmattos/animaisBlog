export default function initFetchBitcoin() {
  const span = document.querySelector(".btc-preco");

  async function fethBtc(linkBTC) {
    try {
      const url = await fetch(linkBTC);
      const btc = await url.json();
      span.innerText = (100 / btc.BRL.buy).toFixed(5);
    } catch (erro) {
      console.log(erro);
    }
  }

  fethBtc("https://blockchain.info/ticker");
}
