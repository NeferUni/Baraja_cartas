document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    if(username == "admin" && password == "1234") window.location.href = 'main.html';
    else alert("Datos incorrectos");
    
});