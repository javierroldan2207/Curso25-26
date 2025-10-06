<?php
session_start();
if(!(isset($_SESSION['numeroSecreto']) && isset($_SESSION['intentos']))){
  $_SESSION['numeroSecreto'] =  random_int(1, 100);
  $_SESSION['intentos'] = 0;
}
?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <?php
        $flag = false;
        $errorMensage = '';
        $mensaje = '';
        if($_SERVER["REQUEST_METHOD"] == "POST"){
                if(isset($_POST["numero"]) && is_numeric($_POST["numero"])){
                  if($_POST["numero"] > $_SESSION["numeroSecreto"] && $_SESSION["intentos"] < 7){
                    $mensaje = 'El numero secreto es menor al introducido.';
                    $_SESSION["intentos"]++;
                  }
                  else if($_POST["numero"] < $_SESSION["numeroSecreto"] && $_SESSION["intentos"] < 7){
                    $mensaje = 'El numero secreto es mayor al introducido.';
                    $_SESSION["intentos"]++;
                    $_POST["numero"] = '';
                  }
                }else{
                  $errorMensage = "Introduce un numero correcto.";
                }
                if($_SESSION["intentos"] >= 7){
                  $mensaje = 'Total de intentos gastado.';
                  session_destroy();
                  $_SESSION = [];
                  $flag = true;
                }
                else if(isset($_POST["numero"]) && $_POST["numero"] !== '' && $_POST["numero"] == $_SESSION["numeroSecreto"]){
                  $mensaje = '¡Enhorabuena, has acertado!';
                  session_destroy();
                  $_SESSION = [];
                  $flag = true;
                }
        }
    ?>
<form method = "post">
  <div class="form-group row">
    <label for="numero" class="col-4 col-form-label">Numero</label> 
    <div class="col-8">
      <input id="numero" name="numero" placeholder="Introduce un número entre 1 - 100." type="text" class="form-control">
        <?php echo $mensaje?>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary" <?php if($flag === false) echo "hidden" ?>>Empezar partida</button>
      <button name="submit" type="submit" class="btn btn-primary" <?php if($flag === true) echo "hidden" ?>>Introducir numero</button>
    </div>
  </div>
</form>
