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
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.ZkOmuqOWNqKDYkMKe2YeAgHaK-&pid=Api&P=0&w=300&h=300", "star" : 4.4, "title" : "Avengers : Infinity War (2018)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.dXkLdHXowR5VL8j6DdCwFAHaK9&pid=Api&P=0&w=300&h=300", "star" : 4.2, "title" : "Avengers : Endgame"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.HmpvO2p1w1sVQQREs2BDLwHaLH&pid=Api&P=0&w=300&h=300", "star" : 4.2, "title" : "Guardians of the Galaxy"},
    {"imageSrc" : "https://tse2.explicit.bing.net/th?id=OIP.xWJqmEU71J30SH_z01-TqwHaLH&pid=Api&P=0&w=300&h=300", "star" : 4.2, "title" : "Avengers"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.RAxOsPPR7Yj9deu4JOK7HQHaK-&pid=Api&P=0&w=300&h=300", "star" : 4.1, "title" : "Guardians of the Galaxie vol.2"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.PrXmctC7S4DpkZzoxWbbYAAAAA&pid=Api&P=0&w=300&h=300", "star" : 4, "title" : "Iron Man"}
];

for (let i = 0; i < filmsTopPicks.length; i++) {
    $("#containerTopPicks").append(
        "<div id='filmTopPick" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ filmsTopPicks[i].imageSrc +"'></a>" +
        "<span><i class='fas fa-star red'></i>" + filmsTopPicks[i].star + "</span>" +
        "<a href='#' class='title'>" + filmsTopPicks[i].title + "</a>" +
        "<a href='#' class='watchList' id='filmWatchList" + [i] + "'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

//Allows you to make the container appear or disappear, containing the films
let nbClik = 0;
$("#topPicks1").click(function () {
    if (nbClik === 0) {
        $("#containerTopPicks").css("display", "none");
        nbClik++;
    }
    else {
        $("#containerTopPicks").css("display", "flex");
        nbClik = 0;
    }
})


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

for (let i = 0; i < chronology.length; i++) {
    let number = i + 1;
    $("#containerChronology").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
            "<a href='#'><img class='imageFilmTopPicks' src='"+ chronology[i].imageSrc +"'></a>" +
            "<span class='number'>" + number + "</span>" +
            "<a href='#' class='title'>" + chronology[i].title + "</a>" +
        "</div>"
    );
}

let nbClik2 = 0;
$("#avengers").click(function () {
    if (nbClik2 === 0) {
        $("#containerChronology").css("display", "none");
        nbClik2++;
    }
    else {
        $("#containerChronology").css("display", "flex");
        nbClik2 = 0;
    }
})

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

for (let i = 0; i < chronologyXmen.length; i++) {
    let number = i + 1;
    $("#containerXmen").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologyXmen[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologyXmen[i].title + "</a>" +
        "</div>"
    );
}

let nbClik3 = 0;
$("#xMen").click(function () {
    if (nbClik3 === 0) {
            $("#containerXmen").css("display", "none");
        nbClik3++;
    }
    else {
        $("#containerXmen").css("display", "flex");
        nbClik3 = 0;
    }
})

// Fantastic 4
let chronologyFantastic = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.Drn_VEdXvdUODGbt-l8xtAHaKS&pid=Api&P=0&w=300&h=300", "title" : "Fantastic Four (2005)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.a1AlFPwO9r0MZpDPxLNoKgHaJ4&pid=Api&P=0&w=300&h=300", "title" : "Fantastic Four: Rise of the Silver Surfer (2007)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.SMF6w_BkUX1fy682L9WGrgHaLK&pid=Api&P=0&w=300&h=300", "title" : "Fantastic Four (2015)"},
];

for (let i = 0; i < chronologyFantastic.length; i++){
    let number = i + 1;
    $("#containerFantastic").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologyFantastic[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologyFantastic[i].title + "</a>" +
        "</div>"
    );
}

let nbClik4 = 0;
$("#fantastic4").click(function () {
    if (nbClik4 === 0) {
        $("#containerFantastic").css("display", "none");
        nbClik4++;
    }
    else {
        $("#containerFantastic").css("display", "flex");
        nbClik4 = 0;
    }
})

// Spider-Man
let chronologySpiderMan = [
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.WGmqRf_FKqAq3VSXVY1P3AHaKO&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man (2002)"},
    {"imageSrc" : "https://tse4.explicit.bing.net/th?id=OIP.oGCjs7nkXo863j9jAMhe0wHaLG&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man 2 (2004)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.E9cK3MLj_0FbnltKBT1hwQHaLH&pid=Api&P=0&w=300&h=300", "title" : "Spider-Man 3 (2007)"},
];

for (let i = 0; i < chronologySpiderMan.length; i++) {
    let number = i + 1;
    $("#containerSpiderMan").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologySpiderMan[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologySpiderMan[i].title + "</a>" +
        "</div>"
    );
}

let nbClik5 = 0;
$("#spiderMan").click(function () {
    if (nbClik5 === 0) {
        $("#containerSpiderMan").css("display", "none");
        nbClik5++;
    }
    else {
        $("#containerSpiderMan").css("display", "flex");
        nbClik5 = 0;
    }
})

// The amazing Spider-Man
let chronologyAmazingSpiderMan = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.Qo4WPu_E2nZJdm5AKqHGMgHaKd&pid=Api&P=0&w=300&h=300", "title" : "The Amazing Spider-Man (2012)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.aCchXBFu_g7hrD_35DnbNQHaLG&pid=Api&P=0&w=300&h=300", "title" : "The Amazing Spider-Man 2 (2014)"}
];

