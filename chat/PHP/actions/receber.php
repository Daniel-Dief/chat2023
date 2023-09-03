<?php

require_once('./PHP/includes/conexao.php');

$sql = "SELECT nome, msg, datahora FROM `chat`";

$msgs = $conexao->query($sql);

foreach ($msgs as $msg) {
    echo $msg['nome'];
    echo $msg['msg'];
    echo $msg['datahora'];
    echo "<br>";
}