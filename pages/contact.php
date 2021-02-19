<?php
$title = "Contact";
include "../_partials/header.php";
include "../_partials/menu.php";
?>

    <main class="flexColumn">
            <div class="flexRow titleMargin" id="titleContact">
                <div class="borderLeft"></div>
                <h2>Contact </h2>
                <img id="spiderHelp" src="https://cdn.discordapp.com/attachments/689017273050202134/811904043755896902/spiderman_help-removebg-preview.png" alt="Spider-Man help">
            </div>
        <div id="containerContact">
            <form method="post" action="../public/save.php" class="flexColumn">
                <label for="name" class="colorRed" >Last name :</label>
                <input type="text" name="name" id="name" class="colorRed" required>
                <label for="vorname" class="colorRed" >First name:</label>
                <input type="text" name="vorname" id="vorname" class="colorRed" required>
                <label for="email" class="colorRed" >E-mail :</label>
                <input type="email" name="email" id="email" class="colorRed" required>
                <label for="subject" class="colorRed" >Subject :</label>
                <input type="text" name="subject" id="subject" class="colorRed" required>
                <label for="message" class="colorRed" >Your message :</label>
                <textarea name="message" id="message" class="colorRed" required></textarea>
                <input id="send" type="submit" value="Send" class="colorWhite">
            </form>
        </div>
        <div id="contact" class="flexColumn">
            <p><i class="fas fa-headphones"></i> Your customer service can be reached by phone on <span class="colorRed">09 32 14 00 00</span>, 7 days a week, from 8 a.m. to 9 p.m.</p>
            <span>Also by email : <span class="colorRed">service.IMDbMarvel@gmail.com</span></span>
        </div>

    </main>

<?php
include "../_partials/footer.php";



