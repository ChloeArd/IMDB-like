<?php

include "../lib/functions.php";
require "../Classes/DB.php";

if (issetPostParams("firstname", "lastname", "email", "username", "password", "repeatPassword")) {
    $bdd = DB::getInstance();

    $firstname = sanitize($_POST["firstname"]);
    $lastname = sanitize($_POST["lastname"]);
    $email = trim($_POST["email"]);
    $username = sanitize($_POST["username"]);
    $password = sanitize($_POST["password"]);

    $encryptedPassword = password_hash($password, PASSWORD_BCRYPT);

    // je récupère que le nom de l'utilisateur
    $sql = "INSERT INTO user VALUES (null, '$firstname', '$lastname', '$email', '$username', '$encryptedPassword')";

    $bdd->exec($sql);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<a href='../pages/signIn.php'> Connecte toi ! </a>";
        header("Location: ../pages/signIn.php?success=0");
    }
    else {
        echo "<br><br>The email is not valid! 
        <br><a href='../index.php'> Previous page</a>";
    }
}
