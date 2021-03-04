<?php

session_start();

if (isset($_SESSION['username']) && isset($_SESSION['password'])) {
    require "../Classes/DB.php";

    $bdd = DB::getInstance();
    $id = $_GET['id'];

    //Delete a user thanks to his id on database
    $sql = "DELETE FROM user WHERE id = $id";
    if ($bdd->exec($sql) !== false) {
        header("Location: ../index.php");
    }
}