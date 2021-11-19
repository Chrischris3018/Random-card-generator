//Math function
function getRandomArbitrary(length) {
    return Math.random() * (length)
}

function buildACard() {
    //Shapes and numbers on card
    let suits = ['♦', '♥', '♠', '♣'];
    let cardValueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'Q', 'K', 'J'];

    //Card index and value
    let cardIndex = Math.floor(getRandomArbitrary(cardValueArray.length));
    let theCardValue = cardValueArray[cardIndex];
    //Suit index and value
    let suitIndex = Math.floor(getRandomArbitrary(suits.length));
    let suitValue = suits[suitIndex];

    let changeColor = ""
    if (suitValue == '♦' || suitValue == '♥') {
        changeColor = "red"
    }

    //HTML links
    let suitSlot = document.querySelector('#cardIcon')
    let cardValueSlot = document.querySelector('#theCardValue')
    let suitsSlot2 = document.querySelector('#cardIconUpsideDown')

    if (changeColor == "red"){
        suitSlot.classList.add("red")
        suitsSlot2.classList.add("red")
    }

    suitSlot.innerHTML = suitValue;
    cardValueSlot.innerHTML = theCardValue;
    suitsSlot2.innerHTML = suitValue;
}
window.onload = function () {
    buildACard()
}