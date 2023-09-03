const form = document.querySelector("form");
const submit = document.querySelector(".container form .submit");

function enviar(){
    form.submit();
}

submit.addEventListener('click', () => {
    enviar();
})

document.addEventListener('keypress', (event) => {
    (event.key == "Enter")?enviar():"";
})