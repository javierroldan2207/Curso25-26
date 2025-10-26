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

}