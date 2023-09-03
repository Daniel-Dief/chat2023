<?php

require_once('../includes/conexao.php');

$nome = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$msg = filter_input(INPUT_GET, 'msg', FILTER_SANITIZE_SPECIAL_CHARS);
$datetime = filter_input(INPUT_GET, 'datetime', FILTER_SANITIZE_SPECIAL_CHARS);

$sql = "INSERT INTO `chat` (`nome`, `msg`, `datahora`) VALUES ('$nome', '$msg', '$datetime')";

$conexao->query($sql);

header('Location: ../../chat.php');