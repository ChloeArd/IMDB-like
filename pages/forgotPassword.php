<?php


$title = "IMDb Marvel  sign-In";
include "../_partials/header.php";
//If the user has forgotten his password then we send him an email with the password corresponding to his account
?>

<img class="placeLogo" id="logo_IMDb2"
     src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb">
<section id="createAccount" class="flexColumn">
    <h2 class="colorGrey titleAccount">Password assistance</h2>
    <p class="size15">Enter the email address associated with your IMDb Marvel account, then click Continue.</p>
    <form method="post" action="../public/saveAssistancePassword.php" class="flexColumn formAccount">
        <label for="email" class="colorGrey"><i class="fas fa-user"></i>Email :</label>
        <input type="text" name="email" id="email" class="colorRed" required>
        <input type="submit" value="Continue" class="colorWhite buttonRed">
    </form>
</section>