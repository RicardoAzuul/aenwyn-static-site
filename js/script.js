/* 
TODO: 
- get an HTML element from the page based on class --> by class means we can target any spell lvl counter
- get the ID, then use that for as the name for the name value pair in localStorage
- if the name/value pair doesn't exist, set it equal to the total spell slots
- if it does exist, read the value and put it into the HTML 

*/ 

document.addEventListener("DOMContentLoaded", function(){
    let spellSlotCounter = document.getElementsByClassName("spell-slot-counter"); // returns an array with a length of 1
    nameInLocalStorage = spellSlotCounter[0].id;
    if (localStorage.getItem(nameInLocalStorage)) { 
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = localStorage.getItem(nameInLocalStorage);
    }
  });

// the element we want to write to: <td class="spell-slot-counter" id="lvl-0-spellslots"></td>  
function resetSlots() {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('lvl-0-spellslots', 6);
        document.getElementById("lvl-0-spellslots").innerHTML = localStorage.getItem('lvl-0-spellslots');
    } else {
        document.getElementById("lvl-0-spellslots").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function subtractSlot() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('lvl-0-spellslots')) {
            let tempNumber = parseInt(localStorage.getItem('lvl-0-spellslots'));
            if (tempNumber === 0) {
                return;
            }
            else {
                tempNumber--;
                localStorage.setItem('lvl-0-spellslots', tempNumber);
            }
        } else {
            localStorage.setItem('lvl-0-spellslots', 6);
        }
        document.getElementById("lvl-0-spellslots").innerHTML = localStorage.getItem('lvl-0-spellslots');
    } else {
        document.getElementById("lvl-0-spellslots").innerHTML = "Sorry, your browser does not support web storage...";
    }
}