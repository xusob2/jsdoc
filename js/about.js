/**
 * Función que se ejecuta cuando el DOM ha sido completamente cargado.
 * Configura el carrusel de imágenes y agrega los event listeners necesarios.
 * @function setupCarousel
 */
function setupCarousel() {
    /** 
     * Un arreglo que contiene las rutas de las imágenes a mostrar.
     * @constant {Array<string>} images - Arreglo con las rutas de las imágenes.
     */
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];

    /** 
     * El índice actual que apunta a la imagen que se está mostrando.
     * Inicialmente, se establece en 0 (la primera imagen).
     * @let {number} currentIndex - Índice de la imagen actual.
     */
    let currentIndex = 0;

    /** 
     * Crea un nuevo elemento de imagen en el HTML.
     * @constant {HTMLImageElement} imageElement - Elemento de imagen creado dinámicamente.
     */
    const imageElement = document.createElement('img'); 

    // Asigna la fuente de la imagen (src) a la imagen actual según el índice.
    imageElement.src = images[currentIndex];

    // Añade la imagen creada al contenedor con la clase '.content' en el HTML.
    document.querySelector('.content').appendChild(imageElement);

    /**
     * Maneja el evento de clic en la imagen para cambiar la imagen mostrada.
     * Incrementa el índice y actualiza la imagen.
     * @function handleImageClick
     */
    function handleImageClick() {
        // Incrementa el índice actual, y asegura que vuelva al inicio si se llega al final del arreglo.
        currentIndex = (currentIndex + 1) % images.length;
        // Asigna la nueva imagen al elemento img en función del índice actualizado.
        imageElement.src = images[currentIndex];
    }

    // Añade el evento de clic a la imagen usando la función nombrada.
    imageElement.addEventListener('click', handleImageClick);
}

// Escucha el evento 'DOMContentLoaded' y llama a la función setupCarousel
document.addEventListener('DOMContentLoaded', setupCarousel);