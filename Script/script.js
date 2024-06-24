// Selecciona el elemento del DOM que tiene la clase 'burger'
// Este es el icono del menú de hamburguesa
const burger = document.querySelector('.burger');

// Selecciona el elemento del DOM que tiene la clase 'nav-links'
// Este es el contenedor de la lista de enlaces de navegación
const nav = document.querySelector('.nav-links');

// Añade un 'event listener' al elemento 'burger' que escucha el evento 'click'
// Cada vez que se haga clic en el icono del menú de hamburguesa, se ejecutará la función proporcionada
burger.addEventListener('click', () => {
    // Utiliza el método 'toggle' de 'classList' para añadir o eliminar la clase 'nav-active'
    // Si la clase 'nav-active' no está presente en el elemento 'nav', 'toggle' la añadirá
    // Si la clase 'nav-active' ya está presente, 'toggle' la eliminará
    nav.classList.toggle('nav-active');
});
