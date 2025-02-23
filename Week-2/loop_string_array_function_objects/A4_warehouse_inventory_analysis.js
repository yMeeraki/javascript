// Assignment 4: Warehouse Inventory Analysis
// Program to analyze warehouse inventory using a nested array structure.
// Task 1: Calculate total value of items in each category (quantity * price).
// Task 2: Find the most expensive product across all categories.


const warehouse = [
    ["Electronics", 
        { name: "Laptop", quantity: 10, price: 50000 },
        { name: "Phone", quantity: 30, price: 30000 },
        { name: "Headphones", quantity: 50, price: 2000 }
    ],
    ["Furniture", 
        { name: "Sofa", quantity: 5, price: 60000 },
        { name: "Table", quantity: 10, price: 15000 },
        { name: "Chair", quantity: 20, price: 5000 }
    ],
    ["Groceries", 
        { name: "Rice", quantity: 100, price: 100 },
        { name: "Wheat", quantity: 80, price: 120 },
        { name: "Oil", quantity: 50, price: 200 }
    ]
];




console.log(getTotalValue(warehouse)); 
console.log(findMostExpensive(warehouse));



function getTotalValue(warehouse) {
    const inventory = {}
    for (let i = 0; i < warehouse.length; i++){
        const category = warehouse[i][0]
        const items = warehouse[i].slice(1)
        // console.log(category) 
        // console.log(items)
        inventory[category] = 0
        for (let j = 0; j < items.length; j++){
            inventory[category] += items[j].price * items[j].quantity
        }      
        
    }
    return inventory
}

function findMostExpensive(warehouse) {
    const mostExpensiveProduct = {
        name: '',
        price:''
    }
    for (let i = 0; i < warehouse.length; i++){
        const category = warehouse[i][0]
        const items = warehouse[i].slice(1)
        // console.log(category) 
        // console.log(items)
       
        for (let j = 0; j < items.length; j++){
            if (items[j].price > mostExpensiveProduct.price) {
                mostExpensiveProduct.name = items[j].name
                mostExpensiveProduct.price = items[j].price
                mostExpensiveProduct.category = category
            }
        }      
        
    }
    return mostExpensiveProduct
}