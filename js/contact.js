/**
 * Función que se ejecuta cuando el DOM ha sido completamente cargado.
 * Configura el manejo del envío del formulario de contacto.
 * @function setupContactForm
 */
function setupContactForm() {
    /** 
     * Almacena en una constante el formulario de contacto, obtenido por su id.
     * @constant {HTMLFormElement} contactForm - El formulario de contacto.
     */
    const contactForm = document.getElementById('contactForm');

    /**
     * Maneja el evento de envío del formulario.
     * Previene la recarga de la página y procesa los datos ingresados.
     * @param {Event} e - El evento de envío del formulario.
     */
    function handleSubmit(e) {
        e.preventDefault(); // Previene la recarga de la página.

        // Obtiene los valores del formulario.
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        /** 
         * Verifica si los campos 'name' y 'message' no están vacíos.
         * Si ambos campos tienen datos, muestra un mensaje de agradecimiento.
         * Si algún campo está vacío, solicita al usuario completar los campos.
         */
        if (name.trim() !== '' && message.trim() !== '') {
            alert(`¡Gracias por tu mensaje, ${name}!`); // Muestra un mensaje de agradecimiento con el nombre del usuario.
            contactForm.reset(); // Resetea el formulario después de enviarlo.
        } else {
            alert('Por favor, completa todos los campos.'); // Muestra un mensaje de error si algún campo está vacío.
        }
    }

    // Agrega el evento de envío al formulario.
    contactForm.addEventListener('submit', handleSubmit);
}

// Escucha el evento 'DOMContentLoaded' y llama a la función setupContactForm
document.addEventListener('DOMContentLoaded', setupContactForm);