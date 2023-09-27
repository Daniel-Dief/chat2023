const form = document.querySelector("form");
const container = document.querySelector(".container");
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");
const user = document.querySelector("input[name='user']");
const perfil = document.querySelector("input[name='perfil']");

if(sessionStorage.getItem('perfil') == null){
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
    if(input.value == "backflip"){
        document.body.innerHTML += "<style>*{animation: 2s spin linear infinite;}@keyframes spin{from{transform: rotate(0deg);}to{transform: rotate(360deg);}}</style>";
    }
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