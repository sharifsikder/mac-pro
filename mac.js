
const largeMemory = document.getElementById('large-memory');
const lowMemory = document.getElementById('low-memory');
const memoryCost = document.getElementById('memory-cost');
const lowStorage = document.getElementById('low-storage');
const middleStorage =document.getElementById('middle-storage');
const largeStorage = document.getElementById('large-storage');
const storageCost = document.getElementById('storage-cost');
const freeDelivery = document.getElementById('free-delivery');
const chargeDelivery = document.getElementById('charge-delivery');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const bestPrice = document.getElementById('best-Price');
const allTotal = document.getElementById('all-total');


// total price count 

function updateTotal(){

    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliveryPrice = Number(deliveryCharge.innerText);
    const fixedPrice = Number(bestPrice.innerText);
    const grandTotal =fixedPrice + memoryPrice + storagePrice + deliveryPrice;
    totalPrice.innerText = grandTotal;
    
    allTotal.innerText = grandTotal;
   
    
}

function getAllTotal(){
    
   
   
}
// button memory
largeMemory.addEventListener('click', function(){

    memoryCost.innerText = '180';
    updateTotal();
})
lowMemory.addEventListener('click', function(){

    memoryCost.innerText = '0';
    updateTotal();
})
// button storage
lowStorage.addEventListener('click', function(){
    
    storageCost.innerText = '0';
    updateTotal();
})

middleStorage.addEventListener('click', function(){
    
    storageCost.innerText = '100';
    updateTotal();
})

largeStorage.addEventListener('click', function(){
    
    storageCost.innerText = '180';
    updateTotal();
})

// button delivery
freeDelivery.addEventListener('click', function(){
    deliveryCharge.innerText = '0';
    updateTotal();
})

chargeDelivery.addEventListener('click', function(){
    deliveryCharge.innerText = '20';
    updateTotal();
})

