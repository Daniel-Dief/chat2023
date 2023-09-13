const form = document.querySelector("form");
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");
const user = document.querySelector("input[name='user']");
const perfil = document.querySelector("input[name='perfil']");
const noti = new Audio('../audio/notificacao.mp3');

if(sessionStorage.getItem('perfil') == null){
    sessionStorage.setItem('perfil', 'default');
}
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
    (event.key == "¨")?window.location.href = "./PHP/actions/deletar.php":"";
})

form.addEventListener("submit", (form) =>{
    form.preventDefault();
    enviar();
})

function enviar(){
    let env_form = new FormData();
    env_form.append('msg', input.value);
    env_form.append('user', sessionStorage.getItem('user'));
    env_form.append('perfil', sessionStorage.getItem('perfil'));

    fetch('./PHP/actions/enviar.php', {
        method:"POST",
        body:env_form
    }).then((res) => {
        console.log(env_form);
        if(!res.ok){
            alert("erro no envio");
        } else {
            input.value = "";
        }
    })
}

/*
window.addEventListener('focus', function(){
    document.title = "Whatsapp premium"
})

window.addEventListener('blur', function(){
    audio.play(notificacao.mp3);
})*/