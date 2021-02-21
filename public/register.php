<?php

if (isset($_POST["name"], $_POST["email"], $_POST["username"], $_POST["password"], $_POST["repeatPassword"])) {
    $name = trim(strip_tags($_POST["name"]));
    $email = trim($_POST["email"]);
    $username = trim(strip_tags($_POST["username"]));
    $password = trim(strip_tags($_POST["password"]));
    $repeatPassword = trim(strip_tags($_POST["repeatPassword"]));

    echo "Full name : $name <br>
          Email : $email <br>
          Username ! $username <br>
          Password : $password <br>
          Password confirm : $repeatPassword ";

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../pages/index.php?success=0");
    }
    else {
        echo "<br><br>The email is not valid! 
        <br><a href='../pages/account.php'> Previous page</a>";
    }
}
