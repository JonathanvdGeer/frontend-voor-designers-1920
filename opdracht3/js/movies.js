/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//--- QUERY DECLARATIES ---//

//var header = document.querySelector('header');
var section = document.querySelector('section'); // Naar HTML.


//------------------------------------- FILE AANVRAGEN -------------------------------------- //

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; // URL van de JSON.

var request = new XMLHttpRequest(); // Verzoek aanvragen API.

request.open('GET', requestURL); // Er staat een url, het zorgt ervoor dat het het linkje wordt geroepen.

request.responseType = 'json'; // Responsetype zeg je wat voor bestand het is. 
request.send(); // En bij send zeg je dat hij het verstuurd.


//------------------------------------- AANMAKEN: GEGEVENS LADEN EN FUNCTIE -------------------------------------- //

request.onload = function () { //Aangeven wat hij moet doen wanneer het geladen is.
    showMovies(request.response); // De functie start, de var wordt meegegeven en de aantal films worden getoond (begin en eind).
}


//------------------------------------- HTML ELEMENTEN VULLEN MET GEGEVENS JSON FILE -------------------------------------- //

function showMovies(movies) { // Titel --> var --> DOM --> Element --> AppendChild name.


    for (i = 0; i < movies.length; i++) {
        var div = document.createElement('div');
        var genres = movies[i].genres
        filterclass = 'filterDiv ' + genres + ' show';
        div.setAttribute('class', filterclass + ' card');
        document.getElementsByClassName('container')[0].appendChild(div);
        document.getElementsByClassName('card')[i].innerHTML = '<img src=' + movies[i].cover + '>' + '<br><p class=titel>' + movies[i].title + '</p><br><p class=genre>' +  movies[i].genres + '</p><br> <br><p class=plot>' + movies[i].simple_plot + '</p>';
    }
}


//------------------------------------- FILTER BUTTONS -------------------------------------- //
// Bron: https://www.w3schools.com/howto/howto_js_filter_elements.asp en geholpen door: Rowin Ruizendaal.
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it).
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

        for (var j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active");
        }
        this.classList.add("active");


    });
}