<?php
namespace App\userUtility;
use DataBase;
require_once __DIR__ . '/../App/DataBase/DataBase.php';

class userUtility{
   public static function getUsers(){
        try{
            $instance = DataBase::getInstance();
            $query = "SELECT nombre AS name from usuarios;"
            $stmt = $instance->prepare($query);
            $stmt->execute();
            $sol=  $stmt->fetchAll(PDO::FETCH_ASSOC);
        }catch(Exception e){
            throw new Exception("Error Processing Request"); 
        }
   }
}

