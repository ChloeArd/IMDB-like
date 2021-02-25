<?php

$title = "IMDb Marvel Registration";
include "../_partials/header.php";
include "../_partials/menu.php";
?>

    <main class="backgroundImage flexRow" id="account">
        <section id="signIn" class="flexColumn">
            <h2 class="colorBlack titleAccount">Sign in</h2>
            <a id="buttonSignIn" href="signIn.php" class="buttonBlack">sign in</a>
        </section>

        <div class="borderLeft"></div>

        <section id="createAccount2" class="flexColumn">
            <h2 class="colorBlack titleAccount">Sign up</h2>
            <a id="buttonSignUp" href="signUp.php" class="buttonRed">Create a new account</a>
        </section>
    </main>

<?php
include "../_partials/footer.php";
?>