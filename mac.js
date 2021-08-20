
const largeMemory = document.getElementById('large-memory');
const lowMemory = document.getElementById('low-memory');
const memoryCost = document.getElementById('memory-cost');
const lowStorage = document.getElementById('low-storage');
const middleStorage =document.getElementById('middle-storage');
const largeStorage = document.getElementById('large-storage');
const storageCost = document.getElementById('storage-cost');

// button memory
largeMemory.addEventListener('click', function(){

    memoryCost.innerText = '180';
})
lowMemory.addEventListener('click', function(){

    memoryCost.innerText = '0';
})
// button storage
lowStorage.addEventListener('click', function(){
    
    storageCost.innerText = '0';
})

middleStorage.addEventListener('click', function(){
    
    storageCost.innerText = '100';

})

largeStorage.addEventListener('click', function(){
    
    storageCost.innerText = '180';
})


