

// PRODUCT DATA


const products = [
    { id: "P01", name: "Notebook", price: 3500, stock: 10 },
    { id: "P02", name: "Pen", price: 500, stock: 25 },
    { id: "P03", name: "Folder", price: 1200, stock: 0 },
    { id: "P04", name: "Marker", price: 1500, stock: 4 }
];



// Calculate the total value of available inventory.


console.log("\n========== TASK 1: INVENTORY VALUE ==========");

let total = 0;

for (const product of products) {

    if (product.stock > 0) {

        total += product.price * product.stock;

    }
}

console.log("Total inventory value:", total, "RWF");




// Validate inputs and calculate the purchase amount.


console.log("\n========== TASK 2: PURCHASE CALCULATION ==========");

function calculateTotal(quantity, unitPrice) {

    // Check that quantity and unitPrice are numbers.
    if (typeof quantity !== "number" ||
        typeof unitPrice !== "number") {
        return null;
    }

    // Quantity must be a positive whole number.
    if (!Number.isInteger(quantity) || quantity <= 0) {
        return null;
    }

    // Unit price must be a nonnegative whole number.
    if (!Number.isInteger(unitPrice) || unitPrice < 0) {
        return null;
    }

    // Calculate and return the purchase total.
    return quantity * unitPrice;
}

// Demonstrating the required test cases.

console.log("3 items at 3500 RWF:",
    calculateTotal(3, 3500));

console.log("1 item at 0 RWF:",
    calculateTotal(1, 0));

console.log("Quantity 0:",
    calculateTotal(0, 500));

console.log("Quantity 2.5:",
    calculateTotal(2.5, 500));

console.log("Numeric string:",
    calculateTotal("3", 500));

console.log("Negative unit price:",
    calculateTotal(2, -500));



// Find products, calculate inventory value and
// identify products with low stock.


console.log("\n========== TASK 3: PRODUCT MANAGEMENT ==========");


// FUNCTION 1: FIND PRODUCT BY ID

function findProduct(productList, productId) {

    const product = productList.find(
        item => item.id === productId
    );

    // Return the product or null if it is not found.
    return product || null;
}


// FUNCTION 2: CALCULATE INVENTORY VALUE

function calculateInventoryValue(productList) {

    let inventoryValue = 0;

    for (const product of productList) {

        inventoryValue += product.price * product.stock;

    }

    return inventoryValue;
}


// FUNCTION 3: GET PRODUCTS WITH LOW STOCK

function getLowStockProducts(productList, threshold) {

    return productList.filter(
        product => product.stock < threshold
    );
}


// DEMONSTRATING THE THREE FUNCTIONS

console.log("\n--- Product Search ---");

console.log("Product P02:",
    findProduct(products, "P02"));

console.log("Unknown product P99:",
    findProduct(products, "P99"));


console.log("\n--- Total Inventory Value ---");

console.log("Inventory value:",
    calculateInventoryValue(products), "RWF");


console.log("\n--- Products Below Stock 5 ---");

console.log(
    getLowStockProducts(products, 5)
);


// TESTING ALL THREE FUNCTIONS WITH EMPTY ARRAYS

console.log("\n--- Empty Array Tests ---");

console.log("Find product:",
    findProduct([], "P02"));

console.log("Inventory value:",
    calculateInventoryValue([]));

console.log("Low stock products:",
    getLowStockProducts([], 5));



// Validate the sale, check available stock,
// reduce stock and return the sale amount.

console.log("\n========== TASK 4: SALES MANAGEMENT ==========");


// CORRECTED SELL PRODUCT FUNCTION

function sellProduct(productList, productId, quantity) {

    // Find the requested product.
    const product = productList.find(
        item => item.id === productId
    );

    // Check whether the product exists.
    if (!product) {
        return null;
    }

    // Validate the quantity.
    if (typeof quantity !== "number" ||
        !Number.isInteger(quantity) ||
        quantity <= 0) {
        return null;
    }

    // Check whether enough stock is available.
    if (product.stock < quantity) {
        return null;
    }

    // Calculate the total sale amount.
    const saleAmount = product.price * quantity;

    // Reduce stock after a successful sale.
    product.stock -= quantity;

    // Return the total sale amount.
    return saleAmount;
}


// CREATE A FRESH COPY OF THE ORIGINAL PRODUCTS

const salesProducts = products.map(
    product => ({ ...product })
);


// DEMONSTRATION 1: SUCCESSFUL SALE

console.log("\n--- Successful Sale ---");

const stockBeforeSale = salesProducts[1].stock;

console.log("Product: Pen");
console.log("Stock before sale:", stockBeforeSale);

const successfulSale = sellProduct(
    salesProducts,
    "P02",
    3
);

console.log("Sale amount:", successfulSale, "RWF");
console.log("Stock after sale:", salesProducts[1].stock);


// DEMONSTRATION 2: REJECTED SALE

console.log("\n--- Rejected Sale ---");

const stockBeforeRejectedSale = salesProducts[3].stock;

console.log("Product: Marker");
console.log("Stock before sale:", stockBeforeRejectedSale);

const rejectedSale = sellProduct(
    salesProducts,
    "P04",
    10
);

console.log("Sale result:", rejectedSale);
console.log("Stock after rejected sale:", salesProducts[3].stock);


// Additional sale validation demonstrations.

console.log("\n--- Additional Sale Validation ---");

console.log("Unknown product:",
    sellProduct(salesProducts, "P99", 2));

console.log("Invalid quantity:",
    sellProduct(salesProducts, "P01", 2.5));



// Demonstrate expected and actual results.


console.log("\n========== TASK 5: TESTING ==========");


// FOUR TEST CASES

const testCases = [
    {
        name: "Normal purchase",
        quantity: 3,
        unitPrice: 3500,
        expected: 10500
    },
    {
        name: "Boundary purchase",
        quantity: 1,
        unitPrice: 0,
        expected: 0
    },
    {
        name: "Invalid quantity",
        quantity: 0,
        unitPrice: 500,
        expected: null
    },
    {
        name: "Invalid numeric string",
        quantity: "3",
        unitPrice: 500,
        expected: null
    }
];


// RUN AND DISPLAY THE TEST RESULTS

console.log("\n--- Test Results ---");

for (const test of testCases) {

    const actual = calculateTotal(
        test.quantity,
        test.unitPrice
    );

    const passed = actual === test.expected;

    console.log("--------------------------------");

    console.log("Test:", test.name);
    console.log("Inputs:", test.quantity, test.unitPrice);
    console.log("Expected result:", test.expected);
    console.log("Actual result:", actual);
    console.log("Status:", passed ? "PASSED" : "FAILED");
}



// Include products whose stock is equal to or below
// the threshold.


console.log("\n--- Low Stock Comparison ---");

function getLowStockProductsOrEqual(productList, threshold) {

    return productList.filter(
        product => product.stock <= threshold
    );
}


// Original condition: stock below 4.

console.log("Stock below 4:");

console.log(
    getLowStockProducts(products, 4)
);


// New condition: stock equal to or below 4.

console.log("Stock equal to or below 4:");

console.log(
    getLowStockProductsOrEqual(products, 4)
);


console.log("\n========== PROGRAM COMPLETED ==========");
