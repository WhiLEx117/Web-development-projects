var btnabrir = document.getElementById('btnab'),
     overlay = document.getElementById('overlay'),
     popup = document.getElementById('popup'),
     btncerrrapopup = document.getElementById('btn-cerrrar-popup');

btnabrir.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
})
btncerrrapopup.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
})
    
