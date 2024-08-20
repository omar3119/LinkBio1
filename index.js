let $itemsClases = document.querySelector(".items_clases");

function activeClases(clase1,clase2,clase3,clase4) {
  let itemClase = document.querySelector(`.clase${clase1}`);
  itemClase.classList.toggle("hidden");
document.querySelector(`.clase${clase2}`).classList.add("hidden");
document.querySelector(`.clase${clase3}`).classList.add("hidden");
document.querySelector(`.clase${clase4}`).classList.add("hidden");


}

$itemsClases.addEventListener("click", (e) => {
  if (e.target.closest(".item_clase1")) {
    activeClases("1","2","3","4");
  } else if (e.target.closest(".item_clase2")) {
    activeClases("2","1","3","4");

  } else if (e.target.closest(".item_clase3")) {
    activeClases("3","1","2","4");

  } else if (e.target.closest(".item_clase4")) {
    activeClases("4","1","2","3");

  }
});
