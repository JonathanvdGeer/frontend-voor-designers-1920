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

request.onload = function() { //Aangeven wat hij moet doen wanneer het geladen is.
    showMovies(request.response); // De functie start, de var wordt meegegeven en de aantal films worden getoond (begin en eind).
}


//------------------------------------- HTML ELEMENTEN VULLEN MET GEGEVENS JSON FILE -------------------------------------- //
// Titel --> var --> DOM --> Element --> AppendChild name.

//Bron: https://www.w3schools.com/js/js_loop_for.asp
function showMovies(movies) { // Functie: Show Movies en info.

// Alle code staat dus in een for loop, de JSON is geladen en telt het aantal records in de JSON. Op basis daarvan maakt hij voor elk record een div aan met bepaalde waardes.
    for (i = 0; i < movies.length; i++) { // For loop: Dezelfde code steeds opnieuw uitvoeren met telkens een andere waarde.

        var div = document.createElement('div'); // Vraag de Content & Container aan.
        var genres = movies[i].genres // Vraag de genres aan.
        filterclass = 'filterDiv ' + genres + ' show'; 
        div.setAttribute('class', filterclass + ' card'); // Stelt de waarde in van een attribuut op het opgegeven element.
        document.getElementsByClassName('container')[0].appendChild(div); // Begin bij Evil Dead.
        document.getElementsByClassName('card')[i].innerHTML = '<img class=cover src=' + movies[i].cover + '>' + '<br><p class=titel>' + movies[i].title + '</p><br><p class=genre>' + movies[i].genres + '</p><br> <br><p class=plot>' + movies[i].simple_plot + '</p>'; // Roepen de covers, titels en genres op onder elkaar.
        Makeiframe(movies[i].trailer, [i]); // Maak een iFrame aan voor Trailers.
    }
}

// Vervolgens wordt de data van de cards gevuld met de rest van de JSON records zoals plot, dan wordt er voor elk record een iframe aangemaakt waarin de trailer url staat, deze wordt opgeroepen vanuit de functie Makeiframe met 2 parameters, dit om de data vanuit functie a over te zetten naar functie b.

// In Makeiframe wordt er een frame gemaakt met bepaalde css waardens, deze functie is dus gekoppeld aan de cover fotos vanuit de front-end, dit is met een click event gedaan, dus zodra er geklikt word op een cover word de functie pas uitgevoerd.


// Bron: https://stackoverflow.com/questions/8726455/creating-an-iframe-using-javascript
function Makeiframe(trailer, getal) { // Functie: Maak trailer iframe.
    
    document.getElementsByClassName('cover')[getal].addEventListener("click", function(){ // Functie: Als ik op een cover klik; open de iframe.
    var ifrm = document.createElement("iframe"); // Vraagt de trailer aan.
    var button = document.createElement("button"); // Close button functie.
    ifrm.setAttribute("class", 'trailer'); // Per class (card) een trailer (Stelt de waarde in van een attribuut op het opgegeven element).
    ifrm.setAttribute("src", trailer);
    ifrm.style.width = "640px"; // Breedte trailer.
    ifrm.style.height = "480px"; // Hoogte trailer.
    document.getElementsByClassName('movies')[0].appendChild(ifrm); // 
    document.getElementsByClassName('close')[0].style.display = "block";
  });
}

// Verder geef je de close button een display van block aangezien die standaard op none staat.

// removeIFrame spreekt voor zich, op basis van een klik event op de button close wordt de functie remove uitgevoerd, deze zorgt er voor dat de trailer dus weg gaat en dat de button weer een display van none krijgt.
function removeIFrame() { // Functie: Sluit trailer functie.
    document.getElementsByClassName("trailer")[0].remove();
    document.getElementsByClassName('close')[0].style.display = "none";
}

document.getElementsByClassName('close')[0].addEventListener('click', removeIFrame) // Klik om het te sluiten.


//------------------------------------- FILTER BUTTONS -------------------------------------- //
// Bron: https://www.w3schools.com/howto/howto_js_filter_elements.asp en geholpen door: Koop Reynders & Rowin Ruizendaal.
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
    btns[i].addEventListener("click", function() {

        for (var j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}