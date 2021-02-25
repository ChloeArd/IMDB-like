<?php

$lastName = htmlentities(trim($_POST["name"]));
$vorName = htmlentities(trim($_POST["vorname"]));

$to = "service.IMDbMarvel@gmail.com"; //service.IMDbMarvel@gmail.com
$from      = trim($_POST["email"]);
$subject = htmlentities(trim($_POST["subject"]));
$message = htmlentities(trim($_POST["message"]));
$headers = array(
    "Reply-To" => $from,
    "X-Mailer" => "PHP/".phpversion()
);


if (isset($_POST["email"], $_POST["message"], $_POST["subject"])){
    mail($to, $subject, $message, $headers, "-f ".$from);
}

header('Location: ../public/admin.php');

$arrayMessage = array(
    "last name" => $lastName,
    "Vor name" => $vorName,
    "E-Mail" => $from,
    "Subject" => $subject,
    "Message" => $message,
);

$jsonEncode = json_encode($arrayMessage);
file_put_contents("../data/lastMessage.json", $jsonEncode);