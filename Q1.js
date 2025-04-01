function findMaxPurchase(budget, keyboardPrices, mousePrices) {
    let maxPurchase = -1;

    keyboardPrices.forEach(keyboard => {
        mousePrices.forEach(mouse => {
            let total = keyboard + mouse;
            if (total <= budget && total > maxPurchase) {
                maxPurchase = total;
            }
        });
    });

    return maxPurchase;
}

const budget1 = 60;
const keyboardPrices1 = [40, 50, 60];
const MousePrices1 = [5, 8, 12];


console.log(findMaxPurchase(budget1,keyboardPrices1,MousePrices1));

const budget2 = 20;
const keyboardPrices2 = [30, 15];
const MousePrices2 = [8, 10 ,6];


console.log(findMaxPurchase(budget2,keyboardPrices2,MousePrices2));


const budget3 = 10;
const keyboardPrices3 = [3, 1];
const MousePrices3 = [5, 2 ,8];


console.log(findMaxPurchase(budget3,keyboardPrices3,MousePrices3));

