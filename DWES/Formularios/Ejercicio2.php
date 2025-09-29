<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<?php
    $color = "";
    $genero = "";
    $errorColor ="";
    $errorGenero = "";

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(empty($_POST["selected"])){
            $errorColor = "Seleccione un color.";
        }else{
            $color = $_POST["select"];
        }
        if(empty($_POST["radio"])){
            $errorGenero = "Seleccione un genero.";
        }else{
            $genero = $_POST["radio"];
        }
    }
?>
<form method="post">
  <div class="form-group row">
    <label class="col-4 col-form-label" for="select">Seleccione su color favorito</label> 
    <div class="col-8">
      <select id="select" name="select" class="custom-select">
        <option value="rojo" <?php if($color == "rojo") echo "selected"; ?>>Rojo</option>
        <option value="verde" <?php if($color == "verde") echo "selected"; ?>>Verde</option>
        <option value="amarillo" <?php if($color == "amarillo") echo "selected";?>>Amarillo</option>
      </select>
      <?php if($errorColor) echo $errorColor?>
    </div>
  </div <?php echo $errorColor?>>
  <div class="form-group row">
    <label class="col-4">Seleccione su genero</label> 
    <div class="col-8">
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="hombre"> 
        <label for="radio_0" class="custom-control-label">Hombre</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="mujer"> 
        <label for="radio_1" class="custom-control-label">Mujer</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input name="radio" id="radio_2" type="radio" class="custom-control-input" value="otro"> 
        <label for="radio_2" class="custom-control-label">Otro</label>
      </div>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>