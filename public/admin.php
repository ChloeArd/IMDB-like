<?php

$jsonMessage = file_get_contents("../data/lastMessage.json");
$message = json_decode($jsonMessage);
echo "The message : '" . $message->{"Message"} . "', has been sent ! <br>";

echo "<br><br>"
?>

<a href="../index.php">Click here to return to home !</a>