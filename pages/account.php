<?php

$title = "IMDb Registration";
include "../_partials/header.php";
include "../_partials/menu.php";
?>

    <main class="backgroundImage flexRow" id="account">
        <section id="signIn" class="flexColumn">
            <h2 class="colorBlack titleAccount">Sign in</h2>
            <form method="post" action=" " class="flexColumn formAccount">
                <label for="usernameSignIn" class="colorGrey" ><i class="fas fa-user"></i>Username :</label>
                <input type="text" name="text" id="usernameSignIn" class="colorRed" required>
                <label for="passwordSignIn" class="colorGrey" ><i class="fas fa-lock"></i>Password :</label>
                <input type="password" name="password" id="passwordSignIn" class="colorRed" required>
                <input id="signIn2" type="submit" value="Sign in" class="colorWhite buttonRed">
            </form>
        </section>

        <div class="borderLeft"></div>

        <section id="create account" class="flexColumn">
            <h2 class="colorBlack titleAccount">Sign up</h2>
            <form method="post" action="../public/register.php" class="flexColumn formAccount">
                <label for="name" class="colorGrey" ><i class="fas fa-user"></i>Full Name :</label>
                <input type="text" name="name" id="name" class="colorRed" required>
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
        </section>
    </main>


<?php
include "../_partials/footer.php";
?>