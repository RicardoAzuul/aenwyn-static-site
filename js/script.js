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
    else {
        let totalSpellSlots = document.getElementById("total-spell-slots");
        console.log(totalSpellSlots);
    }
  });

// the element we want to write to: <td class="spell-slot-counter" id="lvl-0-spellslots"></td>  
function resetSlots() {
    if (typeof (Storage) !== "undefined") {
        let spellSlotCounter = document.getElementsByClassName("spell-slot-counter"); // returns an array with a length of 1
        nameInLocalStorage = spellSlotCounter[0].id; //we set this to the id of the element we retrieved, for use as the name in the name/value pair for localStorage
        localStorage.setItem(nameInLocalStorage, 6);
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = localStorage.getItem(nameInLocalStorage);
    } else {
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function subtractSlot() {
    if (typeof (Storage) !== "undefined") {
        let spellSlotCounter = document.getElementsByClassName("spell-slot-counter");
        nameInLocalStorage = spellSlotCounter[0].id;
        if (localStorage.getItem(nameInLocalStorage)) {
            let tempNumber = parseInt(localStorage.getItem(nameInLocalStorage));
            if (tempNumber === 0) {
                return;
            }
            else {
                tempNumber--;
                localStorage.setItem(nameInLocalStorage, tempNumber);
            }
        } else {
            localStorage.setItem(nameInLocalStorage, 6);
        }
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = localStorage.getItem(nameInLocalStorage);
    } else {
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = "Sorry, your browser does not support web storage...";
    }
}