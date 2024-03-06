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
    if (document.getElementById('loginPopup').style.display === 'block') {
        closeLoginPopup();
    }
    document.getElementById('signInPopup').style.display = 'block';
    await loadById('../signing-pages/signin.html', 'signInPopup');
    document.getElementById('closeSignInBtn').addEventListener('click', closeSignInPopup);

    // Add event listener to the "Log in" link in the sign-in popup
    document.getElementById('loginLink').addEventListener('click', function(event) {
        event.preventDefault(); 
        openLoginPopup(); 
    });
}

// Function to close sign in popup
function closeSignInPopup() {
    document.getElementById('signInPopup').style.display = 'none';
}

// Function to open login popup
async function openLoginPopup() {

    if (document.getElementById('signInPopup').style.display === 'block') {
        closeSignInPopup();
    }
    document.getElementById('loginPopup').style.display = 'block';
    await loadById('../signing-pages/login.html', 'loginPopup');
    document.getElementById('closeLoginBtn').addEventListener('click', closeLoginPopup);

    document.getElementById('signinLink').addEventListener('click', function(event) {
        event.preventDefault();
        openSignInPopup();
    });
}

// Function to close login popup
function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}
async function loadTopHeader() {
    await loadById('../templates/top-header.html', 'header').then(() => {
        document.getElementById('signInButton').addEventListener('click', openSignInPopup);
        document.getElementById('signUpButton').addEventListener('click', openLoginPopup);
        
    }).catch(error => {
        console.error('Error loading top header:', error);
    });
}
