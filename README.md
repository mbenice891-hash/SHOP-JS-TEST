
# PRODUCT AND INVENTORY MANAGEMENT SYSTEM

## 1. Project Description

This project is a JavaScript-based Product and Inventory Management System designed to help a small shop manage its products, calculate inventory value, process sales, validate purchases, and identify products with low stock.

The system uses JavaScript functions, arrays, objects, loops, conditional statements, and array methods to perform different inventory management operations.

The main purpose of this project is to reduce manual work, improve stock monitoring, and make product and sales management easier and more accurate.

## 2. Project Objectives

The objectives of this project are:

- To calculate the total value of available inventory.
- To validate purchase inputs before calculating the purchase amount.
- To search for products using their unique product IDs.
- To identify products with low stock.
- To manage product sales and update stock automatically.
- To test the program using different test cases.
- To compare different low-stock conditions.

## 3. Technologies Used

The project uses the following technologies:

- JavaScript: Used to develop the inventory management program.
- Node.js: Used to execute JavaScript code outside a web browser.
- Visual Studio Code: Used as the code editor.
- Terminal: Used to run and test the program.

## 4. Product Data

The program uses an array called `products` containing four products.

| Product ID | Product Name | Price (RWF) | Stock |
|---|---|---:|---:|
| P01 | Notebook | 3,500 | 10 |
| P02 | Pen | 500 | 25 |
| P03 | Folder | 1,200 | 0 |
| P04 | Marker | 1,500 | 4 |

Each product is stored as an object containing four properties:

- `id`: Unique identification of the product.
- `name`: Name of the product.
- `price`: Price of one product.
- `stock`: Number of available products.

## 5. System Tasks and Explanations

### TASK 1: Calculate Total Inventory Value

This task calculates the total monetary value of available products in the shop.

The program uses:

- A `for...of` loop to access each product.
- An `if` statement to check whether the product has available stock.
- The multiplication operator `*` to calculate each product's stock value.
- The addition assignment operator `+=` to calculate the total value.

Formula:

Inventory Value = Product Price × Available Stock

The program ignores products with zero stock.

Expected output:

Total inventory value: 53000 RWF

### TASK 2: Purchase Calculation and Input Validation

This task uses a function called `calculateTotal(quantity, unitPrice)` to calculate the total purchase amount.

The function validates the inputs before performing calculations.

Validation rules:

- Quantity must be a number.
- Unit price must be a number.
- Quantity must be a positive whole number.
- Unit price must be a nonnegative whole number.
- Invalid inputs return `null`.

Formula:

Purchase Total = Quantity × Unit Price

Example:

3 items × 3500 RWF = 10500 RWF

The program also tests invalid quantities, decimal quantities, numeric strings, and negative prices.

### TASK 3: Product Management

This task contains three functions.

**A. findProduct()**

Searches for a product using its product ID.

It uses the JavaScript `find()` method to locate the requested product.

If the product exists, it returns the product information. Otherwise, it returns `null`.

**B. calculateInventoryValue()**

Calculates the total inventory value by multiplying each product's price by its stock quantity and adding the results.

Unlike Task 1, this function includes every product in the calculation, including products with zero stock.

**C. getLowStockProducts()**

Identifies products whose stock is below a specified threshold.

It uses the JavaScript `filter()` method.

For example, when the threshold is 5, the program identifies products with stock below 5.

The program also tests all three functions using empty arrays.

### TASK 4: Sales Management

This task uses a function called `sellProduct(productList, productId, quantity)` to manage product sales.

The function performs the following operations:

1. Searches for the selected product using its ID.
2. Checks whether the product exists.
3. Validates the quantity.
4. Checks whether enough stock is available.
5. Calculates the total sale amount.
6. Reduces the available stock after a successful sale.
7. Returns the sale amount.

Formula:

Sale Amount = Product Price × Quantity Sold

Example:

Selling 3 pens:

500 RWF × 3 = 1500 RWF

Stock before sale: 25

Stock after sale: 22

If the product does not exist, the quantity is invalid, or the stock is insufficient, the function returns `null` and does not reduce the stock.

The program creates a copy of the original products to perform sales testing without changing the original product data.

### TASK 5: Testing and Validation

This task tests the purchase calculation function using four test cases.

| Test Case | Input | Expected Result |
|---|---|---|
| Normal purchase | 3 × 3500 | 10500 |
| Boundary purchase | 1 × 0 | 0 |
| Invalid quantity | 0 × 500 | null |
| Invalid numeric string | "3" × 500 | null |

The program compares the expected result with the actual result.

It uses a conditional operator to display:

- PASSED: When the actual result matches the expected result.
- FAILED: When the actual result does not match the expected result.

### ADDITIONAL TASK: Low Stock Comparison

This section compares two different ways of identifying products with low stock.

**First function: getLowStockProducts()**

Uses the condition:

`product.stock < threshold`

This identifies products whose stock is strictly below the threshold.

**Second function: getLowStockProductsOrEqual()**

Uses the condition:

`product.stock <= threshold`

This identifies products whose stock is below or equal to the threshold.

The difference is that the second function also includes products whose stock is exactly equal to the threshold.

## 6. JavaScript Concepts Used

The project demonstrates the following JavaScript concepts:

| Concept | Purpose |
|---|---|
| Variables | Store information and calculated values. |
| Arrays | Store multiple products. |
| Objects | Represent individual products. |
| Functions | Organize reusable program operations. |
| for...of loop | Iterate through product records. |
| if statements | Check conditions and validate inputs. |
| find() | Search for a product. |
| filter() | Identify products that meet conditions. |
| map() | Create a copy of product data. |
| typeof | Check the data type of an input. |
| Number.isInteger() | Validate whole-number inputs. |
| return | Send results from functions. |
| console.log() | Display program results. |
| Conditional operator | Display testing status. |

## 7. How to Run the Program

Follow these steps to execute the project:

1. Install Node.js on your computer.
2. Open Visual Studio Code.
3. Create or open your project folder.
4. Create a JavaScript file named `assignment.js`.
5. Copy the JavaScript program into the file.
6. Save the file using Ctrl + S.
7. Open the VS Code terminal.
8. Execute the following command:

```bash
node assignment.js
```

9. Press Enter to run the program.
10. Check the terminal to see the results of all tasks.

## 8. Expected Results

After executing the program, the system should:

- Display the total available inventory value.
- Calculate valid purchase amounts.
- Reject invalid purchase inputs.
- Search for products using their IDs.
- Calculate the total inventory value.
- Identify products with low stock.
- Process successful sales.
- Reject unsuccessful sales without changing stock.
- Display testing results as PASSED or FAILED.
- Compare low-stock conditions using `<` and `<=`.

## 9. Conclusion

The Product and Inventory Management System demonstrates how JavaScript can be used to solve common inventory management problems in a small business.

It helps simplify stock calculations, product searching, purchase validation, sales processing, and low-stock identification.

Through this project, important JavaScript programming concepts have been applied to develop a practical solution that can improve the accuracy and efficiency of shop operations.

## 10. Future Improvements

In the future, the system can be improved by:

- Adding a graphical user interface (GUI).
- Connecting the system to a database.
- Adding product registration and updating features.
- Generating daily and monthly sales reports.
- Adding automatic low-stock notifications.
- Creating user login and authentication.
- Developing a web-based inventory management system.

---

**Project:** Product and Inventory Management System

**Programming Language:** JavaScript

**Runtime Environment:** Node.js

**Code Editor:** Visual Studio Code
