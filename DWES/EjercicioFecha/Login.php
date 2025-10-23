<?php
session_start();
$_SESSION['$usuarios'] = ['inma' => '1234', 'juan' => 'abcd'];
$alert = ['user' => 'Incorrect user.', 'pass' => 'incorrect password.'];

function validarUser(){
  $flag = false;
  foreach ($_SESSION['$usuarios'] as $user => $value) {
      if($user === $_POST["name"]){
        $flag = true;
      }
  }
  return $flag;
}

function validarPass(){
  $flag = false;
  foreach ($_SESSION['$usuarios'] as  $value) {
      if($value === $_POST["pass"]){
        $flag = true;
      }
  }
  return $flag;
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
  if(validarUser($_POST["name"]) && validarPass($_POST["pass"])){
      echo "<script> window.location.replace ('Formulario.php'); </script>";
  }

}

?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<form method='post'>
  <div class="form-group row">
    <label class="col-4 col-form-label" for="name">Name</label> 
    <?php ?>
    <div class="col-8">
      <input id="name" name="name" type="text" class="form-control">
    </div>
  </div>
  <div class="form-group row">
    <label for="pass" class="col-4 col-form-label">Password</label> 
    <?php ?>
    <div class="col-8">
      <input id="pass" name="pass" type="password" class="form-control">
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>