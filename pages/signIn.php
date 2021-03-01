<?php

$title = "IMDb Marvel  sign-In";
include "../_partials/header.php";
?>

<a class="placeLogo" href="../index.php"><img id="logo_IMDb2" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb"></a>
    <section id="createAccount" class="flexColumn">
        <h2 class="colorGrey titleAccount">Sign-In</h2>
        <form method="post" action=" " class="flexColumn formAccount">
            <label for="usernameSignIn" class="colorGrey" ><i class="fas fa-user"></i>Username :</label>
            <input type="text" name="text" id="usernameSignIn" class="colorRed" required>
            <label for="passwordSignIn" class="colorGrey" ><i class="fas fa-lock"></i>Password :</label>
            <input type="password" name="password" id="passwordSignIn" class="colorRed" required>
            <input id="signIn2" type="submit" value="Sign in" class="colorWhite buttonRed">
        </form>
        <span id="new" class="colorGrey size15">New to IMDb Marvel ?</span>
        <a id="buttonCreateAccount" href="signUp.php" class="buttonBlack">Create you IMDb Marvel account</a>
    </section>