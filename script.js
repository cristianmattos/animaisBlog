function initTabNav() {
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
initTabNav();

// metodo 1
// const acordionDT = document.querySelectorAll(".js-accordion dt");
// const acordionDD = document.querySelectorAll(".js-accordion dd");

// acordionDD[0].classList.add("ativo");

// function mostrarAcordion(indexDT) {
//   acordionDD[indexDT].classList.toggle("ativo");
// }

// acordionDT.forEach((dt, indexDT) => {
//   dt.addEventListener("click", () => {
//     mostrarAcordion(indexDT);
//   });
// });



function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.toggle(activeClass);
    accordionList[0].nextElementSibling.classList.toggle(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

const sections = document.querySelectorAll("[data-anime='scroll']");

function initAnimacaoScroll() {
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animarScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animarScroll();

    window.addEventListener("scroll", animarScroll);
  }
}

initAnimacaoScroll();
