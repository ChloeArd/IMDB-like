<?php
$title = "IMDb Marvel";
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

<header>

    <!-- Menu responsive -->
    <a href="#" id="menuResponsive"><i class="fas fa-bars"></i></a>
    <div id="menuResponsive2" class="flexColumn">
        <div class="flexRow" id="topMenu">
            <button id="closeMenuResponsive" class="colorWhite size15"> x </button>
        </div>
        <hr class="dropdown-divider">
        <button id="moviesResponsive"><i class="fas fa-film red"></i>Movies <span id="arrow-top"><i class="fas fa-angle-down"></i></span></button>
        <div id="contenuMovies" class="flexColumn"></div>
        <button id="tvShowsResponsive"><i class="fas fa-tv red"></i>TV Shows <span id="arrow-top2"><i class="fas fa-angle-down"></i></span></button>
        <div id="contenuTvShows" class="flexColumn"></div>
        <button id="watchResponsive"><i class="fas fa-play-circle red"></i>Watch <span id="arrow-top3"><i class="fas fa-angle-down"></i></span></button>
        <div id="contenuWatch" class="flexColumn"></div>
        <button id="awardsEventsResponsive"><i class="far fa-star red"></i>Awards & Events <span id="arrow-top4"><i class="fas fa-angle-down"></i></span></button>
        <div id="contenuAwards" class="flexColumn"></div>
        <button id="celebsResponsive"><i class="fas fa-user-friends red"></i>Celebs <span id="arrow-top5"><i class="fas fa-angle-down"></i></span></button>
        <div id="contenuCelebs" class="flexColumn"></div>
        <button id="communityResponsive"><i class="fas fa-globe-europe red"></i>Community <span id="arrow-top6"><i class="fas fa-angle-down"></i></span></button>
        <div id="contenuCommunity" class="flexColumn"></div>
    </div>


    <a href="index.php"><img id="logo_IMDb" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb"></a>
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
    <a id="watchlist" href="#"><i class="fas fa-plus-circle"></i> Watchlist</a>
    <a href="pages/account.php" id="sign_in"><i class="fas fa-user"></i> Sign In</a>
    <a href="pages/contact.php"><i class="fas fa-phone"></i> Contact</a>
</header>

<!-- Fenetre modale -->
<div id="modal">
    <div id="top" class="flexRow">
        <a href="index.php"><img id="logo_IMDb2" src="https://cdn.discordapp.com/attachments/689017273050202134/813127452494397440/logo_small.png" alt="logo IMDb"></a>
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


