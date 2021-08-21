// document.getElementById('first-memory').addEventListener('click', function(){
//     memoryCost = document.getElementById('memory-cost');
//     memoryCostAmount = 200;
//     memoryCost.innerText = memoryCostAmount;
// })
function updatePartsCost(extraPartID, partCostID, price) {
    document.getElementById( extraPartID ).addEventListener( 'click', function() {
        partCost = document.getElementById(partCostID);
        partCost.innerText = price;
        updateTotalCost();
    } )
}
function updateTotalCost() {
    bestPrice = document.getElementById('best-price').innerText;
    memoryCost = document.getElementById('memory-cost').innerText;
    storageCost = document.getElementById('storage-cost').innerText;
    deliveryCost = document.getElementById('delivery-cost').innerText;
    totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    document.getElementById('total-cost').innerText = totalCost;
}

updatePartsCost( 'first-memory', 'memory-cost', 0 );
updatePartsCost( 'second-memory', 'memory-cost', 180 );
updatePartsCost( 'first-storage', 'storage-cost', 0 );
updatePartsCost( 'second-storage', 'storage-cost', 100 );
updatePartsCost( 'third-storage', 'storage-cost', 180 );
updatePartsCost( 'first-delivery', 'delivery-cost', 0 );
updatePartsCost( 'second-delivery', 'delivery-cost', 20 );