function loadPage(pageName, element) {
    fetch(pageName)
        .then(response => response.text())
        .then(html => {
            document.getElementById(element).innerHTML = html;

        })
        .catch(error => console.error('Error fetching header:', error));
}


function showEditProfilePopup() {
    const editProfileForm = document.getElementById('editProfileForm');
    loadPage('../html/edit-profile.html', 'editProfileForm');
    editProfileForm.style.display = 'block';
}

function hideEditProfilePopup() {
    const editProfileForm = document.getElementById('editProfileForm');
    editProfileForm.style.display = 'none';
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
document.addEventListener("DOMContentLoaded", async function () {
    loadPage('../html/top-header-login.html', 'header');
    loadPage('../html/bottom-footer.html', 'footer');
    loadPage('../html/profile/profile-table.html', 'table');
    loadPage('../html/profile/profile-nav.html', 'profile-nav');
    loadPage('../html/profile/profile-info.html', 'profile-info');
    await sleep(10)
    const editProfileBtn = document.getElementById('editProfileBtn');
    editProfileBtn.addEventListener('click', showEditProfilePopup);

    const closeEditProfileBtn =  document.getElementById('closeEditBtn ');
    closeEditProfileBtn.addEventListener('click', hideEditProfilePopup);
});

