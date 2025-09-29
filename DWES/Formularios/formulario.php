<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<?php
if(isset($_GET['submit'])){
    $nombre = $_GET['name'];
    $color = $_GET['radio'];
    echo "Hola $nombre, tu color favorito es el $color";
}

if($_SERVER["REQUEST_METHOD"] == "GET"){
  if(isset($_GET["name"]) && !empty($_GET["name"])){
   echo $_GET["name"];
}
}

?>
<form>
  <div class="form-group row">
    <label for="name" class="col-4 col-form-label">Name</label> 
    <div class="col-8">
      <input id="name" name="name" type="text" class="form-control" value= <?php if($_SERVER["REQUEST_METHOD"] == "GET"){ if(isset($_GET["name"]) && !empty($_GET["name"])){ echo $_GET["name"];}}?>>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4 col-form-label">Selecciona colores</label> 
    <div class="col-8">
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio" id="radio_0" type="radio" class="custom-control-input" value="rojo"> 
          <label for="radio_0" class="custom-control-label">Rojo</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio" id="radio_1" type="radio" class="custom-control-input" value="verde"> 
          <label for="radio_1" class="custom-control-label">Verde</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio" id="radio_2" type="radio" class="custom-control-input" value="amarillo"> 
          <label for="radio_2" class="custom-control-label">Amarillo</label>
        </div>
      </div>
      <div class="custom-controls-stacked">
        <div class="custom-control custom-radio">
          <input name="radio" id="radio_3" type="radio" class="custom-control-input" value="rosa"> 
          <label for="radio_3" class="custom-control-label">Rosa</label>
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