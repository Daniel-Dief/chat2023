<?php

require_once("../includes/conexao.php");

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);

$sql = "DELETE FROM chat WHERE id=$id";

$conexao->query($sql);

header("Location: ../../chat.php?user=$nome");