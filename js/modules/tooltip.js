export default function initTooltip() {









  
}

const tooltips = document.querySelectorAll("[data-tooltip]");

tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouserOver);
});

function onMouserOver(e) {
  const tooltipBox = criarTooltiBox(this);

  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener("mousemove", onMouseMove);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener("mouseleave", onMouseLeave);
}

const onMouseMove = {
  handleEvent(e) {
    this.tooltipBox.style.top = e.pageY + 10 + "px";
    this.tooltipBox.style.left = e.pageX + 10 + "px";
  },
};

const onMouseLeave = {
  handleEvent() {
    this.tooltipBox.remove();
    this.element.removeEventListener("mouseleave", onMouseLeave);
    this.element.removeEventListener("mousemove", onMouseMove);
  }
};

function criarTooltiBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  console.log(tooltipBox);
  return tooltipBox;
}
