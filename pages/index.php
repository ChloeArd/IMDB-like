<?php
$title = "IMDb Marvel";
include "../_partials/header.php";
include "../_partials/menu.php";
?>

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
                <h3 class="red">Up next</h3>
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
            <a href="account.php" class="linkBlue size15">Sign in</a>

            <div id="containerTopPicks" class="flexRow">

            </div>
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
                <a class="buttonRed" href="../pages/account.php"> Sign in to IMDb > </a>
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

            <div id="containerChronology" class="flexRow">

            </div>
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

            <div id="containerXmen" class="flexRow">

            </div>
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

            <div id="containerFantastic" class="flexRow">

            </div>
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

            <div id="containerSpiderMan" class="flexRow">

            </div>
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

            <div id="containerAmazingSpiderMan" class="flexRow">

            </div>
        </div>

        <div id="chronologyFilmMarvelAll" class="flexColumn">
            <a class="films flexColumn titleMargin" id="marvelAll" >
                <div class="flexRow">
                    <div class="borderLeft"></div>
                    <h2>All other Marvel movies</h2>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </a>
            <div id="containerFilmAll" class="flexRow">

            </div>
        </div>

        <h1 id="Explore" class="red">Explore movies & TV shows</h1>


        <div id="comingSoon" class="flexColumn">
            <div class="flexRow titleMargin">
                <div class="borderLeft"></div>
                <h2> Coming soon to theaters </h2>
            </div>
            <h4 class="colorGrey">Trailers for upcoming releases</h4>
        </div>
        <div id="containerComingSoon" class="flexRow">

        </div>

        <div id="recentlyViewed" class="flexColumn">
            <div class="flexRowt titleMargin">
                <div class="borderLeft"></div>
                <h2> Recently viewed </h2>
                <a href="#" id="clear" class="linkBlue">Clear all</a>
            </div>
        </div>

    </main>

<?php
include "../_partials/footer.php";
?>