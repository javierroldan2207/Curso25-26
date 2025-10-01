<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(!empty($_POST["checkbox"])){
        $hobbies = $_POST["checkbox"];
        echo "Has seleccionado: " . implode(",", $hobbies);
        }else{
            echo "Error: no se a seleccionado ninguna opcion.";
        }
    }
?>


<form method="post">
  <div class="form-group row">
    <label class="col-4 col-form-label">Hobbies</label> 
    <div class="col-8">
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox[]" id="checkbox_0" type="checkbox" class="custom-control-input" value="lectura"> 
          <label for="checkbox_0" class="custom-control-label">Lectura</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox[]" id="checkbox_1" type="checkbox" class="custom-control-input" value="deporte"> 
          <label for="checkbox_1" class="custom-control-label">Deporte</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox[]" id="checkbox_2" type="checkbox" class="custom-control-input" value="musica"> 
          <label for="checkbox_2" class="custom-control-label">Musica</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox[]" id="checkbox_3" type="checkbox" class="custom-control-input" value="viajar"> 
          <label for="checkbox_3" class="custom-control-label">Viajar</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-checkbox">
          <input name="checkbox[]" id="checkbox_4" type="checkbox" class="custom-control-input" value="cocina"> 
          <label for="checkbox_4" class="custom-control-label">Cocina</label>
        </div>
      </div>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>