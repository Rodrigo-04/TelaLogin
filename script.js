const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('main-login');

    if(mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        form.classList.add('light');
        return ;
    }
    
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

    form.classList.remove('light');
});

function logar() {
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "1234"){
        alert('acesso permitido');
    }
    else {
        alert('acesso negado');
    }
}