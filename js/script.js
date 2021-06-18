document.addEventListener("DOMContentLoaded", function () {
    let spellSlotCounter = document.getElementsByClassName("spell-slot-counter"); // returns an array with a length of 1
    nameInLocalStorage = spellSlotCounter[0].id;
    if (localStorage.getItem(nameInLocalStorage)) {
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = localStorage.getItem(nameInLocalStorage);
    }
    else {
        let totalSpellSlots = document.getElementById("total-spell-slots");
        let valueInLocalStorage = parseInt(totalSpellSlots.innerText);
        localStorage.setItem(nameInLocalStorage, valueInLocalStorage);
    }
});

function resetSlots() {
    if (typeof (Storage) !== "undefined") {
        let spellSlotCounter = document.getElementsByClassName("spell-slot-counter"); // returns an array with a length of 1
        nameInLocalStorage = spellSlotCounter[0].id; //we set this to the id of the element we retrieved, for use as the name in the name/value pair for localStorage
        let totalSpellSlots = document.getElementById("total-spell-slots");
        let valueInLocalStorage = parseInt(totalSpellSlots.innerText);
        localStorage.setItem(nameInLocalStorage, valueInLocalStorage);
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = localStorage.getItem(nameInLocalStorage);
    } else {
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function subtractSlot() {
    if (typeof (Storage) !== "undefined") {
        let spellSlotCounter = document.getElementsByClassName("spell-slot-counter");
        nameInLocalStorage = spellSlotCounter[0].id;
        let tempNumber = parseInt(localStorage.getItem(nameInLocalStorage));
        if (tempNumber === 0) { // there is no negative spellslots, so just do nothing at 0
            return;
        }
        else {
            tempNumber--;
            localStorage.setItem(nameInLocalStorage, tempNumber);
        }
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = localStorage.getItem(nameInLocalStorage);
    } else {
        document.getElementsByClassName("spell-slot-counter")[0].innerHTML = "Sorry, your browser does not support web storage...";
    }
}