<?php

$title = "IMDb Marvel Registration";
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title><?= $title ?></title>
        <script src="https://kit.fontawesome.com/351e9300a0.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

    <main class="backgroundImage flexRow" id="account">
        <img id="imdbMarvel" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png">
        <section id="signIn" class="flexColumn">
            <h2 class="colorBlack titleAccount">Sign in</h2>
            <a id="buttonSignIn" href="pages/signIn.php" class="buttonBlack">sign in</a>
        </section>

        <div class="borderLeft"></div>

        <section id="createAccount2" class="flexColumn">
            <h2 class="colorBlack titleAccount">Sign up</h2>
            <a id="buttonSignUp" href="pages/signUp.php" class="buttonBlack">Create a new account</a>
        </section>
    </main>
    </body>
</html>