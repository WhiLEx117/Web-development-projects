const username = document.getElementById('user'),
      password = document.getElementById('pass'),
      login = document.getElementById('login');

login.addEventListener('click', (event)=>{
    if (username.value === "whil" && password.value === "123") {
        location.href ="/home.html"
        window.location.pathname= "/home.html";
    }
    else{
        alert('invalido');
    }
})