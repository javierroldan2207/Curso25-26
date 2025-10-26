<?php

class DB{
    private static ?PDO $instance = null;
    //Conexion con base de datos:
    public static function getInstance(){
        $config = require_once __DIR__.'/config.php';
        $db = $config['db'];
        if(!self::$instance){
            self::$instance = new PDO("mysql:host={$db['host']};dbname={$db['dbname']};port={$db['port']}", $db['user'], $db['pass']);

        }

        return self::$instance;
    }
}