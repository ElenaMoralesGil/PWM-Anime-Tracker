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

// Function to open sign in popup
async function openSignInPopup() {
    document.getElementById('signInPopup').style.display = 'block';
    await loadById('../signing-pages/signin.html', 'signInPopup');
    document.getElementById('closeSignInBtn').addEventListener('click', closeSignInPopup);
}

// Function to close sign in popup
function closeSignInPopup() {
    document.getElementById('signInPopup').style.display = 'none';
}

// Function to open login popup
async function openLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
    await loadById('../signing-pages/login.html', 'loginPopup');
    document.getElementById('closeLoginBtn').addEventListener('click', closeLoginPopup);
}

// Function to close login popup
function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}
function loadTopHeader() {
    return loadById('../templates/top-header.html', 'header').then(() => {
        // Add event listeners
        document.getElementById('signInButton').addEventListener('click', openSignInPopup);
        document.getElementById('signUpButton').addEventListener('click', openLoginPopup);
    }).catch(error => {
        console.error('Error loading top header:', error);
    });
}
// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))