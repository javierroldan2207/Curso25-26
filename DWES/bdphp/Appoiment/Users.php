<?php
require_once __DIR__ ."/AppoimentUtility.php";

$appoiments = AppoimentUtility::getusuarios();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.css">
    <title>Users</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Usuarios</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($appoiments as $appoiment): ?>
        <tr>
            <td><?= $appoiment["userName"]?></td>
        </tr>
        <?php endforeach ?>
        </tbody>
    </table>
</body>
</html>