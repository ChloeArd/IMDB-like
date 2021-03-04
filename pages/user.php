<?php
session_start();

if (isset($_SESSION['username']) && isset($_SESSION['password'])) {
    $title = "IMDb Marvel user";
    include "../_partials/header.php";
    include "../_partials/menu.php";
?>
    <main class="flexColumn userMain">
        <h1 id="hello"> Hello, <?=$_SESSION['firstname'] . ' ' . $_SESSION['lastname'] ?> !</h1>

        <div id="allInformationsUser">
            <h2>Account</h2>
            <div id="informationsUser" class="borderGrey">Your informations</div>
            <div class="borderGrey flexRow"><?=$_SESSION['firstname']?><a href="../CRUD/updateUser.php?id=<?= $_SESSION['id']?>"><i class="fas fa-user-edit"></i></a></div>
            <div class="borderGrey flexRow"><?=$_SESSION['lastname']?><a href="../CRUD/updateUser.php?id=<?= $_SESSION['id']?>"><i class="fas fa-user-edit"></i></a></div>
            <div class="borderGrey flexRow"><?=$_SESSION['username']?><a href="../CRUD/updateUser.php?id=<?= $_SESSION['id']?>"><i class="fas fa-user-edit"></i></a></div>
            <div class="borderGrey flexRow"><?=$_SESSION['email']?><a href="../CRUD/updateUser.php?id=<?= $_SESSION['id']?>"><i class="fas fa-user-edit"></i></a></div>
            <div class="borderGrey flexRow"> Password : *******<a href="../CRUD/updateUser.php?id=<?= $_SESSION['id']?>"><i class="fas fa-user-edit"></i></a></div>
            <div class="borderGrey flexRow">
                <form action="../public/logout.php" method="post">
                    <button class="linkBlue" id="disconnection" type="submit" name="button">Disconnection</button>
                </form>
            </div>
            <div class="borderGrey flexRow"><a href="../CRUD/deleteUser.php?id=<?= $_SESSION['id']?>" class="colorRed" id="disconnection" type="submit">Delete account</a></div>

        </div>


    </main>



<?php
include "../_partials/footer.php";
}