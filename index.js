function buildACard() {
    //Shapes and numbers on card
    const suits = ['♦', '♥', '♠', '♣'];
    const cardValueArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'K', 'J'];

    //Card index and value
    const cardIndex = getRandomArbitrary(0, cardValueArray.length - 1);
    const theCardValue = cardValueArray[cardIndex];

    //Suit index and value
    const suitIndex = getRandomArbitrary(0, suits.length - 1);
    const suitValue = suits[suitIndex];

    //HTML links
    const suitSlot = document.getElementById('RandomSuit')
    const cardValueSlot = document.getElementById('RandomCardValue')
    
    suitSlot.InnerHTML = suitValue;
    cardValueSlot.InnerHTML = theCardValue;
}

//Math function
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}