<main>
    <div id="upNext" class="flexRow">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://media.gqmagazine.fr/photos/5c863f831109c559be9764a1/master/w_1280%2cc_limit/354334.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg" class="d-block w-100" alt="Spider-Man : Homecoming">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 class="colorWhite">"Spider-Man : Homecoming"</h2>
                        <h3> Action, Science fiction</h3>
                        <h5>2h 13min</h5>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://media.gqmagazine.fr/photos/5c8641a21109c5befa9764aa/master/w_1280%2cc_limit/307806.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg" class="d-block w-100" alt="Ant-Man">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 class="colorWhite">"Ant-Man"</h2>
                        <h3> Action, Science fiction</h3>
                        <h5>1h 57min</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://media.gqmagazine.fr/photos/5c863e8b4a07942c87c6a77c/master/w_1280%2cc_limit/18887911.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg" class="d-block w-100" alt="Iron Man">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 class="colorWhite">"Iron Man"</h2>
                        <h3> Action, Science fiction</h3>
                        <h5>2h 06min</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://www.comingsoon.net/assets/uploads/2019/11/Black-Widow-768x432.jpg" class="d-block w-100" alt="Black widow">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 class="colorWhite">"Black Widow"</h2>
                        <h3> Action, Science fiction</h3>
                        <h5>2h 13min</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://media.gqmagazine.fr/photos/5c86405f1109c5d0f19764a3/master/w_1280%2cc_limit/286337.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg" class="d-block w-100" alt="Doctor Strange">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 class="colorWhite">"Doctor Strange"</h2>
                        <h3> Action, Fantastique, Aventure</h3>
                        <h5>1h 55min</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://media.gqmagazine.fr/photos/5c8642994a0794521dc6a793/master/w_1280%2cc_limit/18925840.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg" class="d-block w-100" alt="Hulk">
                    <div class="carousel-caption d-none d-md-block">
                        <h2 class="colorWhite">"Hulk"</h2>
                        <h3> Action, Science fiction</h3>
                        <h5>2h 20min</h5>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>

        <div id="nextFilm">
            <h3 id="upNext2" class="red">Up next</h3>
            <div id="containerNextFilm" class="flexColumn">
                <div class="filmsNext flexRow">
                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg" alt="Film Ant-Man">
                    <a href="https://www.youtube.com/watch?v=pWdKf3MneyI" class="films"><i class="far fa-play-circle"></i> 1h 57min
                        <p>"Ant-Man"</p>
                        <p>Action, Science fiction</p>
                    </a>
                </div>
                <div class="filmsNext flexRow">
                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg" alt="Film Iron Man">
                    <a href="https://www.youtube.com/watch?v=8ugaeA-nMTc" class="films"><i class="far fa-play-circle"></i> 2h 06min
                        <p>"Iron Man"</p>
                        <p>Action, Science fiction</p>
                    </a>
                </div>
                <div class="filmsNext flexRow">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.lcXgv2CJFIoncCR6OIDRKwHaK-&pid=Api&P=0&w=300&h=300" alt="Film Black Widow">
                    <a href="https://www.youtube.com/watch?v=RxAtuMu_ph4" class="films"><i class="far fa-play-circle"></i> 2h 13min
                        <p>"Black Widow"</p>
                        <p>Action, Science fiction</p>
                    </a>
                </div>
            </div>

        </div>
    </div>

    <div id="whatToWatch" class="flexRow">
        <h1 class="red">What to watch</h1>
        <a class="buttonRed margin50" href="#marvelCategories"> Browse our What to Watch page > </a>
    </div>

    <div id="topPicks" class="flexColumn">
        <a class="films flexColumn titleMargin" id="topPicks1">
            <div class="flexRow">
                <div class="borderLeft"></div>
                <h2>Top Picks </h2>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div>
                <h4 class="colorGrey">Most Viewed and Recommended Marvel Movies</h4>
            </div>
        </a>
        <a href="pages/account.php" class="linkBlue size15">Sign in</a>
        <div id="containerTopPicks" class="flexRow"></div>
    </div>

    <div id="yourWatchlist" class="flexColumn">
        <div class="flexRow titleMargin">
            <div class="borderLeft"></div>
            <h2>From your Watchlist </h2>
        </div>

        <div class="flexColumn" id="ajoutList">
            <i class="fas fa-plus-circle"></i>
            <h3 class="colorWhite">Sign in to access your Watchlist</h3>
            <h4 class="colorGrey"> Save shows and movies to keep track of what you want to watch</h4>
            <a class="buttonRed" href="pages/account.php"> Sign in to IMDb Marvel > </a>
        </div>
    </div>

    <h1 id="marvelCategories" class="red">Marvel Categories</h1>

    <div id="chronologyFilmMarvel" class="flexColumn">
        <a class="films flexColumn titleMargin" id="avengers" >
            <div class="flexRow">
                <div class="borderLeft"></div>
                <h2>Avengers</h2>
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
        <h4 class="colorGrey">Chronological order for watching Avengers movies (no release date)</h4>
        <div id="containerChronology" class="flexRow"></div>
    </div>

    <div id="chronologyFilmXmen" class="flexColumn">
        <a class="films flexColumn titleMargin" id="xMen" >
            <div class="flexRow">
                <div class="borderLeft"></div>
                <h2>X-Men</h2>
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
        <h4 class="colorGrey">Chronological order for watching X-Men movies (no release date)</h4>
        <div id="containerXmen" class="flexRow"></div>
    </div>

    <div id="chronologyFilmFantastic" class="flexColumn">
        <a class="films flexColumn titleMargin" id="fantastic4" >
            <div class="flexRow">
                <div class="borderLeft"></div>
                <h2>Fantastic Four</h2>
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
        <h4 class="colorGrey">Chronological order for watching Fantastic 4 movies (no release date)</h4>
        <div id="containerFantastic" class="flexRow"></div>
    </div>

    <div id="chronologyFilmSpiderMan" class="flexColumn">
        <a class="films flexColumn titleMargin" id="spiderMan">
            <div class="flexRow">
                <div class="borderLeft"></div>
                <h2>Spider-Man</h2>
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
        <h4 class="colorGrey">Chronological order for watching Spider-Man movies (no release date)</h4>
        <div id="containerSpiderMan" class="flexRow"></div>
    </div>

    <div id="chronologyFilmAmazingSpiderMan" class="flexColumn">
        <a class="films flexColumn titleMargin" id="amazingSpiderMan">
            <div class="flexRow">
                <div class="borderLeft"></div>
                <h2>The Amazing Spider-Man</h2>
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
        <h4 class="colorGrey">Chronological order for watching The Amazing Spider-Man movies (no release date)</h4>
        <div id="containerAmazingSpiderMan" class="flexRow"></div>
    </div>

    <div id="chronologyFilmMarvelAll" class="flexColumn">
        <a class="films flexColumn titleMargin" id="marvelAll" >
            <div class="flexRow">
                <div class="borderLeft"></div>
                <h2>All other Marvel movies</h2>
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
        <div id="containerFilmAll" class="flexRow"></div>
    </div>

    <h1 id="Explore" class="red">Explore movies & TV shows</h1>

    <div id="comingSoon" class="flexColumn">
        <div class="flexRow titleMargin">
            <div class="borderLeft"></div>
            <h2> Coming soon to theaters </h2>
        </div>
        <h4 class="colorGrey">Trailers for upcoming releases</h4>
    </div>

    <div id="containerComingSoon" class="flexRow"></div>

    <div id="recentlyViewed" class="flexColumn">
        <div class="flexRowt titleMargin">
            <div class="borderLeft"></div>
            <h2> Recently viewed </h2>
            <a href="#" id="clear" class="linkBlue">Clear all</a>
        </div>
    </div>

