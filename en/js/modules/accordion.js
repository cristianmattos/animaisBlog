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

export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
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
