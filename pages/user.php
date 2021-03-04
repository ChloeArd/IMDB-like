<?php
session_start();

if (isset($_SESSION['username']) && isset($_SESSION['password'])) {
    $title = "IMDb Marvel user";
    include "../_partials/header.php";
    include "../_partials/menu.php";
?>
    <main>
        <h1 id="hello"> Hello, <?=$_SESSION['firstname'] . ' ' . $_SESSION['lastname'] ?> !</h1>

        <form action="../public/logout.php" method="post">
            <button id="enter" type="submit" name="button">Disconnection</button>
        </form>
    </main>



<?php
include "../_partials/footer.php";
}