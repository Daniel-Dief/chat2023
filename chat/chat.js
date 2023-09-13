const form = document.querySelector("form");
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");
const user = document.querySelector("input[name='user']");
const perfil = document.querySelector("input[name='perfil']");

user.value = sessionStorage.getItem('user')
perfil.value = (sessionStorage.perfil == null)?"default":sessionStorage.perfil;
input.focus();

if (sessionStorage.getItem('theme') == 'dark') {
    document.body.classList.toggle('dark');
} else {
    document.body.classList.remove('dark');
}

submit.addEventListener('click', () => {
    enviar();
})

document.addEventListener('keypress', (event) => {
    (event.key == "Enter")?enviar():"";
    (event.key == "¨")?window.location.href = "./PHP/actions/deletar.php":"";
})

function enviar(){
    form.submit();
}

/**  ADICIONAR A FUNÇÃO DE SOM QUANDO CHEGAR MENSAGEM
window.addEventListener('blur', function(){
    
})

*/

window.addEventListener('focus', function(){
    document.title = "Whatsapp premium"
})