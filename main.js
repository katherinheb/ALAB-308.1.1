//step 1

let loop = 0;

function infinite (){
    loop++;
    infinite();
}

try{
    infinite();
} catch (error){
    console.error(error);
    console.log("overflow is", loop);
}

//step 2

function trampoline (endLoop){
    let result = [];
    for (let i = 0; i < endLoop.length; i++){
        if (Array.isArray(endLoop[i])){
        } else {
            result.push(endLoop[1])
        }
    }
    return result;
}

const endTheLoop = infinite (trampoline, [1,[2,[3,4]],5]);
console.log(endTheLoop);

//step 3

const primeCounter = document.getElementById('Prime')

function isPrime(num){
    if (num <= 1) return false;
    for (let i= 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

function isThisPrime(n){
    for (let i = 2; i <= n; i++){
        if (isPrime(i)){
            setTimeout(() =>{
            primeCounter.innerHTML += i + "";
        }, 0);
    }
    setTimeout(() => {
    alert("fin");
}, 0);
}

findPrimes(10000);}