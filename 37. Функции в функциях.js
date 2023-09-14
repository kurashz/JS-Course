const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateWeight(present){
    return present * KG_IN_USD; 
}

function calculateWeight(distance){
    return distance * KG_IN_USD; 
}

function getExchangePrice(present1, present2, distance) {
    // const price1 = present1 * KG_IN_USD;
    // const price2 = present2 * KG_IN_USD;
    // const distancePrice = distance * KM_IN_USD;
    // return price1 + price2 + distancePrice;

    const price1 = calculateWeight(present1);
    const price2 = calculateWeight(present2);
    const distancePrice = calculateWeight(distance);
    return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1,2,10));