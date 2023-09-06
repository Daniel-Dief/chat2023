const form = document.querySelector("form");
const datetime_input = document.querySelector("form input[name='datetime']")
const submit = document.querySelector(".container form .submit");
const input = document.querySelector(".input input");

function enviar(){
    datetime_input.value = (new Date().toLocaleString('sv-SE').replace(',', ''));
    form.submit();
}

submit.addEventListener('click', () => {
    enviar();
})

document.addEventListener('keypress', (event) => {
    (event.key == "Enter")?enviar():"";
    (event.key == "&")?window.location.href = "./PHP/actions/deletar.php":"";
})

setInterval(() => {
    (input == document.activeElement)?"":location.reload();
}, 2000);