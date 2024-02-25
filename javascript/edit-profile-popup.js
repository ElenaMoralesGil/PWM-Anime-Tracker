function loadPage(pageName, element) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;
        })
        .catch(error => console.error('Error fetching header:', error));
}


document.addEventListener("DOMContentLoaded", function() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const closeEditProfileBtn = document.querySelector('.edit-profile__header .fa-times');
    const editProfileForm = document.getElementById('editProfileForm');

    // Function to show the edit profile form popup
    function showEditProfilePopup() {
        loadPage('../../html/edit-profile.html', 'editProfileForm');
        editProfileForm.style.display = 'block';

    }

    // Function to hide the edit profile form popup
    function hideEditProfilePopup() {
        editProfileForm.style.display = 'none';
    }

    // Add event listener to the Edit Profile button
    editProfileBtn.addEventListener('click', showEditProfilePopup);

    // Add event listener to the Close button in the edit profile form
    closeEditProfileBtn.addEventListener('click', hideEditProfilePopup);
});
