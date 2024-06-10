
let isLoggedIn = true; 

function addItemToCart(item) {
    if (isLoggedIn) {
        console.log(`Item '${item}' added to cart.`);
    } else {
        console.log("Please log in to add items to your cart.");
    }
}
addItemToCart("Apples");

let products = ["Apples", "Bananas", "Oranges", "Grapes"];

function displayProducts() {
    console.log("Available products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i]}`);
    }
}

function addToCart(productIndex) {
    if (isLoggedIn) {
        console.log(`Added '${products[productIndex - 1]}' to cart.`);
    } else {
        console.log("Please log in to add items to your cart.");
    
    }
}
let cart = [
    { item: "Apples", price: 2.50 },
    { item: "Bananas", price: 1.50 },
    { item: "Oranges", price: 3.00 }
];

function calculateTotalCost() {
    let totalCost = 0;
    for (let item of cart) {
        totalCost += item.price;
    }
    return totalCost;
}

console.log("Total cost of items in cart: $" + calculateTotalCost());