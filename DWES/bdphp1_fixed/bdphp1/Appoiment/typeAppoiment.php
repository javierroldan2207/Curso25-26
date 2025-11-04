<?php
require_once __DIR__ . "/AppoimentUtility.php";

$tipos = AppoimentUtility::getTiposCita();

require_once __DIR__ . "/../includes/header.php";

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.css">
    <title>Type Appoiment</title>
</head>
<body>
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Appoiment Name</th>
            </tr>
        </thead>
        <tbody>
            <?php 
            foreach($tipos as $tipo){
                echo "<tr>";
                    echo '<td>'.$tipo['id'].'</td>';
                    echo '<td>'.$tipo['nombre'].'</td>';
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
    <?php
    require_once __DIR__ . "/../includes/footer.php";
    ?>
</body>
</html>
