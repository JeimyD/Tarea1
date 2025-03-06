function changeContent(sectionId) {
console.log(sectionId)
    // Oculta todas las secciones
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Muestra la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}

// Mostrar la sección principal al cargar la página
window.onload = function() {
    changeContent('main');
};