<?php

require_once('../includes/conexao.php');

$nome = filter_input(INPUT_POST, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$perfil = filter_input(INPUT_POST, 'perfil', FILTER_SANITIZE_SPECIAL_CHARS);
$msg = filter_input(INPUT_POST, 'msg', FILTER_SANITIZE_SPECIAL_CHARS);
$datahora = date("Y-m-d H:m:s");

if(!empty($msg) && !empty($nome)){
    $sql = "INSERT INTO `chat` (`nome`, `perfil`, `msg`, `datahora`) VALUES ('$nome', '$perfil', '$msg', '$datahora')";
    $conexao->query($sql);
}

header("Location: ../../chat.php?user=$nome");