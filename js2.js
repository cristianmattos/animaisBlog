const listaAnimais = document.querySelector(".animais-lista");

// const height = listaAnimais.offsetTop;
// console.log(height)

const rect = listaAnimais.getBoundingClientRect();
console.log(rect.top);

const mudaCorBody = () => {
  const body = document.body;
  body.style.background = "#f252";
};

if (rect.top < 0) {
  console.log("passou");
  mudaCorBody();
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.scrollY
);
