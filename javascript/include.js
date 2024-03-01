function loadById(pageName, element) {
    return fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}

function loadByClass(pageName, className) {
    return fetch(pageName)
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

// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))