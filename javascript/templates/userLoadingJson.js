
const userData = [
    { username: "user1", password: "Password1" },
    { username: "user2", password: "Password2" },
];


async function loginUser() {

    let username = document.querySelector('.container-form-input[name="username"]').value;
    let password = document.querySelector('.container-form-input[name="password"]').value;

    let user = userData.find(user =>
        user.username === username && user.password === password);

    if (user) {
        alert("Login successful! Welcome, " + username);
        localStorage.setItem('isLoggedIn', true);
        try {
            await loadTopHeader();
        } catch (error) {
            console.error('Error loading top header:', error);
        }
        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
