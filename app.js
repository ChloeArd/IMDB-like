let menu = document.getElementById("menu");
let modal = document.getElementById("modal");
let closeModal = document.getElementById("closeModal");

menu.addEventListener("click", function () {
    modal.style.display = "flex";
})

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
})

let movies = ["Release Calendar", "DVD & Blu-ray Releases", "Top Rated Movies", "Most Popular Movies", "Browse Movies by Genre", "Top Box Office", "Showtimes & Tickets", "In Theaters", "Coming Soon", "Movie News", "India Movie Spotlight"];
let titleMovies = document.getElementById("movies");

for (let i = 0; i < movies.length; i++) {
    let linkMovies = document.createElement("a");
    linkMovies.id = "linkMovies"+[i];
    linkMovies.innerHTML = movies[i];
    linkMovies.href = "#";
    titleMovies.appendChild(linkMovies);
}

let TVShows = ["What's on TV & Streaming", "Top Rated Shows", "Most Popular Shows", "Browse TV Shows by Genre", "TV News", "India TV Spotlight"];
let titleTV = document.getElementById("TVShows");

for (let i = 0; i < TVShows.length; i++) {
    let link = document.createElement("a");
    link.id = "linkTVShows"+[i];
    link.innerHTML = TVShows[i];
    link.href = "#";
    titleTV.appendChild(link);
}

let awardEvents = ["Oscars", "Best Picture Winners", "Golden Globes", "Emmys", "Black History Month", "STARmeter Awards", "San Diego Comic-Con", "New-York Comic-Con", "Sundance Film Festival", "Toronto Int'l Film Festival", "Awards Central", "Festival Central", "All Events"];
let titleAE = document.getElementById("awardsEvents");

for (let i = 0; i < awardEvents.length; i++) {
    let link = document.createElement("a");
    link.id = "linkAE"+[i];
    link.innerHTML = awardEvents[i];
    link.href = "#";
    titleAE.appendChild(link);
}

let celebs = ["Born Today", "Most Popular Celebs", "Celebrity News"];
let titleCelebs = document.getElementById("celebs");

for (let i = 0; i < celebs.length; i++) {
    let link = document.createElement("a");
    link.id = "celebs"+[i];
    link.innerHTML = celebs[i];
    link.href = "#";
    titleCelebs.appendChild(link);
}

let watch = ["Watch to Watch", "Latest Trailers", "IMDb Originals", "Imdb Picks", "IMDb Podcasts"];
let titleWatch = document.getElementById("watch");

for (let i = 0; i < watch.length; i++) {
    let link = document.createElement("a");
    link.id = "watch"+[i];
    link.innerHTML = watch[i];
    link.href = "#";
    titleWatch.appendChild(link);
}

let community = ["Help Center", "Contributor Zone", "Polls"];
let titleCommunity = document.getElementById("community");

for (let i = 0; i < community.length; i++) {
    let link = document.createElement("a");
    link.id = "community"+[i];
    link.innerHTML = community[i];
    link.href = "#";
    titleCommunity.appendChild(link);
}


// Top picks, utiliser Jquery
let filmsTopPicks = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.iBhfFDxIeeXX6rTHxpWiJgHaLH&pid=Api&P=0&w=300&h=300", "star" : 8.1, "title" : "Thor Ragnarok"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.nbiKC4SfvhE7v_TwIbH4RgHaK-&pid=Api&P=0&w=300&h=300", "star" : 8.0, "title" : "WandaVison"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.HmpvO2p1w1sVQQREs2BDLwHaLH&pid=Api&P=0&w=300&h=300", "star" : 8.0, "title" : "Guardians of the Galaxy"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.RAxOsPPR7Yj9deu4JOK7HQHaK-&pid=Api&P=0&w=300&h=300", "star" : 7.6, "title" : "Guardians of the Galaxie vol. 2"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.vsy2Wik0cXdOrOU0A80CeQHaK-&pid=Api&P=0&w=300&h=300", "star" : 7.8, "title" : "Black Panther"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.dXkLdHXowR5VL8j6DdCwFAHaK9&pid=Api&P=0&w=300&h=300", "star" : 8.5, "title" : "Avengers : Endgame"}
];

function createFilmsTopPicks (i) {
    $("#containerTopPicks").append(
        "<div id='filmTopPick" + [i] + "' class='flexColumn backFilm'>" +
            "<a href='#'><img class='imageFilmTopPicks' src='"+ filmsTopPicks[i].imageSrc +"'></a>" +
            "<span><i class='fas fa-star red'></i>" + filmsTopPicks[i].star + "</span>" +
            "<a href='#' class='title'>" + filmsTopPicks[i].title + "</a>" +
            "<a href='#' class='watchList' id='filmWatchList" + [i] + "'><i class=\"fas fa-plus\"></i> Watchlist</a> "+
        "</div>"
    );
}

createFilmsTopPicks(0);
createFilmsTopPicks(1);
createFilmsTopPicks(2);
createFilmsTopPicks(3);
createFilmsTopPicks(4);
createFilmsTopPicks(5)


// Chronological movies marvel
let chronology = [
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.gZisKpIJHw7DvNfOZKVY7QHaKj&pid=Api&P=0&w=300&h=300", "title" : "Captain America : First Avenger (2011)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.TmwtelV4DVHM4XWckTXqnwHaLH&pid=Api&P=0&w=300&h=300", "title" : "Captain Marvel (2019)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.PrXmctC7S4DpkZzoxWbbYAAAAA&pid=Api&P=0&w=300&h=300", "title" : "Iron Man (2008)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.dCzFC-INXIYalEQs702e_wHaLH&pid=Api&P=0&w=300&h=300", "title" : "Iron Man 2 (2010)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.-5pdYhXQUENF--njd-uzqAHaLH&pid=Api&P=0&w=300&h=300", "title" : "Thor (2011)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.QlmPp2qcFaioUi-EwE6DBwHaLH&pid=Api&P=0&w=300&h=300", "title" : "The incredible Hulk (2008)"},
    {"imageSrc" : "https://tse2.explicit.bing.net/th?id=OIP.zjUuKLnstAvgHHPGX7JsNgHaLH&pid=Api&P=0&w=300&h=300", "title" : "Avengers (2012)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.u_jYWej4Kn5VC-fm8HBcxQHaLV&pid=Api&P=0&w=300&h=300", "title" : "Iron Man 3 (2013)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.9r8lZp30wow8oCInY0MFbAHaJ3&pid=Api&P=0&w=300&h=300", "title" : "Thor : The dark world (2013)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.yQwqeAhytVfYDWfbJLYC5gHaK-&pid=Api&P=0&w=300&h=300", "title" : "Captain America : The winter woldier  (2014)"},

];

function createChronologyFilm (i) {
    let number = i + 1;
    $("#containerChronology").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
            "<a href='#'><img class='imageFilmTopPicks' src='"+ chronology[i].imageSrc +"'></a>" +
            "<span class='number'>" + number + "</span>" +
            "<a href='#' class='title'>" + chronology[i].title + "</a>" +
        "</div>"
    );
}

createChronologyFilm(0);
createChronologyFilm(1);
createChronologyFilm(2);
createChronologyFilm(3);
createChronologyFilm(4);
createChronologyFilm(5);
createChronologyFilm(6);
createChronologyFilm(7);
createChronologyFilm(8);
createChronologyFilm(9);
