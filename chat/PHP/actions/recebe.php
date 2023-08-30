<?php

require_once('./conexao.php');

$nome = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$msg = filter_input(INPUT_GET, 'msg', FILTER_SANITIZE_SPECIAL_CHARS);

$sql = "INSERT INTO 'chat' ('nome', 'msg') VALUES ($nome, $msg)";