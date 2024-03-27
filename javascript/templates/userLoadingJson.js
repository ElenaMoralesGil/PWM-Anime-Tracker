
const userData = [
    { username: "user1", password: "Password1" },
    { username: "user2", password: "Password2" },
];


function loginUser() {

    let username = document.querySelector('.container-form-input[name="username"]').value;
    let password = document.querySelector('.container-form-input[name="password"]').value;

    let user = userData.find(user =>
        user.username === username && user.password === password);

    if (user) {
        alert("Login successful! Welcome, " + username);
        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
