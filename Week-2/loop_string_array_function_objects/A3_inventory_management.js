// Assignment 3: Inventory Management System
// Program to calculate current inventory from an array of transactions. 
// Each transaction has an item name, type (purchase/sale), and quantity. 
// The function calculates inventory count (purchases - sales) and removes items with zero stock.

const transactions = [
    { item: "apple", type: "purchase", quantity: 50 },
    { item: "banana", type: "purchase", quantity: 30 },
    { item: "apple", type: "sale", quantity: 20 },
    { item: "orange", type: "purchase", quantity: 40 },
    { item: "banana", type: "sale", quantity: 10 },
    { item: "orange", type: "sale", quantity: 40 },
    { item: "apple", type: "sale", quantity: 30 }
];
getInventory(transactions)

function getInventory(transactions) {
    const inventory = {}

    let count = 0    

    for (let i = 0; i < transactions.length; i++){
    
    let fruit = transactions[i]
    const item = fruit.item

    if (!inventory[item]) {
        inventory[item] = 0
    }
    // console.log(inventory)

    if (fruit.type === 'purchase') {
        inventory[item] += fruit.quantity
    }
    else {
        inventory[item] -= fruit.quantity
    }
    // console.log(inventory)

    for (let key in inventory) {
        // console.log(inventory[key])
        if (inventory[key] === 0) {
            delete inventory[key]
        }
    }

}
    console.log(inventory)
}




