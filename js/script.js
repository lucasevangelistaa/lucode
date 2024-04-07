// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o elemento que abre o modal
var openModal = document.getElementById("openModal");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no elemento, abre o modal
openModal.onclick = function () {
    modal.style.display = "Flex";
    modal.style.justifyContent = "Center";
    modal.style.alignItems = "Center";

}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha-o
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
