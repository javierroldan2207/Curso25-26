<?php
require_once __DIR__ . "/AppoimentUtility.php";

$tipos = AppoimentUtility::getTiposCita();
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
            <?php foreach($tipos as $tipo): ?>
                <tr>
                    <td><?= $tipo['id'] ?></td>
                    <td><?= $tipo['nombre'] ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
