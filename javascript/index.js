function loadPage(pageName, element) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    // Llamada a la función loadPage con el nombre de la página a cargar
    loadPage('../html/top-header.html', 'header'); // Cambia el nombre y el elemento según corresponda
});