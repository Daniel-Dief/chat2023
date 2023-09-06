<?php

require_once('../includes/conexao.php');

$nome = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_SPECIAL_CHARS);
$msg = filter_input(INPUT_GET, 'msg', FILTER_SANITIZE_SPECIAL_CHARS);

if(!empty($msg) && !empty($nome)){
    $sql = "INSERT INTO `chat` (`nome`, `msg`) VALUES ('$nome', '$msg')";
    $conexao->query($sql);
}


header("Location: ../../chat.php?user=$nome");