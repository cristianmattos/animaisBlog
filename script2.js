// function x() {
//   document.body.classList.toggle("test");
// }

// function teclado(e) {
//   if (e.key === "t") {
//     x();
//   }
// }
// window.addEventListener("keydown", teclado);

// const faq = document.querySelector(".faq");

// const faqTitulo = document.querySelector(".faq .titulo");
// const animais = document.querySelector(".animais .titulo");

// faq.appendChild(animais)

// faq.insertBefore(animais, faqTitulo);










// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const menuClone= menu.cloneNode(true)
const copy = document.querySelector('.copy');

copy.appendChild(menuClone)



// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const dts = faq.children[1].children[0]
console.log(dts)


// Selecione o DD referente ao primeiro DT
const proximoDD = dts.nextElementSibling;
console.log(proximoDD)



// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

  faq.innerHTML = animais.innerHTML
  