for (let i = 0; i < chronologyAmazingSpiderMan.length; i++) {
    let number = i + 1;
    $("#containerAmazingSpiderMan").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologyAmazingSpiderMan[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='#' class='title'>" + chronologyAmazingSpiderMan[i].title + "</a>" +
        "</div>"
    );
}

let nbClik6 = 0;
$("#amazingSpiderMan").click(function () {
    if (nbClik6 === 0) {
        $("#containerAmazingSpiderMan").css("display", "none");
        nbClik6++;
    }
    else {
        $("#containerAmazingSpiderMan").css("display", "flex");
        nbClik6 = 0;
    }
})

// All other Marvel movies
let chronologyMarvelAll = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.e4DuiSbUNtg46Yz9YjoU5AHaKC&pid=Api&P=0&w=300&h=300", "title" : "Venom (2018)"},
    {"imageSrc" : "https://tse2.explicit.bing.net/th?id=OIP.JkRh8cW8DxZmcCZUbukx5QHaLG&pid=Api&P=0&w=300&h=300", "title" : "Logan (2017)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.EZtUdfhWXeO8Fde5d1peAAHaLH&pid=Api&P=0&w=300&h=300", "title" : "Ghost rider : Spirit of Vengeance (2012)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.IXD9b-Wh6h-GKDDF5hGt0gHaK_&pid=Api&P=0&w=300&h=300", "title" : "Ghost rider : Punisher 2 : War Zone (2009)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.01dG2V8RrhPLCxEonp9pvwHaLH&pid=Api&P=0&w=300&h=300", "title" : "Ghost rider (2007)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.rarc19CwXWfUTsbiJJBz1AAAAA&pid=Api&P=0&w=300&h=300", "title" : "Man-Thing (2005)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.k__8UPx0ODlujfn2HD0OdgHaKx&pid=Api&P=0&w=300&h=300", "title" : "Elektra (2005)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.A130Qsob4q4qzI6NJGbLGwHaLH&pid=Api&P=0&w=300&h=300", "title" : "Blade : Trinity (2004)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.X-e3E0su714muKZW6q1frgHaKj&pid=Api&P=0&w=300&h=300", "title" : "The Punisher (2004)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.GMA0DlHCAE5cYYOYPyeh0QHaK7&pid=Api&P=0&w=300&h=300", "title" : "Daredevil (2003)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.Tmm5YWcUtzcCyXqDoMQhJQHaKg&pid=Api&P=0&w=300&h=300", "title" : "Blade II (2002)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.3jmhkQUwg8mqi433X_UwTwHaJ-&pid=Api&P=0&w=300&h=300", "title" : "Blade (1998)"},

];

for (let i = 0; i < chronologyMarvelAll.length; i++) {
    $("#containerFilmAll").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ chronologyMarvelAll[i].imageSrc +"'></a>" +
        "<a href='#' class='title'>" + chronologyMarvelAll[i].title + "</a>" +
        "</div>"
    );
}

let nbClik7 = 0;
$("#marvelAll").click(function () {
    if (nbClik7 === 0) {
        $("#containerFilmAll").css("display", "none");
        nbClik7++;
    }
    else {
        $("#containerFilmAll").css("display", "flex");
        nbClik7 = 0;
    }
})

// Coming Soon to theaters
let comingSoon = [
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.lcXgv2CJFIoncCR6OIDRKwHaK-&pid=Api&P=0&w=300&h=300", "title" : "Black Widow", "exit" : "May 5, 2021"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.yd_Gp5mcIftqVSAtr4qR5QAAAA&pid=Api&P=0&w=300&h=300", "title" : "Shang-Chi and the Legend of the Ten Rings", "exit" : "July 7, 2021"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.iPxwjvKtXcvvadzxA54-ygHaIs&pid=Api&P=0&w=300&h=300", "title" : "Eternals", "exit" : "November 5, 2021"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.8K2PD4xXb2FehPcm5VkYXAAAAA&pid=Api&P=0&w=300&h=300", "title" : "Untitled Spider-Man : Far From Home Sequel", "exit" : "December 15, 2021"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.qSaqgX7yqXKQrMfT9OnxLgHaK-&pid=Api&P=0&w=300&h=300", "title" : "Doctor Strange in the Multiverse of Madness", "exit" : "March 23, 2022"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.msYo9IrII3mMPJ0EIP7whwHaLB&pid=Api&P=0&w=300&h=300", "title" : "Thor : Love and Thunder", "exit" : "May 4, 2022"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.2vT-uIH0MP4kH8YeQoZjNgHaLA&pid=Api&P=0&w=300&h=300", "title" : "Black Panther 2", "exit" : "July 6, 2022"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.Y8ZxZIPLhaGBij439zSZ5gHaJQ&pid=Api&P=0&w=300&h=300", "title" : "Captain Marvel 2", "exit" : "November 9, 2022"},
    {"imageSrc" : "https://fr.web.img3.acsta.net/c_310_420/pictures/20/12/11/11/36/0677221.jpg", "title" : "Ant-Man and the Wasp : Quantumania", "exit" : "2023"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.QcCtGcp6BDnkffryBkJH2wHaK9&pid=Api&P=0&w=300&h=300", "title" : "Guardians of the Galaxy Vol. 3", "exit" : "2023"},
    {"imageSrc" : "https://www.unificationfrance.com/IMG/jpg/mahersala-blade.jpg", "title" : "Blade", "exit" : "2023"},

];

for (let i = 0; i < comingSoon.length; i++) {
    $("#containerComingSoon").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='#'><img class='imageFilmTopPicks' src='"+ comingSoon[i].imageSrc +"'></a>" +
        "<span class='exit colorGrey'> Release date : " + comingSoon[i].exit + "</span>" +
        "<a href='#' class='title'>" + comingSoon[i].title + "</a>" +
        "</div>"
    );
}
