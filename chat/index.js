const chk = document.getElementById('chk');
const form = document.getElementById("form");
const input = document.querySelector("input[name='user']");

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

form.addEventListener('submit', ()=>{
    sessionStorage.setItem('user', input.value);
})

