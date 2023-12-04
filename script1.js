// const animaisLista = document.querySelector('.animais-lista');
// function animaisEvent(e){
//   console.log(e.target)
// }
// animaisLista.addEventListener('click', animaisEvent)

// function x(){
//   document.body.classList.toggle('test')
// }

// function teclado(e){
//   if(e.key === 'f'){
//     x()
//   }

// }

// window.addEventListener('keydown', teclado )

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const links = document.querySelectorAll('a');
// const links = document.querySelectorAll('a[href^="#"]'); //corrigido

function ativar(e) {
  e.preventDefault();

  links.forEach((y) => {
    y.classList.remove("ativo");
  });

  this.classList.add("ativo");
  console.log(this);
}

links.forEach((link) => {
  link.addEventListener("click", ativar);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
////
const body = document.querySelector("body");

function x(e) {
  console.log(e.target);
}

body.addEventListener("click", x);

//// outra forma ////
const body = document.querySelectorAll("body *");

function x(e) {
  console.log(e.target);
}

body.forEach((b) => {
  b.addEventListener("click", x);
});
////////////////

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const body = document.querySelector('body');

// function y(e){
//   e.target.remove()
// }

// body.addEventListener('click', y);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// function x(){
//   document.body.classList.toggle('test')
// }

// function teclado(e){
//   if(e.key === 't'){
//     x()
//   }

// }

// window.addEventListener('keydown', teclado )
