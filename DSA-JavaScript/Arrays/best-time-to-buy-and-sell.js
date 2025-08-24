
let prices = [7,1,5,3,6,4]
// Output: 5

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let currentPrice of prices){
        minPrice = Math.min(currentPrice, minPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice)
    }
    return maxProfit
};

console.log(maxProfit(prices));