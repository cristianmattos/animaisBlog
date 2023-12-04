// // Verifique a distância da primeira imagem
// // em relação ao topo da página
// const img = document.querySelector("img").offsetTop;

// // Retorne a soma da largura de todas as imagens

// function somaImg() {
//   const imgLargura = document.querySelectorAll("img");
//   let soma = 0;

//   imgLargura.forEach((imags) => {
//     // soma = soma + imags.offsetWidth;
//     soma += imags.offsetWidth;
//   });
//   console.log(soma);
// }

// window.onload = function () {
//   somaImg();
// };

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// const link = document.querySelectorAll("a");

// link.forEach((links) => {
//   const h = links.offsetHeight;
//   const w = links.offsetWidth;

//   if (h >= 48 && w >= 48) {
//     console.log(links, "passou");
//   } else console.log("nao passou", links);
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu
const navegador = window.matchMedia("(max-width: 720px)");
const menu = document.querySelector(".menu");
// console.log(menu)

if (navegador.matches) {
  menu.classList.add("menu-mobile");
  console.log("adicionado classe menu-mobile", menu);
}
