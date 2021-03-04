<?php

$title = "IMDb Marvel  sign-In";
include "../_partials/header.php";
//the user can connect to the site, thanks to the data recorded in the database
?>

    <img class="placeLogo" id="logo_IMDb2" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb">
    <section id="createAccount" class="flexColumn">
        <h2 class="colorGrey titleAccount">Sign-In</h2>
        <form method="post" action="../public/check_login.php" class="flexColumn formAccount">
            <label for="username" class="colorGrey" ><i class="fas fa-user"></i>Username :</label>
            <input type="text" name="username" id="usernameSignIn" class="colorRed" required>
            <label for="passwordSignIn" class="colorGrey" ><i class="fas fa-lock"></i>Password :</label>
            <input type="password" name="password" id="passwordSignIn" class="colorRed" required>
            <input id="signIn2" type="submit" value="Sign in" class="colorWhite buttonRed">
        </form>
        <span id="new" class="colorGrey size15">New to IMDb Marvel ?</span>
        <a id="buttonCreateAccount" href="signUp.php" class="buttonBlack">Create you IMDb Marvel account</a>
    </section>