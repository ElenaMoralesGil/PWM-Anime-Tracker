
document.addEventListener("DOMContentLoaded", function() {
    loadById('../templates/top-header-login.html', 'header');
    loadById('../templates/bottom-footer.html', 'footer');
    loadById('../templates/profile-nav.html', 'profile-nav');
    loadProfileInfo()
    loadTableRows(5)


});
function loadProfileInfo() {
    fetch('../templates/profile-info.html')
        .then(response => response.text())
        .then(html => {
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = html.trim();

            const editProfileBtn = tempContainer.querySelector('#editProfileBtn');
            if (editProfileBtn) {
                editProfileBtn.addEventListener('click', openEditProfilePopup);
            } else {
                console.error('Edit profile button not found in profile info.');
            }

            const profileInfoContainer = document.getElementById('profile-info');

            // user image
            const userImageElement = tempContainer.querySelector('.user-profile__image');
            userImageElement.src =  "../../resources/images/image.png"

            // user name
            const userNameElement = tempContainer.querySelector('.user-profile__name');
            userNameElement.textContent = "UserName";

            // user description
            const userDescriptionElement = tempContainer.querySelector('.user-profile__description');
            userDescriptionElement.textContent =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
                "Duis aute irure dolor in reprehenderit";
            const profileInfoFragment = document.createDocumentFragment();
            profileInfoFragment.appendChild(tempContainer.firstChild);
            profileInfoContainer.appendChild(profileInfoFragment);
        })
        .catch(error => console.error('Error fetching profile info:', error));
}


function loadTableRows(rowCount) {
    fetch('../templates/profile-table.html')
        .then(response => response.text())
        .then(tableHtml => {
            const tempTableContainer = document.createElement('div');
            tempTableContainer.innerHTML = tableHtml.trim();
            const positionsContainer = tempTableContainer.querySelector('.positions');
            if (positionsContainer) {
                fetch('../templates/table-row-progress.html')
                    .then(response => response.text())
                    .then(rowHtml => {
                        const fragment = document.createDocumentFragment(); // Create a document fragment
                        for (let i = 0; i < rowCount; i++) {
                            const tempRowContainer = document.createElement('div');
                            tempRowContainer.innerHTML = rowHtml.trim();
                            const clonedRowContent = tempRowContainer.querySelector('.position-content').cloneNode(true);
                            fragment.appendChild(clonedRowContent);
                        }

                        positionsContainer.appendChild(fragment);
                        const profileTableContainer = document.getElementById('table');
                        profileTableContainer.innerHTML = tempTableContainer.innerHTML;

                        // event listeners for plus and minus buttons
                        document.querySelectorAll('.progress').forEach(function(progress) {
                            const minusBtn = progress.querySelector('#minusBtn');
                            const plusBtn = progress.querySelector('#plusBtn');
                            const counter = progress.querySelector('#counter');
                            const maxCount = 10;

                            function updateCounterText(count) {
                                counter.textContent = count + '/' + maxCount;
                            }

                            // Initial counter text
                            updateCounterText(0);

                            minusBtn.addEventListener('click', function() {
                                let count = parseInt(counter.textContent.split('/')[0]);
                                if (count > 0) {
                                    count--;
                                    updateCounterText(count);
                                }
                            });

                            plusBtn.addEventListener('click', function() {
                                let count = parseInt(counter.textContent.split('/')[0]);
                                if (count < maxCount) {
                                    count++;
                                    updateCounterText(count);
                                    if (count === maxCount) {
                                        loadAnimeCompletedPopup();
                                    }
                                }
                            });
                        });
                    })
                    .catch(error => console.error('Error fetching table row HTML:', error));
            } else {
                console.error('Positions container not found in the fetched table HTML.');
            }
        })
        .catch(error => console.error('Error fetching table HTML:', error));
}
async function openEditProfilePopup() {
    document.getElementById('editProfilePopup').style.display = 'block';
    await loadById('../templates/edit-profile.html', 'editProfilePopup');
    document.getElementById('closeBtn').addEventListener('click', closeEditProfilePopup);
}


// Function to close sign in popup
function closeEditProfilePopup() {
    document.getElementById('editProfilePopup').style.display = 'none';
}
function loadAnimeCompletedPopup() {
    const animeCompletedPopup = document.getElementById('animeCompletedPopup');
    if (!animeCompletedPopup) {
        console.error('animeCompletedPopup element not found.');
        return;
    }

    animeCompletedPopup.style.display = 'flex';

    loadById('../../html/templates/averagePopup.html', 'animeCompletedPopup')
        .then(() => {
            const textElement = animeCompletedPopup.querySelector('.average-popup__text');
            if (textElement) {
                textElement.textContent = "Do you want to move this anime to the Completed list?";
            } else {
                console.error('Text element not found in animeCompletedPopup popup.');
            }

            // Add event listeners to accept and decline buttons
            const acceptBtn = document.getElementById('accept');
            const declineBtn = document.getElementById('decline');
            if (acceptBtn && declineBtn) {
                acceptBtn.addEventListener('click', acceptCompleted);
                declineBtn.addEventListener('click', declineCompleted);
            } else {
                console.error('Accept or Decline buttons not found in animeCompletedPopup popup.');
            }
        })
        .catch(error => console.error('Error loading animeCompletedPopup popup:', error));
}


function acceptCompleted() {
    document.getElementById('animeCompletedPopup').style.display = 'none';
}

function declineCompleted() {
    document.getElementById('animeCompletedPopup').style.display = 'none';
}