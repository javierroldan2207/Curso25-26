<?php
session_start();
if(!isset($_SESSION)){
$_SESSION["numeroSecreto"] = ramdom_init(1,100);
$_SESSION["intentos"] = 0;
}
?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <?php
        $errorMensage = '';
        if($_SERVER["REQUEST_METHOD"] == "POST"){
                if(isset($_POST["numero"]) && )
        }
    ?>
<form>
  <div class="form-group row">
    <label for="numero" class="col-4 col-form-label">Numero</label> 
    <div class="col-8">
      <input id="numero" name="numero" placeholder="Introduce un número entre 1 - 100." type="text" class="form-control">
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
