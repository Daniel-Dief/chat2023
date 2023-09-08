const main = document.querySelector("main");

async function getMsgs(){
    json = await fetch('./PHP/actions/receber.php').then((data) =>{
        return data.json();
    });
    json.forEach(line => {

    });
}

/*
outros 👇

<div class='caixa_msg'>
	<div class='rotulo'>
		<p class='nome-user'>User</p>
		<p>2023/08/06 22:26:00</p>
	</div>
	<div class='mensagem'>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam deserunt vero, officiis ipsum esse, laborum quidem nobis consectetur repellendus vel, quaerat aut sint odio sapiente neque soluta! Ratione, voluptatem quod.
	</div>
</div>

meu 👇

<div class='caixa_msg me'>
	<div class='rotulo'>
		<p class='nome-user'>User</p>
		<p>2023/08/06 22:26:00</p>
        <a href='./PHP/actions/deletar_msg.php?id='${id}'><img src='./images/lixo.png' alt='apagar'></a>
	</div>
	<div class='mensagem'>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam deserunt vero, officiis ipsum esse, laborum quidem nobis consectetur repellendus vel, quaerat aut sint odio sapiente neque soluta! Ratione, voluptatem quod.
	</div>
</div>
*/