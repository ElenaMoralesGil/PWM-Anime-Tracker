function loadById(pageName, element) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}

function loadByClass(pageName, className) {
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

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

document.addEventListener("DOMContentLoaded", async function() {
    loadById('top-header.html', 'index-header');
    loadById('bottom-footer.html', 'index-footer');
    loadById('name-image.html', 'index-main-content-hero-image');
    loadById('search-bar.html', 'index-search-bar');
    loadById('list-name-image.html', 'newly-added-row');
    loadById('list-name-image.html', 'our-recommendations-row');
    loadById('list-name-image.html', 'most-liked-row');
    await sleep(10)
    loadByClass('name-image.html', 'row-name-image');
});