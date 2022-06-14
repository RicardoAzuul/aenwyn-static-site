// TODO: Change code to allow for having all spells on one page.
document.addEventListener("DOMContentLoaded", function () {
    let spellSlotCounters = [];
    spellSlotCounters = document.getElementsByClassName("spell-slot-counter");
    for (let i = 0; i < spellSlotCounters.length; i++) {
        nameInLocalStorage = spellSlotCounters[i].id;
        if (localStorage.getItem(nameInLocalStorage)) {
            document.getElementById(spellSlotCounters[i].id).innerHTML = localStorage.getItem(nameInLocalStorage);
        }
        else {
            let targetId = "total-" + spellSlotCounters[i].id
            let totalSpellSlots = document.getElementById(targetId);
            let valueInLocalStorage = parseInt(totalSpellSlots.innerText);
            localStorage.setItem(nameInLocalStorage, valueInLocalStorage);
        }
    };
});

function resetSlots(clicked_id) {
    if (typeof (Storage) !== "undefined") {
        let targetId = clicked_id.slice(0, -6);; 
        nameInLocalStorage = targetId; 
        let totalSpellSlots = document.getElementById("total-" + targetId);
        let valueInLocalStorage = parseInt(totalSpellSlots.innerText);
        localStorage.setItem(nameInLocalStorage, valueInLocalStorage);
        document.getElementById(targetId).innerHTML = localStorage.getItem(nameInLocalStorage);
    } else {
        document.getElementById(targetId).innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function subtractSlot(clicked_id) {
    if (typeof (Storage) !== "undefined") {
        let targetId = clicked_id.slice(0, -9); 
        nameInLocalStorage = targetId;
        let tempNumber = parseInt(localStorage.getItem(nameInLocalStorage));
        if (tempNumber === 0) { // there is no negative spellslots, so just do nothing at 0
            return;
        }
        else {
            tempNumber--;
            localStorage.setItem(nameInLocalStorage, tempNumber);
        }
        document.getElementById(targetId).innerHTML = localStorage.getItem(nameInLocalStorage);
    } else {
        document.getElementById(targetId).innerHTML = "Sorry, your browser does not support web storage...";
    }
}