<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<?php
    $errorName ='';
    $errorEstado='';
    $nombre='';
    $estadoCivil='';
    $hijos='';
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(!empty($_POST["name"])){
            $nombre= htmlspecialchars($_POST["name"]);
        }else{
            $errorName = "Error: Introduzca su nombre.";
        }
        if(!empty($_POST["radio"])){
            $estadoCivil = $_POST["radio"];
        }else{
            $errorEstado = "Error: Introduzca su estado civil.";
        }
        if(!empty($_POST["name"]) && !empty($_POST["radio"]) && !empty($_POST["checkbox"])){
            echo "Gracias, " . $nombre . ", por compartir tu situacion familiar.";
            $nombre='';
            $estadoCivil='';
        }
        if(!empty($_POST["name"]) && !empty($_POST["radio"])){
            echo "Nombre: " . $nombre . ", estado civil: " . $estadoCivil;
            $nombre='';
            $estadoCivil='';
        }
    }
?>

<form method="post">
  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Introduce tu nombre</label> 
    <div class="col-8">
      <input id="name" name="name" placeholder="Nombre" type="text" class="form-control" value="<?php echo $nombre?>">
        <?php echo $errorName?>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4 col-form-label">Seleccione su estado civil</label> 
    <div class="col-8">
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="soltero" <?php if($estadoCivil == "soltero") echo "checked"?>> 
          <label for="radio_0" class="custom-control-label">Soltero</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="casado"<?php if($estadoCivil == "casado") echo "checked"?>> 
          <label for="radio_1" class="custom-control-label">Casado</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio" id="radio_2" type="radio" class="custom-control-input" value="divorciado"<?php if($estadoCivil == "divorciado") echo "checked"?>> 
          <label for="radio_2" class="custom-control-label">Divorciado</label>
        </div>
        <?php echo $errorEstado ?>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4">¿Tiene hijos?</label> 
    <div class="col-8">
      <div class="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_0" type="checkbox" class="custom-control-input" value="si"> 
        <label for="checkbox_0" class="custom-control-label">Si</label>
      </div>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>