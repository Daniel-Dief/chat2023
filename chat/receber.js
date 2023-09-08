const main = document.querySelector("main");

function generateDiv(id, nome, perfil, data, msg){
	div = "";
	div += `<div class='caixa_msg${(sessionStorage.getItem('user') == nome)?" me'":"'"}>`;
	div += `<div class='rotulo'>`;
	div += `<img src="./images/perfis/${perfil}.png" class="img_perfil" alt="${perfil}">`;
	div += `<p class='nome-user'>${nome}</p>`;
	div += `<p>${data}</p>`;
	div += `${(sessionStorage.getItem('user') == nome)?`<a href='./PHP/actions/deletar_msg.php?id="${parseInt(id)}"'><img src='./images/lixo.png' alt='apagar'></a>`:""}`;
	div += `</div>`;
	div += `<div class='mensagem'>${msg}</div>`;
	return div;
}

async function getMsgs(){
	main.innerHTML = "";
    json = await fetch('./PHP/actions/receber.php').then((data) =>{
        return data.json();
    });
    json.forEach(line => {
		main.innerHTML += generateDiv(line.id, line.nome, line.perfil, line.datahora, line.msg);
    });
}

getMsgs();

setInterval(() =>{
	if(main.scrollTop == 0){
		getMsgs();
	}
}, 1000);