const animaisLista = document.querySelectorAll(".js-tabmenu li");
const animalDescricao = document.querySelectorAll(".js-tabcontent section");

if (animaisLista.length && animalDescricao.length) {
  animalDescricao[0].classList.add("ativo");

  function addClass(e) {
    animalDescricao.forEach((item) => {
      item.classList.remove("ativo");
      if (item.id === e.target.id) item.classList.add("ativo");
    });
  }
  animaisLista.forEach((itemAnimal) => {
    itemAnimal.addEventListener("click", addClass);
  });
}
