<?php
session_start();

if (isset($_SESSION['username']) && isset($_SESSION['password'])) {

$title = "IMDb Marvel create account";
include "../_partials/header.php";
?>

<img class="placeLogo" id="logo_IMDb2" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb">
<section id="createAccount" class="flexColumn">
    <h2 class="colorGrey titleAccount">Edit profil</h2>
    <form method="post" action="../public/update.php?id=<?= $_SESSION['id'] ?>"" class="flexColumn formAccount">
        <label for="firstname" class="colorGrey"><i class="fas fa-user"></i>Firstname :</label>
        <input type="text" name="firstname" id="firstname" class="colorRed" value="<?= $_SESSION["firstname"] ?>" required>
        <label for="lastname" class="colorGrey"><i class="fas fa-user"></i>Lastname :</label>
        <input type="text" name="lastname" id="lastname" class="colorRed" value="<?= $_SESSION["lastname"] ?>" required>
        <label for="email" class="colorGrey"><i class="fas fa-envelope"></i>E-mail :</label>
        <input type="email" name="email" id="email" class="colorRed" value="<?= $_SESSION["email"] ?>" required>
        <label for="usernameSignUp" class="colorGrey"><i class="fas fa-user"></i>Username :</label>
        <input type="text" name="username" id="usernameSignUp" class="colorRed" value="<?= $_SESSION["username"] ?>" required>
        <label for="passwordSignUp" class="colorGrey"><i class="fas fa-lock"></i>Password :</label>
        <input type="password" name="password" id="passwordSignUp" class="colorRed" value="<?= $_SESSION["password"] ?>" required minlength="6" maxlength="24">
        <input id="signUp" type="submit" value="Edit profil" class="colorWhite buttonRed">
    </form>
</section>

<?php
}