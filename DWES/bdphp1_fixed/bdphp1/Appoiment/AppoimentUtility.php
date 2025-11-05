<?php

require_once __DIR__ . '/../BD/DataBase.php';


class AppoimentUtility{
    public static function getAllAppoiment(){
        $instance = DB::getInstance();
        $query = "SELECT c.id, u.nombre_usuario AS userName, t.nombre AS type, c.fecha, c.hora FROM citas c JOIN usuarios u ON c.usuario_id = u.id JOIN tipos_cita t ON c.tipo_cita_id = t.id ORDER BY c.id";
        $stmt = $instance->query($query);

        return $stmt->fetchAll(PDO::FETCH_ASSOC); 
    }

    public static function getUsuarios() {
        $instance = DB::getInstance();
        $query = "SELECT nombre_usuario AS userName FROM usuarios";
        $stmt = $instance->query($query);
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function getTiposCita(){
        $instance = DB::getInstance();
        $query = "SELECT id, nombre FROM tipos_cita ORDER BY id";
        $stmt = $instance->query($query); 

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

   public static function getCitaById($id) {
        $connection = DB::getInstance();
        $query = $connection->prepare("SELECT c.id, u.nombre_usuario, t.nombre AS tipo_cita, c.fecha, c.hora FROM citas c INNER JOIN usuarios u ON c.usuario_id = u.id INNER JOIN tipos_cita t ON c.tipo_cita_id = t.id WHERE c.id = $id");
        $query->execute();
        return $query->fetch(PDO::FETCH_ASSOC);
    }

    public static function updateCita($id, $fecha, $hora) {
        $connection = DB::getInstance();
        $query = $connection->prepare("UPDATE citas SET fecha = '$fecha', hora = '$hora' WHERE id = $id");
        return $query->execute();
    }

    public static function deleteCita($id) {
        $connection = DB::getInstance();
        $query = $connection->prepare("DELETE FROM citas WHERE id = $id");
        return $query->execute();
    }
 
    public static function addCita($id) {
        $connection = DB::getInstance();
        $query = $connection->prepare("INSERT INTO citas (usuario_id, tipo_cita_id, fecha, hora) VALUES ()");
        return $query->execute();
    }

}
