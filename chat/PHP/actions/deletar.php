<?php
require_once('../includes/conexao.php');

$sql = "DELETE FROM chat";

$msgs = $conexao->query($sql);

header("Location: ../../chat.php?user=$nome");