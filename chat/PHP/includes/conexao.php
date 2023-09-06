<?php

$dbname = 'chat';
$dbuser = 'root';
$dbpassword = '';

$conexao = new PDO("mysql:host=localhost; dbname=$dbname", $dbuser, $dbpassword);   