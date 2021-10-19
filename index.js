//Math function
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function buildACard() {
    //Shapes and numbers on card
    const suits = ['♦', '♥', '♠', '♣'];
    const cardValueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'Q', 'K', 'J'];

    //Card index and value
    const cardIndex = getRandomArbitrary(0,cardValueArray.length-1);
    const theCardValue = cardValueArray[cardIndex];

    //Suit index and value
    const suitIndex = getRandomArbitrary(0, suits.length - 1);
    const suitValue = suits[suitIndex];

    //HTML links
 
    const suitSlot = document.getElementById('cardIcon')
    const cardValueSlot = document.getElementById('theCardValue')
    const suitsSlot2 = document.getElementById('cardIconUpsideDown')
    
    
    suitSlot.innerHTML = suitValue;
    cardValueSlot.innerHTML = theCardValue;
    suitsSlot2.innerHTML = suitValue;
}