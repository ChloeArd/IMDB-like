<?php

include "../lib/functions.php";
require "../Classes/DB.php";


if (issetPostParams('username', 'firstname', 'lastname', 'email', 'password')) {
    $bdd = DB::getInstance();

    $id = $_GET['id'];
    $username = sanitize($_POST['username']);
    $firstname = sanitize($_POST['firstname']);
    $lastname = sanitize($_POST['lastname']);
    $email = sanitize($_POST['email']);
    $password = sanitize($_POST['password']);
    $encryptedPassword = password_hash($password, PASSWORD_BCRYPT);

    //modify the data entered by the user in the database
    $stm = $bdd->prepare("UPDATE user SET firstname = :firstname, lastname = :lastname, email = :email, username = :username, password = :password WHERE id = :id");

    $stm->bindParam(':username', $username);
    $stm->bindParam(':firstname', $firstname);
    $stm->bindParam(':lastname', $lastname);
    $stm->bindParam(':email', $email);
    $stm->bindParam(':password', $encryptedPassword);
    $stm->bindParam(':id', $id);

    $stm->execute();

    //Put the profile changes in the session
    session_start();
    $_SESSION['id'] = $id;
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;
    $_SESSION['email'] = $email;
    $_SESSION['firstname'] = $firstname;
    $_SESSION['lastname'] = $lastname;

    header("Location: ../pages/user.php");
}