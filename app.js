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
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.RAxOsPPR7Yj9deu4JOK7HQHaK-&pid=Api&P=0&w=300&h=300", "star" : 7.6, "title" : "Guardians of the Galaxie vol.2"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.vsy2Wik0cXdOrOU0A80CeQHaK-&pid=Api&P=0&w=300&h=300", "star" : 7.8, "title" : "Black Panther"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.dXkLdHXowR5VL8j6DdCwFAHaK9&pid=Api&P=0&w=300&h=300", "star" : 8.5, "title" : "Avengers : Endgame"}
];

function createFilmsTopPicks (i) {
    $("#containerTopPicks").append(
        "<div id='filmTopPick" + [i] + "' class='flexColumn backFilm'>" +
            "<a href='#'><img class='imageFilmTopPicks' src='"+ filmsTopPicks[i].imageSrc +"'></a>" +
            "<span><i class='fas fa-star red'></i>" + filmsTopPicks[i].star + "</span>" +
            "<a href='#' class='title'>" + filmsTopPicks[i].title + "</a>" +
            "<a href='#' class='watchList' id='filmWatchList" + [i] + "'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
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
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.yQwqeAhytVfYDWfbJLYC5gHaK-&pid=Api&P=0&w=300&h=300", "title" : "Captain America : The winter woldier (2014)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.pYZChZzBUT3q4EBoDXFA-QHaK-&pid=Api&P=0&w=300&h=300", "title" : "The Guardians of the Galaxy (2014)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.RAxOsPPR7Yj9deu4JOK7HQHaK-&pid=Api&P=0&w=300&h=300", "title" : "The Guardians of the Galaxy vol.2 (2017)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP._8Y0cksUhmWSuqOYaUpvHgHaLH&pid=Api&P=0&w=300&h=300", "title" : "Avengers : Age of Ultron (2015)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.PHyvg5iJaa8oqUoKuntVIgAAAA&pid=Api&P=0&w=300&h=300", "title" : "Ant-Man (2015)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.G4h1YdR4wD7zZ0HHfZRJlgHaKf&pid=Api&P=0&w=300&h=300", "title" : "Civil War (2016)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.QxKyIFG9BRZkBpNeWoG5AwHaK-&pid=Api&P=0&w=300&h=300", "title" : "Black Widow (2020)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.WBVvgtLCkTKNXLuxPQzM4QHaLH&pid=Api&P=0&w=300&h=300", "title" : "Black Panther (2018)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.QHKuZu2_e7kxztB9T6x0lwHaLH&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man : Homecoming (2017)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.5voBPa5KkgK5VHuzEMP6tAHaKj&pid=Api&P=0&w=300&h=300", "title" : "Ant-Man and The Wasp (2018)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.H3M3cXb_Mr1qAWetlLmKkgAAAA&pid=Api&P=0&w=300&h=300", "title" : "Doctor Strange (2016)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.iBhfFDxIeeXX6rTHxpWiJgHaLH&pid=Api&P=0&w=300&h=300", "title" : "Thor : Ragnarok (2017)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.ZkOmuqOWNqKDYkMKe2YeAgHaK-&pid=Api&P=0&w=300&h=300", "title" : "Avengers : Infinity War (2018)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.dXkLdHXowR5VL8j6DdCwFAHaK9&pid=Api&P=0&w=300&h=300", "title" : "Avengers : Endgame (2019)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.NN8mkBLR_ShwpVeHvcQ54wHaJQ&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man : Far from home (2019)"},

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
createChronologyFilm(10);
createChronologyFilm(11);
createChronologyFilm(12);
createChronologyFilm(13);
createChronologyFilm(14);
createChronologyFilm(15);
createChronologyFilm(16);
createChronologyFilm(17);
createChronologyFilm(18);
createChronologyFilm(19);
createChronologyFilm(20);
createChronologyFilm(21);
createChronologyFilm(22);
createChronologyFilm(23);


let chronologyXmen = [
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.RwsWbtBY6uBQS1cSr0be-AAAAA&pid=Api&P=0&w=300&h=300", "title" : "X-Men : First Class  (2011)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.GFs4y9mVHkBcpwXuuLa7bAHaJ6&pid=Api&P=0&w=300&h=300", "title" : "X-Men Origins : Wolverine (2009)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.k8cFs3SoqaJ1_1sxrw7HhQHaLH&pid=Api&P=0&w=300&h=300", "title" : "X-Men (2000)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.6bPlQ1-_GdnkzyPe8XiVwQHaLH&pid=Api&P=0&w=300&h=300", "title" : "X-Men 2 (2003)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.C875m7convYZR5L1-UMFegHaKj&pid=Api&P=0&w=300&h=300", "title" : "X-Men : The last stand (2006)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.w3DYONspOd7QVqdWEAMZmQHaKj&pid=Api&P=0&w=300&h=300", "title" : "The Wolverine (2013)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.I4wpWLxu2P-jep1I4Th8KwHaJ3&pid=Api&P=0&w=300&h=300", "title" : "X-Men : Days of Future Past (2014)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.H4Gc8G4mlyjj5xJagqITjQHaKj&pid=Api&P=0&w=300&h=300", "title" : "X-Men : Apocalypse (2016)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.ng61IWqtUV9bxuw7P78QJwAAAA&pid=Api&P=0&w=300&h=300", "title" : "Deadpool (2016)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.ND-EK9l01qVW9PuV5u4eDAHaK8&pid=Api&P=0&w=300&h=300", "title" : "Deadpool 2 (2018)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.i6PaHWEJYYMxYhpunHVGXgHaKz&pid=Api&P=0&w=300&h=300", "title" : "X-Men : Dark Phoenix (2019)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.lao4-o4Si6QeTRnDrYtbHQAAAA&pid=Api&P=0&w=300&h=300", "title" : "The New Mutants (2020)"},
];

function createChronologyXmen (i) {
    let number = i + 1;
    $("#containerXmen").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologyXmen[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologyXmen[i].title + "</a>" +
        "</div>"
    );
}

createChronologyXmen(0);
createChronologyXmen(1);
createChronologyXmen(2);
createChronologyXmen(3);
createChronologyXmen(4);
createChronologyXmen(5);
createChronologyXmen(6);
createChronologyXmen(7);
createChronologyXmen(8);
createChronologyXmen(9);
createChronologyXmen(10);
createChronologyXmen(11);

// Fantastic 4
let chronologyFantastic = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.Drn_VEdXvdUODGbt-l8xtAHaKS&pid=Api&P=0&w=300&h=300", "title" : "Fantastic Four (2005)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.a1AlFPwO9r0MZpDPxLNoKgHaJ4&pid=Api&P=0&w=300&h=300", "title" : "Fantastic Four: Rise of the Silver Surfer (2007)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.SMF6w_BkUX1fy682L9WGrgHaLK&pid=Api&P=0&w=300&h=300", "title" : "Fantastic Four (2015)"},
];

function createChronologyFantastic (i) {
    let number = i + 1;
    $("#containerFantastic").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologyFantastic[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologyFantastic[i].title + "</a>" +
        "</div>"
    );
}

createChronologyFantastic(0);
createChronologyFantastic(1);
createChronologyFantastic(2);

// Spider-Man
let chronologySpiderMan = [
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.WGmqRf_FKqAq3VSXVY1P3AHaKO&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man (2002)"},
    {"imageSrc" : "https://tse4.explicit.bing.net/th?id=OIP.oGCjs7nkXo863j9jAMhe0wHaLG&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man 2 (2004)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.E9cK3MLj_0FbnltKBT1hwQHaLH&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man 3 (2007)"},
];

function createChronologySpiderMan (i) {
    let number = i + 1;
    $("#containerSpiderMan").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologySpiderMan[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologySpiderMan[i].title + "</a>" +
        "</div>"
    );
}

createChronologySpiderMan(0);
createChronologySpiderMan(1);
createChronologySpiderMan(2);

// The amazing Spider-Man
let chronologyAmazingSpiderMan = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.Qo4WPu_E2nZJdm5AKqHGMgHaKd&pid=Api&P=0&w=300&h=300", "title" : "The Amazing Spider-Man (2012)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.aCchXBFu_g7hrD_35DnbNQHaLG&pid=Api&P=0&w=300&h=300", "title" : "The Amazing Spider-Man 2 (2014)"}
];

function createChronologyAmazingSpiderMan (i) {
    let number = i + 1;
    $("#containerAmazingSpiderMan").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologyAmazingSpiderMan[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologyAmazingSpiderMan[i].title + "</a>" +
        "</div>"
    );
}

createChronologyAmazingSpiderMan(0);
createChronologyAmazingSpiderMan(1);