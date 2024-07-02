// Selecciona el elemento del DOM que tiene la clase 'burger'
// Este es el icono del menú de hamburguesa
const burger = document.querySelector('.burger');

// Selecciona el elemento del DOM que tiene la clase 'nav-links'
// Este es el contenedor de la lista de enlaces de navegación
const nav = document.querySelector('.nav-links');

// Añade un 'event listener' al elemento 'burger' que escucha el evento 'click'
// Cada vez que se haga clic en el icono del menú de hamburguesa, se ejecutará la función proporcionada
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    }
});
}
//transition: transform 0.3s ease;
