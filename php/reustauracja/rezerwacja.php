<?php
    $data = filter_var(trim($_POST['data']),
    FILTER_SANITIZE_STRING);
    $osoby = filter_var(trim($_POST['osoby']),
    FILTER_SANITIZE_STRING);
    $telefon = filter_var(trim($_POST['telefon']),
    FILTER_SANITIZE_STRING);

    $mysql = new mysqli('localhost', 'root', '', 'reustauracja');
    $mysql->query("INSERT INTO `rezerwacje` (`data_rez`,`liczba_osob`,`telefon`)
    VALUES('$data', '$osoby', '$telefon')");
    $mysql->close()
?>            