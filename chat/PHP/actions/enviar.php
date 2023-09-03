<?php

require_once('../includes/conexao.php');

$nome = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$msg = filter_input(INPUT_GET, 'msg', FILTER_SANITIZE_SPECIAL_CHARS);

echo $nome;
echo $msg;