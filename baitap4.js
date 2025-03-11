function isPrimeNumber(num) {   
    if (typeof num !== 'number' || !Number.isInteger(num) || num <= 1) {  
        return "Dữ liệu không hợp lệ";  
    }  
 
    for (let i = 2; i <= Math.sqrt(num); i++) {  
        if (num % i === 0) {  
            return "Không phải là số nguyên tố";  
        }  
    }  

    return "Là số nguyên tố";  
}  
 
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(6)); 
console.log(isPrimeNumber("text"));
console.log(isPrimeNumber(1));