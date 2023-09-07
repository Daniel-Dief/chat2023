const form = document.getElementById("form");
const input = document.querySelector("input[name='user']");

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

form.addEventListener('submit', (event)=>{
    sessionStorage.setItem('nome', input.value);
    console.log(sessionStorage.getItem('nome'));
})

