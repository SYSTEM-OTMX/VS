/*FUNCION PARA OCULTAR/MOSTRAR SELECTOR DE CAPAS Y ZOOOM*/
function divshow() {
  var divSel = document.getElementsByClassName("leaflet-control-layers");
  for (var l = 0; l < divSel.length; l++) {
    if (divSel[l].style.visibility === "hidden") {
      divSel[l].style.visibility = "visible";
    } else {
      divSel[l].style.visibility = "hidden";
    }
  }
};

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".menu");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  divshow();
});
