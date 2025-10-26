<?php
require_once __DIR__ ."/AppoimentUtility.php";

$appoiments = AppoimentUtility::getAllAppoiment();

require_once __DIR__ . "/../includes/header.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.css">
    <title>Appoiment</title>
</head>
<body>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre Usuario</th>
                <th>Tipo Cita</th>
                <th>Fecha</th>
                <th>Hora</th>
            </tr>
        </thead>  
        <tbody>
            <?php
            foreach($appoiments as $appoiment):?>
            <tr>  
                <td><?= $appoiment["id"] ?></td>
                <td><?= $appoiment["userName"] ?></td>
                <td><?= $appoiment["type"] ?></td>
                <td><?= $appoiment["fecha"] ?></td>
                <td><?= $appoiment["hora"] ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>    
    <?php
    require_once __DIR__ . "/../includes/footer.php";
    ?>
</body>
</html>