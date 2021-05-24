/* 
TODO: 
- get an HTML element from the page based on class --> by class means we can target any spell lvl counter
- get the ID, then use that for as the name for the name value pair in localStorage
- if the name/value pair doesn't exist, set it equal to the total spell slots
- if it does exist, read the value and put it into the HTML 

*/

function addSlot() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('lvl-0-spellslots')) {
            let tempNumber = parseInt(localStorage.getItem('lvl-0-spellslots'));
            tempNumber++;
            localStorage.setItem('lvl-0-spellslots', tempNumber);
        } else {
            localStorage.setItem('lvl-0-spellslots', 6);
        }
        document.getElementById("slots-left").innerHTML = localStorage.getItem('lvl-0-spellslots');
    } else {
        document.getElementById("slots-left").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function subtractSlot() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('lvl-0-spellslots')) {
            let tempNumber = parseInt(localStorage.getItem('lvl-0-spellslots'));
            tempNumber--;
            localStorage.setItem('lvl-0-spellslots', tempNumber);
        } else {
            localStorage.setItem('lvl-0-spellslots', 6);
        }
        document.getElementById("slots-left").innerHTML = localStorage.getItem('lvl-0-spellslots');
    } else {
        document.getElementById("slots-left").innerHTML = "Sorry, your browser does not support web storage...";
    }
}