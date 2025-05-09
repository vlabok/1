<?php

$connection = new mysqli('localhost', 'root', '', 'wedkowanie');

if ($connection->connect_error) {
    die("Błąd połączenia: " . $connection->connect_error);
}

?>

<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wedkuj z nami</title>
    <link rel="stylesheet" href="styly.css">
</head>

<body>
    <div class="header">
        <h2>Wędkuj z nami!</h2>
    </div>

    <div class="container">
        <section class="left-block">
        <img src="ryba.jpg" alt=" Szczupak">
            
        </section>

        <section class="right-block">
        <h3>Ryby spokojnego żeru (białe)</h3>

<?php
$query = "
       SELECT `id`, `nazwa`, `wystepowanie` FROM `ryby` WHERE `styl_zycia`= 2 ;
    ";

$result = mysqli_query($connection, $query);

while ($row = mysqli_fetch_array($result)) {
    echo "<li>{$row['id']} . {$row['nazwa']}, w: {$row['wystepowanie']}</li>";
}


?>

<a href="https://wedkuje.pl/">Odwiedź także</a>
<a href="http://www.pzw.org.pl/">Odwiedź także</a>
        </section>
    </div>

    <div class="footer">
        <p>Stronę wykonał: 00000000000</p>
    </div>

    <?php
    $connection->close();
    ?>
</body>

</html>