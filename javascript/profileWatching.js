function loadPage(pageName, element) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}

document.addEventListener("DOMContentLoaded", function() {

    loadPage('../html/top-header-login.html', 'header');
    loadPage('../html/bottom-footer.html', 'footer');
    loadPage('../html/profile/profile-nav.html', 'profile-nav');
    loadPage('../html/profile/profile-info.html', 'profile-info');


});