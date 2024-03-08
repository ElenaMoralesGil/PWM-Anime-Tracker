function updateProfilePicture() {
    const fileInput = document.getElementById('profileImage');
    const chosenImage = document.getElementById('chosenImage');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            chosenImage.src = e.target.result;
            chosenImage.style.display = 'block';
        }

        reader.readAsDataURL(file);
    }
}


function loadDeleteProfilePopup() {

    const deleteProfilePopup = document.getElementById('deleteProfilePopup');
    deleteProfilePopup.style.display = 'flex';
    if (!deleteProfilePopup) {
        console.error('Delete profile popup element not found.');
        return;
    }

    loadById('../../html/templates/averagePopup.html', 'deleteProfilePopup')
        .then(() => {
            const textElement = deleteProfilePopup.querySelector('.average-popup__text');
            if (textElement) {
                textElement.textContent = "Are you sure you want to delete your profile?";
            } else {
                console.error('Text element not found in delete profile popup.');
            }

            // Add event listeners to accept and decline buttons
            const acceptBtn = document.getElementById('accept');
            const declineBtn = document.getElementById('decline');
            if (acceptBtn && declineBtn) {
                acceptBtn.addEventListener('click', accept);
                declineBtn.addEventListener('click', decline);
            } else {
                console.error('Accept or Decline buttons not found in delete profile popup.');
            }
        })
        .catch(error => console.error('Error loading delete profile popup:', error));
}


function accept() {
    document.getElementById('deleteProfilePopup').style.display = 'none';
    window.location.href = '../../html/index-page/index.html';
}

function decline() {
    document.getElementById('deleteProfilePopup').style.display = 'none';

}