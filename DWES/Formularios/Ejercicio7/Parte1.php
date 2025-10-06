<?php 
session_start();
$errorMessage = '';




?>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<?php 
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(!empty($_POST["numJugadores"]) && isset($_POST["numJugadores"]) && is_numeric($_POST["numJugadores"]) && $_POST["numJugadores"] <= 6 && $_POST["numJugadores"] >= 2){
            $_SESSION["numJugadores"] = $_POST["numJugadores"];
            echo "<script> window.location.replace ('Parte2.php'); </script>";
        }else{
            $errorMessage = 'Introduce un valor correcto';
        }
    }
?>


<form method = "post">
  <div class="form-group row">
    <label class="col-4 col-form-label" for="text">Numero de jugadores</label> 
    <div class="col-8">
      <input id="text" name="numJugadores" placeholder="entre 2-6 jugadores" type="number" class="form-control">
      <?php echo $errorMessage; ?>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>