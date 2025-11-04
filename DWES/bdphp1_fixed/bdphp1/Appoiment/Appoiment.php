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
          
             foreach($appoiments as $appoiment){
            echo "<tr>";
                echo '<td>'.$appoiment['id'].'</td>';
                echo '<td>'.$appoiment['userName'].'</td>';
                echo '<td>'.$appoiment['type'].'</td>';
                echo '<td>'.$appoiment['fecha'].'</td>';
                echo '<td>'.$appoiment['hora'].'</td>';
                echo "<td><form action='ManageAppoiment.php?action=delete' method='POST'><input type='hidden' name='id' value='" . $appoiment["id"] . "'><button type='submit' class='btn btn-primary'>🗑️</button></form></td>";
                echo "<td><form action='ManageAppoiment.php?action=edit' method='POST'><input type='hidden' name='id' value='" . $appoiment["id"] . "'><button type='submit' class='btn btn-primary'>✏️</button></form></td>";
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