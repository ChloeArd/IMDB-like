<?php

$title = "IMDb Marvel create account";
include "../_partials/header.php";
//the user can create an account using the form, the data will be sent to the database
?>

    <img class="placeLogo" id="logo_IMDb2" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb">
    <section id="createAccount" class="flexColumn">
        <h2 class="colorGrey titleAccount">Create account</h2>
        <form method="post" action="../public/register.php" class="flexColumn formAccount">
            <label for="firstname" class="colorGrey" ><i class="fas fa-user"></i>Firstname :</label>
            <input type="text" name="firstname" id="firstname" class="colorRed" required>
            <label for="lastname" class="colorGrey" ><i class="fas fa-user"></i>Lastname :</label>
            <input type="text" name="lastname" id="lastname" class="colorRed" required>
            <label for="email" class="colorGrey" ><i class="fas fa-envelope"></i>E-mail :</label>
            <input type="email" name="email" id="email" class="colorRed" required>
            <label for="usernameSignUp" class="colorGrey" ><i class="fas fa-user"></i>Username :</label>
            <input type="text" name="username" id="usernameSignUp" class="colorRed" required>
            <label for="passwordSignUp" class="colorGrey" ><i class="fas fa-lock"></i>Password :</label>
            <input type="password" name="password" id="passwordSignUp" class="colorRed" required minlength="6" maxlength="24">
            <label for="repeatPassword" class="colorGrey" ><i class="fas fa-lock"></i>Repeat Password :</label>
            <input type="password" name="repeatPassword" id="repeatPassword" class="colorRed" required >
            <input id="signUp" type="submit" value="Sign up" class="colorWhite buttonRed">
        </form>
        <p id="linkSignIn" class="size15">Already have an account? <a href="signIn.php" class="linkBlue">Sign-In</a></p>
    </section>