/* 
each item has an object
name, price, quantity
*/

const cart = [
    { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
]

function calculateTotal(cart) {
    let total = 0;
    for (i=0; i<cart.length; i++) {
        let itemTotal = 0;
        itemTotal += cart[i].price * cart[i].quantity;
        if (cart[i].price < 5) {
            itemTotal *= .95;
        }
        total += itemTotal;
    }
    if (total >= 100) {
        total *= .9;
    }
    return total.toFixed(2);
}

console.log(calculateTotal(cart));

// its 82.67
// i believe i am a cool kid and know why it could be 82.68, if you use toFixed(2) on the itemTotals instead of the final total