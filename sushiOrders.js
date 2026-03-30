"use strict";
const sushiOrders = [
    { name: "California Roll", price: 8 },
    { name: "Spicy Tuna Roll", price: 10 },
    { name: "Salmon Nigiri", price: 6 },
    { name: "California Roll", price: 8 },
    { name: "Dragon Roll", price: 12 },
    { name: "Spicy Tuna Roll", price: 10 },
    { name: "Miso Soup", price: 4 },
    { name: "Edamame", price: 5 },
    { name: "Salmon Nigiri", price: 6 },
    { name: "California Roll", price: 8 },
];
const sushiCart = [];
sushiOrders.forEach((item) => {
    let targetItem = sushiCart.find(fixedItem => fixedItem.name === item.name);
    if (targetItem) {
        targetItem.qt++;
    }
    else {
        sushiCart.push({
            name: item.name,
            price: item.price,
            qt: 1
        });
    }
});
console.log('test');
console.log(sushiCart);
