<header>
    <a href="../pages/index.php"><img id="logo_IMDb" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb"></a>
    <a href="#" id="menu"><i class="fas fa-bars"></i>Menu</a>
    <div id="inputs" class="input-group mb-3">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" id="titleMenu" aria-expanded="false">All</button>
        <ul id="menuDeroulant" class="dropdown-menu">
            <li><a id="search-All" href="#"><i class="fas fa-search red"></i>All</a></li>
            <li><a href="#"><i class="fas fa-film"></i> Titles</a></li>
            <li><a  href="#"><i class="fas fa-tv"></i> TV Episodes</a></li>
            <li><a href="#"><i class="fas fa-user-friends"></i> Celebs</a></li>
            <li><a href="#"><i class="far fa-building"></i> Companies</a></li>
            <li><a  href="#"> <i class="far fa-keyboard"></i> Keywords</a></li>
            <li><hr class="dropdown-divider"></li>
            <li ><a  href="#"><i class="fas fa-search-plus"></i> Advanced Search > </a></li>
        </ul>
        <input id="search_IMDb" type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Search IMDb">
        <button id="enter" class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
    </div>
    <a href="#"><i class="fas fa-plus-circle"></i> Watchlist</a>
    <a href="../pages/account.php" id="sign_in"><i class="fas fa-user"></i> Sign In</a>
    <a href="../pages/contact.php"><i class="fas fa-phone"></i> Contact</a>
</header>

<!-- Fenetre modale -->
<div id="modal">
    <div id="top" class="flexRow">
        <a href="../pages/index.php"><img id="logo_IMDb2" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb"></a>
        <button id="closeModal"><i class="fas fa-times"></i></button>
    </div>

    <div id="row" class="flexRow">
        <div id="column1" class="flexColumn">
            <div class="genre flexColumn" id="movies">
                <h2><i class="fas fa-film red"></i>Movies</h2>
            </div>
            <div class="genre flexColumn" id="celebs">
                <h2><i class="fas fa-user-friends red"></i>Celebs</h2>
            </div>
        </div>

        <div id="column2" class="flexColumn">
            <div class="genre flexColumn" id="TVShows">
                <h2><i class="fas fa-tv red"></i>TV Shows</h2>
            </div>
            <div class="genre flexColumn" id="watch">
                <h2><i class="fas fa-play-circle red"></i>Watch</h2>
            </div>
        </div>

        <div id="column3" class="flexColumn">
            <div class="genre flexColumn" id="awardsEvents">
                <h2><i class="far fa-star red"></i>Awards & Events</h2>
            </div>
            <div class="genre flexColumn" id="community">
                <h2><i class="fas fa-globe-europe red"></i>Community</h2>
            </div>
        </div>
    </div>
</div>
