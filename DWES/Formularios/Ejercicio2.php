<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<?php
    $color = "";
    $genero = "";
    $errorColor = "";
    $errorGenero = "";

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(empty($_POST["select"])){
            $errorColor = "Error: seleccione un color.";
        }else{
            $color = $_POST["select"];
        }

        if(empty($_POST["radio"])){
            $errorGenero = "Error: seleccione un género.";
        }else{
            $genero = $_POST["radio"];
        }

        if(empty($errorColor) && empty($errorGenero)){
          echo 'Has elegido el color: ' . $color.' y el genero: ' . $genero;

          $genero='';
          $color='';
        }
    }
?>

<form method="post">
  <div class="form-group row">
    <label class="col-4 col-form-label" for="select">Seleccione su color favorito</label> 
    <div class="col-8">
      <select id="select" name="select" class="custom-select">
        <option value="">-- Seleccione --</option>
        <option value="rojo" <?php if($color == "rojo") echo "selected"; ?>>Rojo</option>
        <option value="verde" <?php if($color == "verde") echo "selected"; ?>>Verde</option>
        <option value="amarillo" <?php if($color == "amarillo") echo "selected";?>>Amarillo</option>
      </select>
      <?php if($_SERVER["REQUEST_METHOD"] == "POST" && $errorColor) echo $errorColor ?>
    </div>
  </div>

  <div class="form-group row">
    <label class="col-4">Seleccione su género</label> 
    <div class="col-8">
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="hombre" <?php if($genero == "hombre") echo "checked"; ?>> 
        <label for="radio_0" class="custom-control-label">Hombre</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="mujer" <?php if($genero == "mujer") echo "checked"; ?>> 
        <label for="radio_1" class="custom-control-label">Mujer</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_2" type="radio" class="custom-control-input" value="otro" <?php if($genero == "otro") echo "checked"; ?>> 
        <label for="radio_2" class="custom-control-label">Otro</label>
      </div>
      <?php if($_SERVER["REQUEST_METHOD"] == "POST" && $errorGenero) echo $errorGenero?>
    </div>
  </div> 

  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Enviar</button>
    </div>
  </div>
</form>
