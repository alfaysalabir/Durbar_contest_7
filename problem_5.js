/* Write a function selectBestDiscount that takes a purchase total price and an array of discount offers, and returns the single offer object that produces the lowest final payable price.

Each offer object has the following structure:

name (string): The identifier of the offer.
type (string): Either "flat" or "percent".
value (number): The discount amount or percentage value.
minPrice (number): The minimum purchase price required to use this discount.
Rules
An offer is eligible only if price >= offer.minPrice.
A "flat" discount reduces the price by offer.value.
A "percent" discount reduces the price by price * (offer.value / 100).
The final price after discount cannot fall below 0 (i.e. Math.max(0, discountedPrice)).
Return the offer object that results in the lowest final price. If no offer is eligible or no offer reduces the price below the original price, return null.
If multiple eligible offers yield the same lowest price, return the one that appears first in the offers array.
Examples
selectBestDiscount(100, [
  { name: "FLAT15", type: "flat", value: 15, minPrice: 50 },
  { name: "HALF", type: "percent", value: 50, minPrice: 150 }
]);
// Returns: { name: "FLAT15", type: "flat", value: 15, minPrice: 50 }
// Explanation: FLAT15 is eligible (100 >= 50) and gives price 85. HALF requires minPrice 150 (not met).
selectBestDiscount(200, [
  { name: "SAVE20", type: "flat", value: 20, minPrice: 100 },
  { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }
]);
// Returns: { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }
// Explanation: SAVE20 results in 180. 25PERCENT results in 150 (lower price).
Example 1
Input: price = 100, offers = [{"minPrice":50,"name":"FLAT15","type":"flat","value":15},{"minPrice":150,"name":"HALF","type":"percent","value":50}]

Output: {"minPrice":50,"name":"FLAT15","type":"flat","value":15}

Example 2
Input: price = 200, offers = [{"minPrice":100,"name":"SAVE20","type":"flat","value":20},{"minPrice":150,"name":"25PERCENT","type":"percent","value":25}]

Output: {"minPrice":150,"name":"25PERCENT","type":"percent","value":25}

Constraints
0 <= price <= 10,000
0 <= offers.length <= 100
0 <= offer.minPrice <= 10,000
0 <= offer.value <= 10,000

Hints
Hint 1. Keep track of the `bestOffer` found so far and the current `lowestPrice`.
Hint 2. Filter out offers where `price < offer.minPrice`.
Hint 3. Calculate final price based on `offer.type` ('flat' vs 'percent') and remember to cap the bottom price at 0 with `Math.max(0, discountedPrice)`.
Hint 4. Only update `bestOffer` if the calculated final price is strictly less than the current `lowestPrice`. */


function selectBestDiscount(price, offers) {
    let bestOffer = null;
    let lowestPrice = price;

    for (let i = 0; i < offers.length; i++) {
        const offer = offers[i];

        if (price < offer.minPrice) {
            continue;
        }

        let discountedPrice = price;
        if (offer.type === "flat") {
            discountedPrice = price - offer.value;
        } else if (offer.type === "percent") {
            discountedPrice = price - price * (offer.value / 100);
        }

        const finalPrice = Math.max(0, discountedPrice);

        if (finalPrice < lowestPrice) {
            lowestPrice = finalPrice;
            bestOffer = offer;
        }
    }

    return bestOffer;
}