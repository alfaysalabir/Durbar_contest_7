/* You are given an initial inventory of products and a list of transactions. Your task is to apply these transactions to the inventory and return the final state of each product's quantity.

For 'stock-in' transactions, add the quantity to the product's current stock.
For 'stock-out' transactions, subtract the quantity. However, a product's stock can never fall below zero. If a 'stock-out' transaction would result in a negative quantity, the stock should instead be set to zero.

Products not present in the initial inventory but appearing in transactions should be treated as starting with a quantity of zero before any transactions are applied to them.

Example 1
Input: initialInventory = {"apple":10,"banana":5}, transactions = [{"productId":"apple","quantity":3,"type":"in"},{"productId":"banana","quantity":2,"type":"out"}]

Output: {"apple":13,"banana":3}

Explanation: Apple stock increases by 3, banana stock decreases by 2.

Example 2
Input: initialInventory = {"orange":2}, transactions = [{"productId":"orange","quantity":2,"type":"out"},{"productId":"grape","quantity":7,"type":"in"}]

Output: {"grape":7,"orange":0}

Explanation: Orange stock goes to zero. Grape is a new product, starting at 0 and increasing by 7.

Constraints
`initialInventory` will be an object where keys are product IDs (strings) and values are non-negative integers representing quantities.
`transactions` will be an array of objects.
Each transaction object will have `productId` (string), `type` ('in' or 'out'), and `quantity` (non-negative integer).
Product IDs are case-sensitive.
Quantities will be within standard JavaScript number limits.
The number of initial products and transactions will be small enough for efficient processing (e.g., up to 1000 items/transactions).

You are given an initial inventory of products and a list of transactions. Your task is to apply these transactions to the inventory and return the final state of each product's quantity.

For 'stock-in' transactions, add the quantity to the product's current stock.
For 'stock-out' transactions, subtract the quantity. However, a product's stock can never fall below zero. If a 'stock-out' transaction would result in a negative quantity, the stock should instead be set to zero.

Products not present in the initial inventory but appearing in transactions should be treated as starting with a quantity of zero before any transactions are applied to them.

Example 1
Input: initialInventory = {"apple":10,"banana":5}, transactions = [{"productId":"apple","quantity":3,"type":"in"},{"productId":"banana","quantity":2,"type":"out"}]

Output: {"apple":13,"banana":3}

Explanation: Apple stock increases by 3, banana stock decreases by 2.

Example 2
Input: initialInventory = {"orange":2}, transactions = [{"productId":"orange","quantity":2,"type":"out"},{"productId":"grape","quantity":7,"type":"in"}]

Output: {"grape":7,"orange":0}

Explanation: Orange stock goes to zero. Grape is a new product, starting at 0 and increasing by 7.

Constraints
`initialInventory` will be an object where keys are product IDs (strings) and values are non-negative integers representing quantities.
`transactions` will be an array of objects.
Each transaction object will have `productId` (string), `type` ('in' or 'out'), and `quantity` (non-negative integer).
Product IDs are case-sensitive.
Quantities will be within standard JavaScript number limits.
The number of initial products and transactions will be small enough for efficient processing (e.g., up to 1000 items/transactions). */


function reconcileInventory(initialInventory, transactions) {

    const inventory = { ...initialInventory };

    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        const id = transaction.productId;
        const quantity = transaction.quantity;

        if (transaction.type === "in") {
            inventory[id] = (inventory[id] || 0) + quantity;
        }
        else if (transaction.type === "out") {
            inventory[id] = Math.max(0, (inventory[id] || 0) - quantity);
        }
    }

    return inventory;
}