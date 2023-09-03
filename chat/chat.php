<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="chat.css">
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
			<?php
			require('./PHP/actions/receber.php');
			?>
		</main>
		<form action="./PHP/actions/enviar.php" method="get">
			<input type="hidden" name="user" value="<?php echo $user; ?>">
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
</body>

</html>