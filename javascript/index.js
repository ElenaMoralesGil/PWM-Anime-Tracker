function loadPage(pageName, element) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}

function loadRowImages(pageName, className) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            let elements = document.getElementsByClassName(className);
            for (let i = 0, length = elements.length; i < length; i++) {
                elements[i].innerHTML = html;
            }
        })
        .catch(error => console.error('Error fetching header:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage('list-name-image.html', 'newly-added-row');
    loadPage('list-name-image.html', 'our-recommendations-row');
    loadPage('list-name-image.html', 'most-liked-row');
    loadPage('top-header.html', 'index-header');
    loadPage('bottom-footer.html', 'index-footer');
    loadPage('name-image.html', 'index-main-content-hero-image');
    loadPage('search-bar.html', 'index-search-bar');
    loadRowImages('name-image.html', 'row-name-image');
});