




const regeratorOfDeck = () => {
    const cardNumber = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    const cardSymbol = ["espadas","treboles","diamantes", "corazones"]
    
    const deck = [] 

    /* const counter = 0  */

    for (let i=0; i< cardNumber.length; i++){ 
        for (let j=0; j< cardSymbol.length; j++) {
            const obj = {
                number: cardNumber[i],
                symbol: cardSymbol[j], 
            } 
            deck.push(obj)
        }  
           
    } return deck
}

/* 
const deckBenerate= regeratorOfDeck()
const randomCard = () => {
}
 */

const deck =
[
    { number: 'A', symbol: 'espadas', id:14 },
    { number: 'A', symbol: 'treboles', id:14 },
    { number: 'A', symbol: 'diamantes',id:14 },
    { number: 'A', symbol: 'corazones', id:14 },
    { number: '2', symbol: 'espadas', id:2 },
    { number: '2', symbol: 'treboles', id:2 },
    { number: '2', symbol: 'diamantes', id:2 },
    { number: '2', symbol: 'corazones', id:2 },
    { number: '3', symbol: 'espadas', id:3 },
    { number: '3', symbol: 'treboles', id:3 },
    { number: '3', symbol: 'diamantes',id:3 },
    { number: '3', symbol: 'corazones', id:3 },
    { number: '4', symbol: 'espadas', id: 4 },
    { number: '4', symbol: 'treboles', id: 4 },
    { number: '4', symbol: 'diamantes', id:4 },
    { number: '4', symbol: 'corazones', id:4 },
    { number: '5', symbol: 'espadas', id: 5 },
    { number: '5', symbol: 'treboles', id: 5 },
    { number: '5', symbol: 'diamantes', id: 5 },
    { number: '5', symbol: 'corazones', id: 5 },
    { number: '6', symbol: 'espadas', id: 6 },
    { number: '6', symbol: 'treboles', id: 6 },
    { number: '6', symbol: 'diamantes', id: 6 },
    { number: '6', symbol: 'corazones', id: 6 },
    { number: '7', symbol: 'espadas', id: 7 },
    { number: '7', symbol: 'treboles', id: 7 },
    { number: '7', symbol: 'diamantes', id: 7 },
    { number: '7', symbol: 'corazones', id: 7 },
    { number: '8', symbol: 'espadas', id:8 },
    { number: '8', symbol: 'treboles', id: 8 },
    { number: '8', symbol: 'diamantes', id: 8 },
    { number: '8', symbol: 'corazones', id:8 },
    { number: '9', symbol: 'espadas', id: 9 },
    { number: '9', symbol: 'treboles', id: 9 },
    { number: '9', symbol: 'diamantes', id: 9 },
    { number: '9', symbol: 'corazones', id: 9 },
    { number: '10', symbol: 'espadas', id: 10 },
    { number: '10', symbol: 'treboles', id: 10 },
    { number: '10', symbol: 'diamantes', id: 10 },
    { number: '10', symbol: 'corazones', id: 10 },
    { number: 'J', symbol: 'espadas', id: 11 },
    { number: 'J', symbol: 'treboles', id: 11 },
    { number: 'J', symbol: 'diamantes', id: 11 },
    { number: 'J', symbol: 'corazones', id: 11 },
    { number: 'Q', symbol: 'espadas', id: 12 },
    { number: 'Q', symbol: 'treboles', id: 12 },
    { number: 'Q', symbol: 'diamantes', id: 12 },
    { number: 'Q', symbol: 'corazones', id: 12 },
    { number: 'K', symbol: 'espadas', id: 13 },
    { number: 'K', symbol: 'treboles', id: 13 },
    { number: 'K', symbol: 'diamantes', id: 13 },
    { number: 'K', symbol: 'corazones', id: 13 }
  ]
  



  const generateRandomCard = (deck) => {
    
    const randomCard =  Math.floor(Math.random()*deck.length)
    const randonResult= deck[randomCard]
    return randonResult
} 

console.log (generateRandomCard(deck))

