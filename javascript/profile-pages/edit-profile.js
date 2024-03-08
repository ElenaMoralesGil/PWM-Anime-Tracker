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

    // Function to load delete profile popup
    const deleteProfilePopup = document.getElementById('deleteProfilePopup');
    deleteProfilePopup.style.display = 'flex';
    if (!deleteProfilePopup) {
        console.error('Delete profile popup element not found.');
        return;
    }

    loadById('../../html/templates/averagePopup.html', 'deleteProfilePopup')
        .then(() => {
            // After loading popup content, set its text
            const textElement = deleteProfilePopup.querySelector('.average-popup__text');
            if (textElement) {
                textElement.textContent = "Are you sure you want to delete your profile?";
            } else {
                console.error('Text element not found in delete profile popup.');
            }

            // Add event listeners to accept and decline buttons
            const acceptBtn = document.getElementById('acceptDelete');
            const declineBtn = document.getElementById('declineDelete');
            if (acceptBtn && declineBtn) {
                acceptBtn.addEventListener('click', acceptDelete);
                declineBtn.addEventListener('click', declineDelete);
            } else {
                console.error('Accept or Decline buttons not found in delete profile popup.');
            }
        })
        .catch(error => console.error('Error loading delete profile popup:', error));
}


function acceptDelete() {
    document.getElementById('deleteProfilePopup').style.display = 'none';

}

function declineDelete() {
    document.getElementById('deleteProfilePopup').style.display = 'none';
}