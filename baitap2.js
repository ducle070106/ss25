function sumTwoNumbers(num1, num2) {   
    if (typeof num1 !== 'number' || typeof num2 !== 'number' ||   
        !Number.isInteger(num1) || !Number.isInteger(num2)) {  
        return "Dữ liệu không hợp lệ";  
    }  
 
    return num1 + num2;  
}  

console.log(sumTwoNumbers(2, 6));       
console.log(sumTwoNumbers(3, "text"));    
console.log(sumTwoNumbers(7, -7));     
console.log(sumTwoNumbers(4.5, 3));   