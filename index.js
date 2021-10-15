function buildACard() {
    debugger;

    const suits = ['♦', '♥', '♠', '♣'];
    const cardValueArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'K', 'J'];
    const cardIndex = getRandomArbitrary(0, cardValueArray.length - 1);
    const theCardValue = cardValueAray[cardIndex];
    const suitIndex = getRandomArbitrary(0, suits.length - 1);
    const suitValue = suits[suitIndex];
    const theCardValue = cardValueArray[cardArray];
    debugger;

    const suitSlot = document.getElementById('RandomSuit')
    const cardValueSlot = document.getElementById('RandomCardValue')
    
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}