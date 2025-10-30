<?php
    require_once __DIR__ . '/../includes/header.php';
    require_once __DIR__ . '/AppoimentUtility.php';
    require_once __DIR__ . '/../Users/UserUtility.php';

    if(isset($_GET["action"])){
        if($_GET["action"] == "edit"){
            //Editar Cita
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $id = $_POST["id"];
                $appoiment = AppoimentUtility::getAllAppoiment($id);
                $appoimentsType = AppoimentUtility::getTiposCita();
                $username = UserUtility::getUserName($appoiment["usuario_id"]);
            }else{
                
            }
        }
    }
    

?>

<div>
  <form method="post">
    
    <input id="id" name="id" type="hidden" class="form-control">

    <div class="form-group row">
      <label for="user_id" class="col-4 col-form-label">Usuario</label>
      <div class="col-8">
        <input id="username" name="username" type="text" class="form-control" disabled>
      </div>
    </div>

    <div class="form-group row">
      <label for="typeAppoiment" class="col-4 col-form-label">Tipo de cita</label>
      <div class="col-8">
        <select id="typeAppoimentId" name="typeAppoimentId"></select>
      </div>
    </div>

    <div class="form-group row">
      <label for="date" class="col-4 col-form-label">Fecha</label>
      <div class="col-8">
        <input id="date" name="date" type="text" class="form-control">
      </div>
    </div>

    <div class="form-group row">
      <label for="time" class="col-4 col-form-label">Hora</label>
      <div class="col-8">
        <input id="time" name="time" type="text" class="form-control">
      </div>
    </div>

    <div class="form-group row">
      <div class="offset-4 col-8">
      </div>
    </div>

  </form>
</div>
<?php
require_once __DIR__ . '/../includes/footer.php';
?>
