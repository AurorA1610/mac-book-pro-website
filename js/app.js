//  function to update cost list
function updatePartsCost( extraPartID, partCostID, price ) {
    document.getElementById( extraPartID ).addEventListener( 'click', function() {

        // updating the part's cost
        const partCost = document.getElementById( partCostID );
        partCost.innerText = price;

        // calling function for updating the total cost
        updateTotalCost();
    } )
}


// function to add all prices
function updateTotalCost() {

    // getting all the costs 
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    // adding all the costs
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);

    // updating the total price amount
    document.getElementById('total-cost').innerText = totalCost;

    // updating the total amount
    document.getElementById('final-total').innerText = totalCost;
}


// calling function for updating the parts' cost on click
updatePartsCost( 'first-memory', 'memory-cost', 0 );
updatePartsCost( 'second-memory', 'memory-cost', 180 );
updatePartsCost( 'first-storage', 'storage-cost', 0 );
updatePartsCost( 'second-storage', 'storage-cost', 100 );
updatePartsCost( 'third-storage', 'storage-cost', 180 );
updatePartsCost( 'first-delivery', 'delivery-cost', 0 );
updatePartsCost( 'second-delivery', 'delivery-cost', 20 );


// updating the total on application of the promo code
document.getElementById( 'apply-promo' ).addEventListener( 'click', function() {
    const promoInput = document.getElementById( 'promo-text' );
    const promoText = promoInput.value;
    const promoCode = 'stevekaku';

    // checking if the applied promo matches the correct promo
    if( promoText == promoCode ) {

        // geting the total price amount
        const totalCost = document.getElementById('total-cost').innerText;

        // applying discount
        const discount = totalCost * 0.2;
        const updatedTotalCost = totalCost - discount;

        // updating the total amount
        document.getElementById('final-total').innerText = updatedTotalCost;

        // disabling the apply button
        document.getElementById('apply-promo').disabled = true;
        document.getElementById('apply-promo').style.backgroundColor = "gray";
    }
    
    // clearing input 
    promoInput.value = '';
} )