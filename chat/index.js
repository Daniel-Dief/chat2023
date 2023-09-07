const chk = document.getElementById('chk');
const form = document.getElementById("form");
const input = document.querySelector("input[name='user']");
const img1 = document.getElementById("cartoon");
const img2 = document.getElementById("chorao");
const img3 = document.getElementById("fake");
const img4 = document.getElementById("musculoso");
const img5 = document.getElementById("oclin");
const img6 = document.getElementById("pao");
const img7 = document.getElementById("capuz");
const img8 = document.getElementById("samurai");


chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

form.addEventListener('submit', ()=>{
    sessionStorage.setItem('user', input.value);
})

function fotoPerfil(foto){
    sessionStorage.setItem('perfil', foto);
}

img1.addEventListener('click', () => {
    fotoPerfil("cartoon");
})

img2.addEventListener('click', () => {
    fotoPerfil("chorao");
})

img3.addEventListener('click', () => {
    fotoPerfil("fake");
})

img4.addEventListener('click', () => {
    fotoPerfil("musculoso");
})

img5.addEventListener('click', () => {
    fotoPerfil("oclin");
})

img6.addEventListener('click', () => {
    fotoPerfil("pao");
})

img7.addEventListener('click', () => {
    fotoPerfil("capuz");
})

img8.addEventListener('click', () => {
    fotoPerfil("samurai");
})