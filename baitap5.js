function countPositiveNumbers(arr) {  
    if (!Array.isArray(arr)) {  
        return "Dữ liệu không hợp lệ";  
    }  

    let count = 0;  
    for (let i = 0; i < arr.length; i++) {  
        if (Number.isInteger(arr[i]) && arr[i] > 0) {  
            count++;  
        }  
    }  

    if (count === 0) {  
        return "Không có số nguyên dương trong mảng";  
    }  

    return count;  
}  

console.log(countPositiveNumbers([4, 5.4, 6, -2]));    
console.log(countPositiveNumbers([1, 2, 5, 7, -8, 6])); 
console.log(countPositiveNumbers([1.2, -3, -6]));          
console.log(countPositiveNumbers("text"));      