</main>

<footer class="flexColumn">
    <div class="row flexRow">
        <a class="socialNetwork red" href=""><i class="fab fa-facebook"></i></a>
        <a class="socialNetwork red" href="#"><i class="fab fa-instagram"></i></a>
        <a class="socialNetwork red" href="#"><i class="fab fa-twitch"></i></a>
        <a class="socialNetwork red" href="#"><i class="fab fa-twitter"></i></a>
        <a class="socialNetwork red" href="#"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="row flexRow">
        <a href="#">Get the IMDb App <i class="fas fa-share-square"></i></a>
        <a href="#"> Help <i class="fas fa-share-square"></i></a>
        <a href="#"> Site Index <i class="fas fa-share-square"></i></a>
        <a href="#"> IMDbPro <i class="fas fa-share-square"></i></a>
        <a href="#"> Box Office Mojo <i class="fas fa-share-square"></i></a>
        <a href="#"> IMDb Developer <i class="fas fa-share-square"></i></a>
        <a href="#"> Press Room</a>
        <a href="#">Advertising <i class="fas fa-share-square"></i></a>
        <a href="#"> Jobs <i class="fas fa-share-square"></i></a>
        <a href="#"> Conditon of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Interest-Based Ads <i class="fas fa-share-square"></i></a>
    </div>

    <p id="amazon"> an <i class="fab fa-amazon"></i> company</p>
    <p id="end"><i class="far fa-copyright"></i> 2021 by IMDb-Marvel.com, Inc.</p>
</footer>

<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="app.js"></script>

</body>
</html>