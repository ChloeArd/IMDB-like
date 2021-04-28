<?php

include "../lib/functions.php";
require "../Classes/DB.php";

$to = sanitize($_POST["email"]);
$from = "service.IMDbMarvel@gmail.com";
$subject = "Password assistance";

$headers = array(
    "Reply-To" => $from,
    "X-Mailer" => "PHP/" . phpversion()
);


if (issetPostParams("email")) {
    $bdd = DB::getInstance();

    $stmt = $bdd->prepare("SELECT * FROM user WHERE email = '$to'");

    $stmt->execute();

    foreach ($stmt->fetchAll() as $user) {
        $password = $user['password'];
    }

    $message = "Hello, your password is $password";

    mail($to, $subject, $message, $headers, "-f " . $from);

    header('Location: ../pages/signUp.php');
}

echo "il y a un probleme ";
//header('Location: ../pages/forgotPassword.php');
