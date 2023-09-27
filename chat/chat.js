const form = document.querySelector("form");
const container = document.querySelector(".container");
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");
const user = document.querySelector("input[name='user']");
const perfil = document.querySelector("input[name='perfil']");

if (sessionStorage.getItem('perfil') == null) {
    sessionStorage.setItem('perfil', 'default');
}
input.focus();

if (sessionStorage.getItem('theme') == 'dark') {
    document.body.classList.toggle('dark');
    container.classList.toggle('dark');
} else {
    document.body.classList.remove('dark');
    container.classList.remove('dark');
}

submit.addEventListener('click', () => {
    enviar();
})

form.addEventListener("submit", (form) => {
    form.preventDefault();
    enviar();
})

form.addEventListener("submit", (form) => {
    if (input.value == 'clear') {
        window.location.href = './PHP/actions/deletar.php';
    }
})

function enviar() {
    let env_form = new FormData();
    env_form.append('msg', input.value);
    env_form.append('user', sessionStorage.getItem('user'));
    env_form.append('perfil', sessionStorage.getItem('perfil'));

    fetch('./PHP/actions/enviar.php', {
        method: "POST",
        body: env_form
    }).then((res) => {
        if (!res.ok) {
            alert("erro no envio");
        } else {
            input.value = "";
        }
    })
}