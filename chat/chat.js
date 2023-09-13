const form = document.querySelector("form");
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");
const user = document.querySelector("input[name='user']");
const perfil = document.querySelector("input[name='perfil']");

user.value = sessionStorage.getItem('user')
perfil.value = (sessionStorage.perfil == null)?"default":sessionStorage.perfil;
input.focus();

submit.addEventListener('click', () => {
    enviar();
})

document.addEventListener('keypress', (event) => {
    (event.key == "Enter")?enviar():"";
    (event.key == "¨")?window.location.href = "./PHP/actions/deletar.php":"";
})