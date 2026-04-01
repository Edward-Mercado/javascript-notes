interface rawSushiItem {
    name: string,
    price: number
}

interface fixedSushiItem {
    name: string,
    price: number,
    qt: number
}

const sushiOrders: rawSushiItem[] = [
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

function createReceipt() {
    console.log("")
    console.log("")
    console.log("")
    const sushiCart: fixedSushiItem[] = []

    sushiOrders.forEach((item) => {
        let targetItem: (fixedSushiItem | undefined) = sushiCart.find(fixedItem => fixedItem.name === item.name)
        if (targetItem) {
            targetItem.qt++
        } else {
            sushiCart.push({
                name: item.name,
                price: item.price,
                qt: 1
            } as fixedSushiItem)
        }
    })

    console.log("                 YOUR RECEIPT                ")
    console.log("---------------------------------------------")
    console.log(" ")

    sushiCart.forEach((item) => {
        console.log(`${item.name} ($${item.price.toFixed(2)}) x ${item.qt} - $${(item.qt * item.price).toFixed(2)}`)
        console.log("")
    })

    let orderTotal: number = 0
    sushiCart.forEach((item) => {
        orderTotal += (item.price * item.qt)
    })

    console.log("---------------------------------------------")

    console.log(" ")
    console.log(`             Order Total: $${orderTotal.toFixed(2)}`)
    console.log("")
    console.log("")
    console.log("")
}

createReceipt()