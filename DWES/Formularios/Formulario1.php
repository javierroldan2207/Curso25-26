<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">



<form method="POST" action="Formulario1.php">
  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Nombre</label> 
    <div class="col-8">
      <input id="name" name="name" placeholder="Introduce tu nombre" type="text" class="form-control">
    </div>
  </div>
  <div class="form-group row">
    <label for="subname" class="col-4 col-form-label">Apellido</label> 
    <div class="col-8">
      <input id="subname" name="subname" placeholder="Introduce tu apellido" type="text" class="form-control">
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Enviar</button>
    </div>
  </div>
</form>

<?php
    if($_SERVER["REQUEST_METHOD"]== "POST"){
        if(isset($_POST["name"] && isset($_POST["subname"]))){
         echo "Hola" ." ". $_POST["name"] ." ".$_POST["subname"];
    }
}
?>