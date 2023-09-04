<?php

require_once('./PHP/includes/conexao.php');

$sql = "SELECT nome, msg, datahora FROM `chat`";

$msgs = $conexao->query($sql);

foreach ($msgs as $msg) {
    if($msg['nome']==$user){$me = "me";}else{$me = "";};
    echo "<div class='caixa_msg " . $me . "'>";
    echo "<div class='rotulo'>";
    echo "<p>" . $msg['nome'] . "</p>";
    echo "<p>" . $msg['datahora'] . "</p>";
    echo "</div>";
    echo "<div class='mensagem'>" . $msg['msg'] . "</div>";
    echo "</div>";
}