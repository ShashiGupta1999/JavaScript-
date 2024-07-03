function convertToCoins(amount, coins) {
    let result = [];
 
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
 
    return result;
}
 

let amount = 46;
let coinDenominations = [25, 10, 5, 2, 1];
let coins = convertToCoins(amount, coinDenominations);
console.log(coins); 