export default function initTabNav() {
  const animaisLista = document.querySelectorAll("[data-tab='menu'] li");
  const animalDescricao = document.querySelectorAll("[data-tab='content'] section");


 

  if (animaisLista.length && animalDescricao.length) {
    animalDescricao[0].classList.add("ativo");

    function addClass(index) {
      animalDescricao.forEach((section) => {
       section.classList.remove('ativo');
      });
      const direcao = animalDescricao[index].dataset.anime
      animalDescricao[index].classList.add('ativo', direcao);
    }
    animaisLista.forEach((itemAnimal, index) => {
      itemAnimal.addEventListener("click", () =>{
        addClass(index)
      } );
    });
  }
}