<?php
 $url = str_replace($_SERVER["DOCUMENT_ROOT"],"",__DIR__); 
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Aplicación de Citas</title>
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.css">
</head>
<body>
    <header>
        <h1>Aplicación de Citas</h1>
        <nav>
            <a href="<?php echo $url . '/../Appoiment/Appoiment.php'?>">Citas</a> |
            <a href="<?php echo $url . '/../Appoiment/typeAppoiment.php'?>">Tipos de Cita</a> |
            <a href="<?php echo $url . '/../Appoiment/Users.php'?>">Usuarios</a>
        </nav>
    </header>
    <main>
