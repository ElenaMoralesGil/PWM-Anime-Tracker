function loadPage(pageName, element) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
            // Reattach event listener for the Edit Profile button
            const editProfileBtn = document.getElementById('editProfileBtn');
            editProfileBtn.addEventListener('click', showEditProfilePopup);

            // Add event listener to the Close button in the edit profile form
            const closeEditProfileBtn = document.querySelector('.edit-profile__header .fa-times');
            closeEditProfileBtn.addEventListener('click', hideEditProfilePopup);
        })
        .catch(error => console.error('Error fetching header:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage('../html/top-header-login.html', 'header');
    loadPage('../html/bottom-footer.html', 'footer');
    loadPage('../html/profile/profile-table.html', 'table');
    loadPage('../html/profile/profile-nav.html', 'profile-nav');
    loadPage('../html/profile/profile-info.html', 'profile-info');
});

function showEditProfilePopup() {
    const editProfileForm = document.getElementById('editProfileForm');
    loadPage('../html/edit-profile.html', 'editProfileForm');
    editProfileForm.style.display = 'block';
}

function hideEditProfilePopup() {
    const editProfileForm = document.getElementById('editProfileForm');
    editProfileForm.style.display = 'none';
}
