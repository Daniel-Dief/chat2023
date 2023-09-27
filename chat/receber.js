const main = document.querySelector("main");
var msgsOld = [];
var msgsNow = [];
var msgsVerify;
var never;


function generateDiv(id, nome, perfil, data, msg) {
	div = "";
	div += `<div class='caixa_msg${(sessionStorage.getItem('user') == nome) ? " me'" : "'"}>`;
	div += `<div class='rotulo'>`;
	div += `<img src="./images/perfis/${perfil}.png" class="img_perfil" alt="${perfil}">`;
	div += `<p class='nome-user'>${nome}</p>`;
	div += `<p>${data}</p>`;
	div += `${(sessionStorage.getItem('user') == nome) ? `<a href='./PHP/actions/deletar_msg.php?id="${parseInt(id)}"'><img src='./images/lixo.png' alt='apagar'></a>` : ""}`;
	div += `</div>`;
	div += `<div class='mensagem'>${msg}</div>`;
	return div;
}

async function getMsgs() {
	msgsNow = [];
	never = false;
	json = await fetch('./PHP/actions/receber.php', { method: "POST" }).then((data) => {
		return data.json();
	});
	json.forEach(line => {
		if(line.msg == "backflip"){
			document.body.innerHTML += "<style>*{animation: 2s spin linear infinite;}@keyframes spin{from{transform: rotate(0deg);}to{transform: rotate(360deg);}}</style>";
		}
		if(line.msg == "never gonna give"){
			never = true;
		}
		msgsNow.push(generateDiv(line.id, line.nome, line.perfil, line.datahora, line.msg));
	});

	/*verificando se as arrays são iguais*/
	msgsVerify = true;
	if(msgsNow.length == msgsOld.length){
		for (let i=0;i<msgsNow.length;i++){
			if(msgsNow[i] != msgsOld[i]){
				msgsVerify = false;
				break;
			}
		}
	} else {
		msgsVerify = false
	}

	/*imprimindo as mensagens*/
	if(!msgsVerify){
		main.innerHTML = "";
		msgsNow.forEach(msg => {
			main.innerHTML += msg;
		});
	}

	if(never){
		clearInterval(intervalo);
		document.body.innerHTML = "<video autoplay><source src='./images/never.mp4' type='video/mp4'></video>";
		document.body.innerHTML += "<style>body{background-color: black;}</style>";
	}
}

getMsgs();

intervalo = setInterval(() => {
	if (main.scrollTop == 0) {
		getMsgs();
	}
}, 1000);