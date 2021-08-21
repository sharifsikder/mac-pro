
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
const pomoTotal = document.getElementById('all-total');
const pomoInput = document.getElementById('pomo-input');
const buttonPomo = document.getElementById('button-pomo');

// total price count 
function updateTotal(){
    const memoryPrice = Number(memoryCost.innerText);
    const storagePrice = Number(storageCost.innerText);
    const deliveryPrice = Number(deliveryCharge.innerText);
    const fixedPrice = Number(bestPrice.innerText);
    const grandTotal =fixedPrice + memoryPrice + storagePrice + deliveryPrice;
    totalPrice.innerText = grandTotal;
    
    pomoTotal.innerText = grandTotal;
      
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

// pomo button
function getPomoButton(){

    if(pomoInput.value == 'stevekaku'){
       
        const totalAllPrice = Number(totalPrice.innerText);
        const pomo = totalAllPrice * (20/100);
        const totalPomoPrice = totalAllPrice - pomo;
        pomoTotal.innerText = totalPomoPrice;    
    }

    else if( pomoInput.value != 'stevekaku'){

        alert('Please type the pomo code')
}
}
buttonPomo.addEventListener('click', function(){

    getPomoButton();
    pomoInput.value = '';
})


