function displayEvenNumbers(arr) {   
    if (!Array.isArray(arr)) {  
        return "Dữ liệu không hợp lệ";  
    }  
  
    const evenNumbers = arr.filter(num => {  
        return typeof num === 'number' && num % 2 === 0;  
    });  
 
    if (evenNumbers.length === 0) {  
        return "Mảng không chứa số chẵn";  
    }  

    return evenNumbers;  
}  

console.log(displayEvenNumbers([11, 4, 65, 6]));     
console.log(displayEvenNumbers([1, 3, 5, 17]));      
console.log(displayEvenNumbers("text"));         