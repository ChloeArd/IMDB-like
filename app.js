// menu deroulant

let menu = document.getElementById("menu");
let modal = document.getElementById("modal");
let closeModal = document.getElementById("closeModal");

menu.addEventListener("click", function () {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

let movies = ["Release Calendar", "DVD & Blu-ray Releases", "Top Rated Movies", "Most Popular Movies", "Browse Movies by Genre", "Top Box Office", "Showtimes & Tickets", "In Theaters", "Coming Soon", "Movie News", "India Movie Spotlight"];
let titleMovies = document.getElementById("movies");

for (let i = 0; i < movies.length; i++) {
    let linkMovies = document.createElement("a");
    linkMovies.id = "linkMovies"+[i];
    linkMovies.innerHTML = movies[i];
    linkMovies.href = "#";
    titleMovies.appendChild(linkMovies);
}

let tvShows = ["What's on TV & Streaming", "Top Rated Shows", "Most Popular Shows", "Browse TV Shows by Genre", "TV News", "India TV Spotlight"];
let titleTV = document.getElementById("TVShows");

for (let i = 0; i < tvShows.length; i++) {
    let link = document.createElement("a");
    link.id = "linkTVShows"+[i];
    link.innerHTML = tvShows[i];
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


// Responsive menu
let modalResponsive = document.getElementById("menuResponsive2");

document.getElementById("menuResponsive").addEventListener("click", function () {
    modalResponsive.style.display = "block";
});

document.getElementById("closeMenuResponsive").addEventListener("click", function () {
    modalResponsive.style.display = "none";
});



let movies2 = ["Release Calendar", "Top Rated Movies", "Most Popular Movies", "Top Box Office", "Showtimes & Tickets", "Coming Soon", "Movie News", "India Movie Spotlight"];
let contenuMovies = document.getElementById("contenuMovies");

for (let i = 0; i < movies2.length; i++) {
    let link = document.createElement("a");
    link.innerHTML = movies2[i];
    link.style.width = "100%";
    link.style.padding = "10px 0";
    link.href = "#";
    contenuMovies.appendChild(link);
}

let nbClick0 = 0;
$("#moviesResponsive").click( function () {
    if (nbClick0 === 0) {
        $("#contenuMovies").css("display", "flex");
        $("#moviesResponsive").css("color", "#E62A04");
        $("#arrow-top").html("<i class=\"fas fa-angle-up\"></i>");
        nbClick0++;
    }
    else {
        $("#contenuMovies").css("display", "none");
        $("#moviesResponsive").css("color", "white");
        $("#arrow-top").html("<i class=\"fas fa-angle-down\"></i>");
        nbClick0 = 0;
    }
});


let tvShows2 = ["What's on TV & Streaming", "Top Rated Shows", "Most Popular Shows", "TV News", "India TV Spotlight"];
let contenuTvShows = document.getElementById("contenuTvShows");

for (let i = 0; i < tvShows2.length; i++) {
    let link = document.createElement("a");
    link.innerHTML = tvShows2[i];
    link.style.width = "100%";
    link.style.padding = "10px 0";
    link.href = "#";
    contenuTvShows.appendChild(link);
}

let nbClick01 = 0;

$("#tvShowsResponsive").click( function () {
    if (nbClick01 === 0) {
        $("#contenuTvShows").css("display", "flex");
        $("#tvShowsResponsive").css("color", "#E62A04");
        $("#arrow-top2").html("<i class=\"fas fa-angle-up\"></i>");
        nbClick01++;
    }
    else {
        $("#contenuTvShows").css("display", "none");
        $("#tvShowsResponsive").css("color", "white");
        $("#arrow-top2").html("<i class=\"fas fa-angle-down\"></i>");
        nbClick01 = 0;
    }
});

let watch2 = ["Watch to Watch", "Latest Trailers", "IMDb Originals", "Imdb Picks", "IMDb Podcasts"];
let contenuWatch = document.getElementById("contenuWatch");

for (let i = 0; i < watch2.length; i++) {
    let link = document.createElement("a");
    link.innerHTML = watch2[i];
    link.style.width = "100%";
    link.style.padding = "10px 0";
    link.href = "#";
    contenuWatch.appendChild(link);
}

let nbClick02 = 0;

$("#watchResponsive").click( function () {
    if (nbClick02 === 0) {
        $("#contenuWatch").css("display", "flex");
        $("#watchResponsive").css("color", "#E62A04");
        $("#arrow-top3").html("<i class=\"fas fa-angle-up\"></i>");
        nbClick02++;
    }
    else {
        $("#contenuWatch").css("display", "none");
        $("#watchResponsive").css("color", "white");
        $("#arrow-top3").html("<i class=\"fas fa-angle-down\"></i>");
        nbClick02 = 0;
    }
});

let awardEvents2 = ["Oscars", "Best Picture Winners", "Golden Globes", "Emmys", "Black History Month", "STARmeter Awards", "San Diego Comic-Con", "New-York Comic-Con", "Sundance Film Festival", "Toronto Int'l Film Festival", "Awards Central", "Festival Central", "All Events"];
let contenuAwards = document.getElementById("contenuAwards");

for (let i = 0; i < awardEvents2.length; i++) {
    let link = document.createElement("a");
    link.innerHTML = awardEvents2[i];
    link.style.width = "100%";
    link.style.padding = "10px 0";
    link.href = "#";
    contenuAwards.appendChild(link);
}

let nbClick03 = 0;

$("#awardsEventsResponsive").click( function () {
    if (nbClick03 === 0) {
        $("#contenuAwards").css("display", "flex");
        $("#awardsEventsResponsive").css("color", "#E62A04");
        $("#arrow-top4").html("<i class=\"fas fa-angle-up\"></i>");
        nbClick03++;
    }
    else {
        $("#contenuAwards").css("display", "none");
        $("#awardsEventsResponsive").css("color", "white");
        $("#arrow-top4").html("<i class=\"fas fa-angle-down\"></i>");
        nbClick03 = 0;
    }
});

let celebs2 = ["Born Today", "Most Popular Celebs", "Celebrity News"];
let contenuCelebs = document.getElementById("contenuCelebs");

for (let i = 0; i < celebs2.length; i++) {
    let link = document.createElement("a");
    link.innerHTML = celebs2[i];
    link.style.width = "100%";
    link.style.padding = "10px 0";
    link.href = "#";
    contenuCelebs.appendChild(link);
}

let nbClick04 = 0;

$("#celebsResponsive").click( function () {
    if (nbClick04 === 0) {
        $("#contenuCelebs").css("display", "flex");
        $("#celebsResponsive").css("color", "#E62A04");
        $("#arrow-top5").html("<i class=\"fas fa-angle-up\"></i>");
        nbClick04++;
    }
    else {
        $("#contenuCelebs").css("display", "none");
        $("#celebsResponsive").css("color", "white");
        $("#arrow-top5").html("<i class=\"fas fa-angle-down\"></i>");
        nbClick04 = 0;
    }
});

let community2 = ["Help Center", "Contributor Zone", "Polls"];
let contenuCommunity = document.getElementById("contenuCommunity");

for (let i = 0; i < community2.length; i++) {
    let link = document.createElement("a");
    link.innerHTML = community2[i];
    link.style.width = "100%";
    link.style.padding = "10px 0";
    link.href = "#";
    contenuCommunity.appendChild(link);
}

let nbClick05 = 0;

$("#communityResponsive").click( function () {
    if (nbClick05 === 0) {
        $("#contenuCommunity").css("display", "flex");
        $("#communityResponsive").css("color", "#E62A04");
        $("#arrow-top6").html("<i class=\"fas fa-angle-up\"></i>");
        nbClick05++;
    }
    else {
        $("#contenuCommunity").css("display", "none");
        $("#communityResponsive").css("color", "white");
        $("#arrow-top6").html("<i class=\"fas fa-angle-down\"></i>");
        nbClick05 = 0;
    }
});




// Top picks, utiliser Jquery
let filmsTopPicks = [
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg", "trailer" : "https://www.youtube.com/watch?v=6ZfuNTqbHE8", "star" : 4.4, "title" : "Avengers : Infinity War (2018)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.dXkLdHXowR5VL8j6DdCwFAHaK9&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=TcMBFSGVi1c", "star" : 4.2, "title" : "Avengers : Endgame"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03.jpg", "trailer" : "https://www.youtube.com/watch?v=d96cjJhvlMA", "star" : 4.2, "title" : "Guardians of the Galaxy"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg", "trailer" : "https://www.youtube.com/watch?v=eOrNdBpGMv8", "star" : 4.2, "title" : "Avengers"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg", "trailer" : "https://www.youtube.com/watch?v=dW1BIid8Osg", "star" : 4.1, "title" : "Guardians of the Galaxie vol.2"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg", "trailer" : "https://www.youtube.com/watch?v=8ugaeA-nMTc", "star" : 4, "title" : "Iron Man"}
];

for (let i = 0; i < filmsTopPicks.length; i++) {
    $("#containerTopPicks").append(
        "<div id='filmTopPick" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='" + filmsTopPicks[i].trailer + "'><img class='imageFilmTopPicks' src='"+ filmsTopPicks[i].imageSrc +"'></a>" +
        "<span class='star'><i class='fas fa-star red'></i>" + filmsTopPicks[i].star + "</span>" +
        "<a href='" + filmsTopPicks[i].trailer + "' class='title'>" + filmsTopPicks[i].title + "</a>" +
        "<a href='#' class='watchList' id='filmWatchList" + [i] + "'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

//Allows you to make the container appear or disappear, containing the films
let nbClick = 0;
$("#topPicks1").click(function () {
    if (nbClick === 0) {
        $("#containerTopPicks").css("display", "none");
        nbClick++;
    }
    else {
        $("#containerTopPicks").css("display", "flex");
        nbClick = 0;
    }
});


// Chronological movies marvel
let chronology = [
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamerica_lob_crd_01.jpg", "trailer" : "https://www.youtube.com/watch?v=JerVrbLldXw", "title" : "Captain America : First Avenger (2011)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg", "trailer" : "https://www.youtube.com/watch?v=Z1BCujX3pw8", "title" : "Captain Marvel (2019)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg", "trailer" : "https://www.youtube.com/watch?v=8ugaeA-nMTc", "title" : "Iron Man (2008)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg", "trailer" : "https://www.youtube.com/watch?v=qsRZghNciIo", "title" : "Iron Man 2 (2010)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.-5pdYhXQUENF--njd-uzqAHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=vJUDu40Z_RY", "title" : "Thor (2011)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.QlmPp2qcFaioUi-EwE6DBwHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=xbqNb2PFKKA", "title" : "The incredible Hulk (2008)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg", "trailer" : "https://www.youtube.com/watch?v=eOrNdBpGMv8", "title" : "Avengers (2012)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.u_jYWej4Kn5VC-fm8HBcxQHaLV&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=oYSD2VQagc4", "title" : "Iron Man 3 (2013)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.9r8lZp30wow8oCInY0MFbAHaJ3&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=npvJ9FTgZbM", "title" : "Thor : The dark world (2013)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathewintersoldier_lob_crd_01_1.jpg", "trailer" : "https://www.youtube.com/watch?v=7SlILk2WMTI", "title" : "Captain America : The winter woldier (2014)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03.jpg", "trailer" : "https://www.youtube.com/watch?v=d96cjJhvlMA", "title" : "The Guardians of the Galaxy (2014)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg", "trailer" : "https://www.youtube.com/watch?v=dW1BIid8Osg", "title" : "The Guardians of the Galaxy vol.2 (2017)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.4J3pDjZJg_QHnEI6U0chGQHaLL&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=tmeOjFno6Do", "title" : "Avengers : Age of Ultron (2015)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg", "trailer" : "https://www.youtube.com/watch?v=pWdKf3MneyI", "title" : "Ant-Man (2015)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericacivilwar_lob_crd_01_9.jpg", "trailer" : "https://www.youtube.com/watch?v=dKrVegVI0Us", "title" : "Civil War (2016)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.QxKyIFG9BRZkBpNeWoG5AwHaK-&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=RxAtuMu_ph4", "title" : "Black Widow (2021)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.WBVvgtLCkTKNXLuxPQzM4QHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=xjDjIWPwcPU", "title" : "Black Panther (2018)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.QHKuZu2_e7kxztB9T6x0lwHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=n9DwoQ7HWvI", "title" : "Spider-Man : Homecoming (2017)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.5voBPa5KkgK5VHuzEMP6tAHaKj&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=8_rTIAOohas", "title" : "Ant-Man and The Wasp (2018)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_lob_crd_01_6.jpg", "trailer" : "https://www.youtube.com/watch?v=Lt-U_t2pUHI",  "title" : "Doctor Strange (2016)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.iBhfFDxIeeXX6rTHxpWiJgHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=ue80QwXMRHg", "title" : "Thor : Ragnarok (2017)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg", "trailer" : "https://www.youtube.com/watch?v=6ZfuNTqbHE8", "title" : "Avengers : Infinity War (2018)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.dXkLdHXowR5VL8j6DdCwFAHaK9&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=TcMBFSGVi1c", "title" : "Avengers : Endgame (2019)"},
    {"imageSrc" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg", "trailer" : "https://www.youtube.com/watch?v=Nt9L1jCKGnE", "title" : "Spider-Man : Far from home (2019)"},

];

for (let i = 0; i < chronology.length; i++) {
    let number = i + 1;
    $("#containerChronology").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
            "<a href='" + chronology[i].trailer + "' class='images'><img class='imageFilmTopPicks' src='"+ chronology[i].imageSrc +"'></a>" +
            "<span class='number'>" + number + "</span>" +
            "<a href='" + chronology[i].trailer + "' class='title'>" + chronology[i].title + "</a>" +
            "<a href='#' class='watchList'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

let nbClick2 = 0;
$("#avengers").click(function () {
    if (nbClick2 === 0) {
        $("#containerChronology").css("display", "none");
        nbClick2++;
    }
    else {
        $("#containerChronology").css("display", "flex");
        nbClick2 = 0;
    }
});

let chronologyXmen = [
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.RwsWbtBY6uBQS1cSr0be-AAAAA&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=kyQKi5-k0UU", "title" : "X-Men : First Class  (2011)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.GFs4y9mVHkBcpwXuuLa7bAHaJ6&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=QojV7s3UTu0", "title" : "X-Men Origins : Wolverine (2009)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.k8cFs3SoqaJ1_1sxrw7HhQHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=VNxwlx6etXI", "title" : "X-Men (2000)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.6bPlQ1-_GdnkzyPe8XiVwQHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=KjzPi5hfv9c", "title" : "X-Men 2 (2003)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.C875m7convYZR5L1-UMFegHaKj&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=ZQ0v5dXbw7M", "title" : "X-Men : The last stand (2006)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.w3DYONspOd7QVqdWEAMZmQHaKj&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=g7kdUy5_WlI", "title" : "The Wolverine (2013)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.I4wpWLxu2P-jep1I4Th8KwHaJ3&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=pK2zYHWDZKo", "title" : "X-Men : Days of Future Past (2014)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.H4Gc8G4mlyjj5xJagqITjQHaKj&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=COvnHv42T-A", "title" : "X-Men : Apocalypse (2016)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.i6PaHWEJYYMxYhpunHVGXgHaKz&pid=Api&P=0&w=300&h=300", "trailer": "https://www.youtube.com/watch?v=1-q8C_c-nlM", "title" : "X-Men : Dark Phoenix (2019)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.ng61IWqtUV9bxuw7P78QJwAAAA&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=gtTfd6tISfw", "title" : "Deadpool (2016)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.ND-EK9l01qVW9PuV5u4eDAHaK8&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=D86RtevtfrA", "title" : "Deadpool 2 (2018)"},
    {"imageSrc" : "https://tse2.explicit.bing.net/th?id=OIP.JkRh8cW8DxZmcCZUbukx5QHaLG&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=Div0iP65aZo", "title" : "Logan (2017)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.lao4-o4Si6QeTRnDrYtbHQAAAA&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=W_vJhUAOFpI", "title" : "The New Mutants (2020)"},
];

for (let i = 0; i < chronologyXmen.length; i++) {
    let number = i + 1;
    $("#containerXmen").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='" + chronologyXmen[i].trailer + "'><img class='imageFilmTopPicks' src='"+ chronologyXmen[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='" + chronologyXmen[i].trailer + "' class='title'>" + chronologyXmen[i].title + "</a>" +
        "<a href='#' class='watchList'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

let nbClick3 = 0;
$("#xMen").click(function () {
    if (nbClick3 === 0) {
            $("#containerXmen").css("display", "none");
        nbClick3++;
    }
    else {
        $("#containerXmen").css("display", "flex");
        nbClick3 = 0;
    }
});

// Fantastic 4
let chronologyFantastic = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.Drn_VEdXvdUODGbt-l8xtAHaKS&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=cLFDV72pa-s", "title" : "Fantastic Four (2005)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.a1AlFPwO9r0MZpDPxLNoKgHaJ4&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=Wiu5eZ_7vSY", "title" : "Fantastic Four: Rise of the Silver Surfer (2007)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.SMF6w_BkUX1fy682L9WGrgHaLK&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=_rRoD28-WgU", "title" : "Fantastic Four (2015)"},
];

for (let i = 0; i < chronologyFantastic.length; i++){
    let number = i + 1;
    $("#containerFantastic").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='" + chronologyFantastic[i].trailer + "'><img class='imageFilmTopPicks' src='"+ chronologyFantastic[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='" + chronologyFantastic[i].trailer + "' class='title'>" + chronologyFantastic[i].title + "</a>" +
        "<a href='#' class='watchList'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

let nbClick4 = 0;
$("#fantastic4").click(function () {
    if (nbClick4 === 0) {
        $("#containerFantastic").css("display", "none");
        nbClick4++;
    }
    else {
        $("#containerFantastic").css("display", "flex");
        nbClick4 = 0;
    }
});

// Spider-Man
let chronologySpiderMan = [
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.WGmqRf_FKqAq3VSXVY1P3AHaKO&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=TYMMOjBUPMM", "title" : "Spider-Man (2002)"},
    {"imageSrc" : "https://tse4.explicit.bing.net/th?id=OIP.oGCjs7nkXo863j9jAMhe0wHaLG&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=jDMf7A-jzJY", "title" : "Spider-Man 2 (2004)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.E9cK3MLj_0FbnltKBT1hwQHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=wPosLpgMtTY", "title" : "Spider-Man 3 (2007)"},
];

for (let i = 0; i < chronologySpiderMan.length; i++) {
    let number = i + 1;
    $("#containerSpiderMan").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='" + chronologySpiderMan[i].trailer + "'><img class='imageFilmTopPicks' src='"+ chronologySpiderMan[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='" + chronologySpiderMan[i].trailer + "' class='title'>" + chronologySpiderMan[i].title + "</a>" +
        "<a href='#' class='watchList'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

let nbClick5 = 0;
$("#spiderMan").click(function () {
    if (nbClick5 === 0) {
        $("#containerSpiderMan").css("display", "none");
        nbClick5++;
    }
    else {
        $("#containerSpiderMan").css("display", "flex");
        nbClick5 = 0;
    }
});

// The amazing Spider-Man
let chronologyAmazingSpiderMan = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.Qo4WPu_E2nZJdm5AKqHGMgHaKd&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=-tnxzJ0SSOw", "title" : "The Amazing Spider-Man (2012)"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.aCchXBFu_g7hrD_35DnbNQHaLG&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=nbp3Ra3Yp74", "title" : "The Amazing Spider-Man 2 (2014)"}
];

for (let i = 0; i < chronologyAmazingSpiderMan.length; i++) {
    let number = i + 1;
    $("#containerAmazingSpiderMan").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='" + chronologyAmazingSpiderMan[i].trailer + "'><img class='imageFilmTopPicks' src='"+ chronologyAmazingSpiderMan[i].imageSrc +"'></a>" +
        "<span class='number'>" + number + "</span>" +
        "<a href='" + chronologyAmazingSpiderMan[i].trailer + "' class='title'>" + chronologyAmazingSpiderMan[i].title + "</a>" +
        "<a href='#' class='watchList'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

let nbClick6 = 0;
$("#amazingSpiderMan").click(function () {
    if (nbClick6 === 0) {
        $("#containerAmazingSpiderMan").css("display", "none");
        nbClick6++;
    }
    else {
        $("#containerAmazingSpiderMan").css("display", "flex");
        nbClick6 = 0;
    }
});

// All other Marvel movies
let chronologyMarvelAll = [
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.ENKg9Z5SYaGDPmz3Ls5XdAHaKj&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=u9Mv98Gr5pY", "title" : "Venom (2018)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.EZtUdfhWXeO8Fde5d1peAAHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=ZFHyPLaENRE", "title" : "Ghost rider : Spirit of Vengeance (2012)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.IXD9b-Wh6h-GKDDF5hGt0gHaK_&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=wkxLWWiz5O8", "title" : "Punisher 2 : War Zone (2009)"},
    {"imageSrc" : "https://tse3.mm.bing.net/th?id=OIP.01dG2V8RrhPLCxEonp9pvwHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=tp12CD2A4NA", "title" : "Ghost rider (2007)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.rarc19CwXWfUTsbiJJBz1AAAAA&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=RTUL1GWbrRw", "title" : "Man-Thing (2005)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.k__8UPx0ODlujfn2HD0OdgHaKx&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=XGnADb5e0mc", "title" : "Elektra (2005)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.A130Qsob4q4qzI6NJGbLGwHaLH&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=fPcNbsW69Eg", "title" : "Blade : Trinity (2004)"},
    {"imageSrc" : "https://tse2.mm.bing.net/th?id=OIP.X-e3E0su714muKZW6q1frgHaKj&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=q7CMnRv8Mqc", "title" : "The Punisher (2004)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.GMA0DlHCAE5cYYOYPyeh0QHaK7&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=Y6p_3s0d9TI", "title" : "Daredevil (2003)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.Tmm5YWcUtzcCyXqDoMQhJQHaKg&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=vAUB7dcUn8o", "title" : "Blade II (2002)"},
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.3jmhkQUwg8mqi433X_UwTwHaJ-&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=kaU2A7KyOu4", "title" : "Blade (1998)"},

];

for (let i = 0; i < chronologyMarvelAll.length; i++) {
    $("#containerFilmAll").append(
        "<div id='chronology" + [i] + "' class='flexColumn backFilm'>" +
        "<a href='" + chronologyMarvelAll[i].trailer + "'><img class='imageFilmTopPicks' src='"+ chronologyMarvelAll[i].imageSrc +"'></a>" +
        "<a href='" + chronologyMarvelAll[i].trailer + "' class='title'>" + chronologyMarvelAll[i].title + "</a>" +
        "<a href='#' class='watchList'><i class=\"fas fa-plus-circle\"></i> Watchlist</a> "+
        "</div>"
    );
}

let nbClick7 = 0;
$("#marvelAll").click(function () {
    if (nbClick7 === 0) {
        $("#containerFilmAll").css("display", "none");
        nbClick7++;
    }
    else {
        $("#containerFilmAll").css("display", "flex");
        nbClick7 = 0;
    }
});

// Coming Soon to theaters
let comingSoon = [
    {"imageSrc" : "https://tse1.mm.bing.net/th?id=OIP.lcXgv2CJFIoncCR6OIDRKwHaK-&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=RxAtuMu_ph4", "title" : "Black Widow", "exit" : "May 5, 2021"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.yd_Gp5mcIftqVSAtr4qR5QAAAA&pid=Api&P=0&w=300&h=300", "trailer" : "https://www.youtube.com/watch?v=jSnc8Mt_EEI", "title" : "Shang-Chi and the Legend of the Ten Rings", "exit" : "July 7, 2021"},
    {"imageSrc" : "https://tse4.mm.bing.net/th?id=OIP.iPxwjvKtXcvvadzxA54-ygHaIs&pid=Api&P=0&w=300&h=300", "title" : "Eternals", "exit" : "November 5, 2021"},
    {"imageSrc" : "https://cdn.discordapp.com/attachments/689017273050202134/817072644956094484/image0.png", "trailer" : "https://www.youtube.com/watch?v=M0NioMJ7SMg", "title" : "Spider-Man : No Way Home", "exit" : "December 15, 2021"},
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
        "<a href='" + comingSoon[i].trailer + "'><img class='imageFilmTopPicks' src='"+ comingSoon[i].imageSrc +"'></a>" +
        "<span class='exit colorGrey'> Release date : " + comingSoon[i].exit + "</span>" +
        "<a href='" + comingSoon[i].trailer + "' class='title'>" + comingSoon[i].title + "</a>" +
        "</div>"
    );
}

//check the validity between the two user provided passwords.

let password = document.getElementById("passwordSignUp");
let passwordConfirm = document.getElementById("repeatPassword");

function checkPassword() {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Passwords do not match !");
    }
    else {
        passwordConfirm.setCustomValidity("");
    }
}

password.addEventListener("change", checkPassword);
passwordConfirm.addEventListener("keyup", checkPassword);


