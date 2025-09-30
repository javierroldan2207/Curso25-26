<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">



<form method = "POST">
  <div class="form-group row">
    <label class="col-4 col-form-label" for="name">Nombre</label> 
    <div class="col-8">
      <input id="name" name="name" placeholder="Introduzca su nombre" type="text" class="form-control" value ="<?php
        if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["name"]) && !empty($_POST["name"])){
            echo $_POST["name"];
        }?>">
      <?php
      $flag = false;
      if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["name"]) && !empty($_POST["name"])){
        if($_POST["edad"] > 0 && $_POST["edad"] <= 120){
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
      <input id="edad" name="edad" placeholder="Introduzca su edad" type="text" class="form-control" value="<?php 
      if($_SERVER["REQUEST_METHOD"] === "POST" && !empty($_POST["edad"]) && isset($_POST["edad"])){
            echo $_POST["edad"];
        }?>">
      <?php 
        if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["edad"]) && !empty($_POST["edad"] && is_numeric($_POST["edad"]))){
            if($_POST["edad"] > 0 && $_POST["edad"] <= 120 && $flag){
                echo 'Bienvenido '. $_POST["name"].", ". "tu edad es ".$_POST["edad"]; 
            }  
        }else{
                echo "Error: campo edad no esta en el rango."; 
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