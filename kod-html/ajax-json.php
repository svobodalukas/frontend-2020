<?php
header('Access-Control-Allow-Origin: *'); 

$user->name = "John";
$user->age = 30;
$user->city = "New York";

$userJSON = json_encode($user);

echo $userJSON;

?>