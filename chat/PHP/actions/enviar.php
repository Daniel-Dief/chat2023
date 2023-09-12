<?php

require_once('../includes/conexao.php');

$nome = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$perfil = filter_input(INPUT_GET, 'perfil', FILTER_SANITIZE_SPECIAL_CHARS);
$msg = filter_input(INPUT_GET, 'msg', FILTER_SANITIZE_SPECIAL_CHARS);
$datahora = date("Y-m-d H:m:s");

if(!empty($msg) && !empty($nome)){
    $sql = "INSERT INTO `chat` (`nome`, `perfil`, `msg`, `data`) VALUES ('$nome', '$perfil', '$msg', '$datahora')";
    $conexao->query($sql);
}

header("Location: ../../chat.php?user=$nome");