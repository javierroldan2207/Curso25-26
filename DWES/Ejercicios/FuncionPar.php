<?php
function esPar($num){
    $result = 'Es impar.';
    if($num % 2 == 0){
        $result = 'Es par.';
    }
    return $result;
}
echo(esPar(39));
?>