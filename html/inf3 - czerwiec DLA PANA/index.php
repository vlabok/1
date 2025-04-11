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
    <title>Wędkowanie</title>
    <link rel="stylesheet" href="styly_1.css">
</head>

<body>
    <div class="header">
        <h1>Portal dla wędkarzy</h1>
    </div>

    <div class="container">
        <section class="left-block">
            <h3>Ryby zamieszkujące rzeki</h3>
            
                <?php
                $query = "
                    SELECT Ryby.nazwa, Lowisko.akwen, Lowisko.wojewodztwo 
                    FROM Ryby 
                    JOIN Lowisko ON Ryby.id = Lowisko.Ryby_id 
                    WHERE Ryby.styl_zycia = 1;
                ";
                
                $result = $connection->query($query);

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<li>{$row['nazwa']} pływa w rzece {$row['akwen']}, {$row['wojewodztwo']}</li>";
                    }
                } else {
                    echo "<li>Brak wyników do wyświetlenia.</li>";
                }
                
                ?>
                
                <h3>Wszystkie ryby w bazie</h3>
<table>
<table>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Gatunek</th>
            <th>Występowanie</th>
        </tr>
    </thead>
    <tbody>
        <?php
            $query = "SELECT id, nazwa AS Gatunek, wystepowanie AS Występowanie FROM Ryby";
            $result = $connection->query($query);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>
                        <td>{$row['id']}</td>
                        <td>{$row['Gatunek']}</td>
                        <td>{$row['Występowanie']}</td>
                    </tr>";
                }
            } else {
                echo "<tr><td colspan='3'>Brak danych do wyświetlenia.</td></tr>";
            }
            ?>
    </tbody>
</table>
        </section>

        <section class="right-block">
            
            <img src="ryba1.jpg" alt="Sum">
            <a href="kwerendy.txt" class="download-link">Pobierz kwerendy</a>
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