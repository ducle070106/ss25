function isPalindrome(str) {  
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();  
     
    const reversedStr = cleanedStr.split('').reverse().join('');  

    return cleanedStr === reversedStr;  
}  
 
const userInput = prompt("Nhập vào một chuỗi:");  

if (userInput) {  
    if (isPalindrome(userInput)) {  
        alert(`"${userInput}" là chuỗi đối xứng.`);  
    } else {  
        alert(`"${userInput}" không phải chuỗi đối xứng.`);  
    }  
} else {  
    alert("Bạn chưa nhập chuỗi nào.");  
}  