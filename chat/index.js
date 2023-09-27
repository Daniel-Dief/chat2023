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
sessionStorage.setItem('theme', 'light');


chk.addEventListener('change', () => {
    if (sessionStorage.getItem('theme') == 'light') {
        sessionStorage.setItem('theme', 'dark')
        document.body.classList.toggle('dark');
    } else {
        sessionStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
    }
})

form.addEventListener('submit', () => {
    sessionStorage.setItem('user', input.value);
    if(input.value == 'Miguel' || input.value == 'miguel'){
        sessionStorage.setItem('perfil', 'miguel');
    }
    if(input.value == 'indo ali'){
        sessionStorage.setItem('perfil', 'welove');
    }
})

function fotoPerfil(foto) {
    sessionStorage.setItem('perfil', foto);
}

img1.addEventListener('click', () => {
    fotoPerfil("cartoon");
    img1.style.opacity = 1;
    img2.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img4.style.opacity = 0.5;
    img5.style.opacity = 0.5;
    img6.style.opacity = 0.5;
    img7.style.opacity = 0.5;
    img8.style.opacity = 0.5;
})

img2.addEventListener('click', () => {
    fotoPerfil("chorao");
    img2.style.opacity = 1;
    img1.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img4.style.opacity = 0.5;
    img5.style.opacity = 0.5;
    img6.style.opacity = 0.5;
    img7.style.opacity = 0.5;
    img8.style.opacity = 0.5;
})

img3.addEventListener('click', () => {
    fotoPerfil("fake");
    img3.style.opacity = 1;
    img2.style.opacity = 0.5;
    img1.style.opacity = 0.5;
    img4.style.opacity = 0.5;
    img5.style.opacity = 0.5;
    img6.style.opacity = 0.5;
    img7.style.opacity = 0.5;
    img8.style.opacity = 0.5;
})

img4.addEventListener('click', () => {
    fotoPerfil("musculoso");
    img4.style.opacity = 1;
    img2.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img1.style.opacity = 0.5;
    img5.style.opacity = 0.5;
    img6.style.opacity = 0.5;
    img7.style.opacity = 0.5;
    img8.style.opacity = 0.5;
})

img5.addEventListener('click', () => {
    fotoPerfil("oclin");
    img5.style.opacity = 1;
    img2.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img4.style.opacity = 0.5;
    img1.style.opacity = 0.5;
    img6.style.opacity = 0.5;
    img7.style.opacity = 0.5;
    img8.style.opacity = 0.5;
})

img6.addEventListener('click', () => {
    fotoPerfil("pao");
    img6.style.opacity = 1;
    img2.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img4.style.opacity = 0.5;
    img5.style.opacity = 0.5;
    img1.style.opacity = 0.5;
    img7.style.opacity = 0.5;
    img8.style.opacity = 0.5;
})

img7.addEventListener('click', () => {
    fotoPerfil("capuz");
    img7.style.opacity = 1;
    img2.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img4.style.opacity = 0.5;
    img5.style.opacity = 0.5;
    img6.style.opacity = 0.5;
    img1.style.opacity = 0.5;
    img8.style.opacity = 0.5;
})

img8.addEventListener('click', () => {
    fotoPerfil("samurai");
    img8.style.opacity = 1;
    img2.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img4.style.opacity = 0.5;
    img5.style.opacity = 0.5;
    img6.style.opacity = 0.5;
    img7.style.opacity = 0.5;
    img1.style.opacity = 0.5;
})