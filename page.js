// Registration
document.getElementById('registerBtn')?.addEventListener('click', () => {
    let username = document.getElementById('regUsername').value;
    let password = document.getElementById('regPassword').value;

    if(username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful!');
    } else {
        alert('Please fill in both fields.');
    }
});

// Login
document.getElementById('loginBtn')?.addEventListener('click', () => {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    let storedUser = localStorage.getItem('username');
    let storedPass = localStorage.getItem('password');

    if(username === storedUser && password === storedPass) {
        alert('Login successful!');
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'secure.html';
    } else {
        alert('Invalid credentials.');
    }
});

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
});
