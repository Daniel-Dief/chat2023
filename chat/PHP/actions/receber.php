<?php

require_once('./PHP/includes/conexao.php');

$sql = "SELECT id, nome, perfil, msg, datahora FROM `chat`";

$retorno = $conexao->query($sql);

$json = array();

foreach ($retorno as $r) {
    $json[] = '{"id": "' . $r['id'] . '", 
              "nome": "' . $r['nome'] . '",
              "perfil": "' . $r['perfil'] . '",
              "msg": "' . $r['msg'] . '",
              "datahora": "' . $r['datahora'] . '"}';
}

$json = array_reverse($json);

echo "[" . implode(", ", $json) . "]";