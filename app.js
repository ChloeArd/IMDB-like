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
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.RAxOsPPR7Yj9deu4JOK7HQHaK-&pid=Api&P=0&w=300&h=300", "star" : 7.6, "title": "Guardians of the Galaxie vol. 2"}
];

function createFilmsTopPicks (i) {
    $("#containerTopPicks").append(
        "<div id='filmTopPick" + [i] + "' class='flexColumn backFilm'>" +
            "<a href='#'><img class='imageFilmTopPicks' src='"+ filmsTopPicks[i].imageSrc +"'></a>" +
        "<span><i class='fas fa-star orange'></i>" + filmsTopPicks[i].star + "</span>" +
            "<a href='#' class='title'>" + filmsTopPicks[i].title + "</a>" +
            "<a href='#' class='watchList' id='filmWatchList" + [i] + "'><i class=\"fas fa-plus\"></i> Watchlist</a> "+
        "</div>"
    );
}

createFilmsTopPicks(0);
createFilmsTopPicks(1);
createFilmsTopPicks(2);
createFilmsTopPicks(3);

