<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">



<form method = "GET">
  <div class="form-group row">
    <label class="col-4 col-form-label" for="name">Nombre</label> 
    <div class="col-8">
      <input id="name" name="name" placeholder="Introduzca su nombre" type="text" class="form-control" value ="<?php
        if($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["name"]) && !empty($_GET["name"])){
            echo $_GET["name"];
        }?>">
      <?php
      $flag = false;
      if($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["name"]) && !empty($_GET["name"])){
        if($_GET["edad"] > 0 && $_GET["edad"] <= 120){
            $flag = true;
            }
        }else{
                echo "Error: campo nombre incorrecto.";
            }
        ?>
    </div>
  </div>
  <div class="form-group row">
    <label for="edad" class="col-4 col-form-label">Edad</label> 
    <div class="col-8">
      <input id="edad" name="edad" placeholder="Introduzca su edad" type="text" class="form-control" value ="<?php
        if($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["edad"]) && !empty($_GET["edad"])){
            echo $_GET["edad"];
        }?>" >
      <?php 
        if($_SERVER["REQUEST_METHOD"] === "GET" && !empty($_GET["edad"] && isset($_GET["edad"]) && is_numeric($_GET["edad"]))){
            if($_GET["edad"] > 0 && $_GET["edad"] <= 120 && $flag){
                echo 'Bienvenido '. $_GET["name"].", ". "tu edad es ".$_GET["edad"]; 
            }
            
        }else{
                if($_GET["edad"] <= 0 || $_GET["edad"] > 120){
                    echo "Error: campo edad no esta en el rango."; 
                }
            }
?>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>