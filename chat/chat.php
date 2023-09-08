<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="chat.css">
    <link rel="icon" href="./images/icon.png" type="image/x-icon">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
	<title>Whatsapp premium</title>
</head>

<?php
$user = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
?>

<body>
	<div class="container">
		<header>
			<h1>Whatsapp premium</h1>
		</header>
		<main>
		<div class='caixa_msg'>
				<div class='rotulo'>
					<p class='nome-user'>User</p>
					<p>2023/08/06 22:26:00</p>
				</div>
				<div class='mensagem'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam deserunt vero, officiis ipsum esse, laborum quidem nobis consectetur repellendus vel, quaerat aut sint odio sapiente neque soluta! Ratione, voluptatem quod.
				</div>
			</div>
		</main>
		<form action="./PHP/actions/enviar.php" method="get">
			<input type="hidden" name="user" value="?">
			<input type="hidden" name="perfil" value="?">
			<input type="hidden" name="datetime" value="">
			<div class="input">
				<input type="text" name="msg" placeholder="Escreva sua mensagem...">
				<img src="./images/clip.png" alt="anexar">
			</div>
			<div class="submit">
				<img src="./images/paper-plane.png" alt="enviar">
			</div>
		</form>
	</div>
	<script src="chat.js"></script>
	<script src="receber.js"></script>
</body>
</html>