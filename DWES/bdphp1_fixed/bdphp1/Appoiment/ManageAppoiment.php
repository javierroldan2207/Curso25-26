<?php
    require_once __DIR__ . '/../includes/header.php';
    require_once __DIR__ . '/AppoimentUtility.php';
    require_once __DIR__ . '/../Users/UserUtility.php';

    if(isset($_GET["action"])){
        if($_GET["action"] == "edit"){
            //Editar Cita
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $id = $_POST["id"];
                $appoiment = AppoimentUtility::getAllAppoiment();
                $appoimentsType = AppoimentUtility::getTiposCita();
                $username = UserUtility::getUserName($id);
            }else{
                
            }
        }
    }
    

?>

<?php
require_once __DIR__ . "/AppoimentUtility.php";
require_once __DIR__ . "/../Users/UserUtility.php";
require_once __DIR__ . "/../includes/header.php";

$action = $_GET['action'] ?? null;
$id = $_POST['id'] ?? null;
$message = "";
$appoiment = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['save'])) {
        $id = $_POST['id'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];
        AppoimentUtility::updateCita($id, $fecha, $hora);
        $message = "Cita actualizada correctamente.";
    } elseif (isset($_POST['confirm_delete'])) {
        $id = $_POST['id'];
        AppoimentUtility::deleteCita($id);
        $message = "Cita eliminada correctamente.";
    }
}

if ($message !== "") {
    echo "<p>$message</p>";
    echo "<p><a href='Appoiment.php'>Volver a la lista de citas</a></p>";
    require_once __DIR__ . "/../includes/footer.php";
    exit;
}

if ($id) {
    $appoiment = AppoimentUtility::getCitaById($id);
}

if (!$appoiment) {
    echo "<p>No se encontró la cita especificada.</p>";
    echo "<p><a href='Appoiment.php'>Volver a la lista de citas</a></p>";
    require_once __DIR__ . "/../includes/footer.php";
    exit;
}
?>

<h2>
<?php
    if ($action === 'edit') echo "Editar cita";
    elseif ($action === 'delete') echo "Eliminar cita";
    else echo "Gestión de cita";
?>
</h2>

<form method="POST" action="">
    <input type="hidden" name="id" value="<?= $appoiment['id'] ?>">
    <input type="hidden" name="action" value="<?= $action ?>">

<label>Usuario:</label>
<input type="text" value="<?= htmlspecialchars($appoiment['nombre_usuario']) ?>" readonly>

<label>Tipo de cita:</label>
<select name="tipo_cita" <?= $action === 'delete' ? 'disabled' : '' ?>>
    <?php
        $tiposCita = AppoimentUtility::getTiposCita();
        foreach ($tiposCita as $tipo) {
            $selected = ($tipo["nombre"] === $appoiment['tipo_cita']) ? 'selected' : '';
            echo "<option value='" . $tipo['id'] . "' $selected>" . $tipo['nombre'] . "</option>";
        }
    ?>
</select>


<label>Fecha:</label>
<input type="date" name="fecha" value="<?= htmlspecialchars($appoiment['fecha']) ?>"
    <?= $action === 'delete' ? 'readonly' : '' ?>>

<label>Hora:</label>
<input type="time" name="hora" value="<?= htmlspecialchars($appoiment['hora']) ?>"
    <?= $action === 'delete' ? 'readonly' : '' ?>>

<?php if ($action === 'edit'): ?>
    <button type="submit" name="save">Guardar cambios</button>
<?php elseif ($action === 'delete'): ?>
    <button type="submit" name="confirm_delete">Confirmar eliminación</button>
<?php endif; ?>

</form>

<p><a href="Appoiment.php">Volver a la lista de citas</a></p>

<?php require_once __DIR__ . "/../includes/footer.php"; ?>

</body>
</html>

<?php
require_once __DIR__ . '/../includes/footer.php';
