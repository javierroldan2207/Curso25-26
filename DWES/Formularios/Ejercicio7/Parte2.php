<?php
session_start();?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<form method = "post">
<?php  

function validarName(){
    for($i = 0; $i<$_SESSION["numJugadores"]; $i++){
        if()
    }
}
for($i = 0; $i<$_SESSION["numJugadores"]; $i++){
    echo '
    <div class="form-group row">
    <label class="col-4 col-form-label" for="text">Nombre jugador '. $i .'</label> 
    <div class="col-8">
      <input id="text" name="nomJugador'. $i .'" type="text" class="form-control">
    </div>
    </div> 
    ';
}

?>
</form>