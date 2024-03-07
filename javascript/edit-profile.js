function updateProfilePicture() {
    const fileInput = document.getElementById('profileImage');
    const chosenImage = document.getElementById('chosenImage');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            chosenImage.src = e.target.result;
            chosenImage.style.display = 'block'; // Show the image
        }

        reader.readAsDataURL(file);
    }
}


