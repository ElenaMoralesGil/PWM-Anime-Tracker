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
function showSignInPopup() {
    loadPage('signin.html', 'signin-overlay');
    document.getElementById('signin-overlay').style.display = 'flex';
}

// Function to hide the sign-in popup
function hideSignInPopup() {
    document.getElementById('signin-overlay').style.display = 'none';
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

document.addEventListener("DOMContentLoaded", async function() {
    loadPage('top-header.html', 'index-header');
    loadPage('bottom-footer.html', 'index-footer');
    loadPage('name-image.html', 'index-main-content-hero-image');
    loadPage('search-bar.html', 'index-search-bar');
    loadPage('list-name-image.html', 'newly-added-row');
    loadPage('list-name-image.html', 'our-recommendations-row');
    loadPage('list-name-image.html', 'most-liked-row');
    await sleep(10)
    loadRowImages('name-image.html', 'row-name-image');
// Attach click event handlers to the sign-in and close buttons
    document.getElementById('signin-btn').addEventListener('click', showSignInPopup);
    document.getElementById('close-signin-btn').addEventListener('click', hideSignInPopup);


});

