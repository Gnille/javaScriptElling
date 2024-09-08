 // funksjon for å kunne trykke enter etter å ha skrevet et ord for å slippe å trykke legg til
document.getElementById("task").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        submitText();
    }
});

let itemCount = 0; // setter itemCount til 0 slik at 

function submitText() {
    var inputField = document.getElementById("task");
    var text = inputField.value;

    if (text !== "") { // sjekker om teksten ikke er tom

        text = bigFirstLetter(text); // gjør første bokstaven stor

        var displayDiv = document.getElementById("displayText");

        
        // lager en container for elementet og + knappen
        var itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer");

        var textContainer = document.createElement("div");
        textContainer.classList.add("textContainer");

        // sørger for at dt står 1 stk foran hvert produkt
        var newItem = document.createElement("p");
        newItem.textContent = "1 stk " + text;
        newItem.classList.add("list-item");

        // legger til newItem i textContainer (css)
        textContainer.appendChild(newItem); 

        // lager en + knapp for å kunne endre antallet av produktet 
        var plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.classList.add("increment-button");

        // lager "onclick" funskjon for å kunne øke antallet av produktet
        plusButton.onclick = function() {
            incrementItem(newItem);
        };
        // legger til + og newItem til itemContainer(css)
        itemContainer.appendChild(textContainer);
        itemContainer.appendChild(plusButton);

        
        displayDiv.appendChild(itemContainer);

        itemCount++;
    }

    inputField.value = ""; // tømmer input"Feltet" etter at et produkt er lagt til i handelista
    inputField.placeholder = "Oppgave"; // og tar den tilbake til "oppgave"
}


//funksjonen for å øke tall foran produktet
function incrementItem(itemElement) {
    var currentText = itemElement.textContent;
    var splitText = currentText.split(" stk "); // splitter nummeret og teksten
    var currentNumber = parseInt(splitText[0]); // henter ut nummeret
    currentNumber++; // øker nummer med 1
    itemElement.textContent = currentNumber + " stk " + splitText[1]; // oppdaterer teksten ved å legge til nye nummer foran
}

// funksjonen for å lage første bokstav stor
function bigFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
   }