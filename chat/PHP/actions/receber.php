<?php

require_once('./PHP/includes/conexao.php');

$sql = "SELECT nome, msg, datahora FROM `chat`";

$msgs = $conexao->query($sql);

$array_msg = array();

$i = 0;

foreach($msgs as $msg){
    if($msg['nome']==$user){$me = "me";}else{$me = "";};
    $array_msg[$i++] = "<div class='caixa_msg " . $me . "'>" . "<div class='rotulo'>" . "<p>" . $msg['nome'] . "</p>" . "<p>" . $msg['datahora'] . "</p>" . "</div>" . "<div class='mensagem'>" . $msg['msg'] . "</div>" . "</div>";
}

$array_msg = array_reverse($array_msg);

foreach($array_msg as $arr){
    echo $arr;
}