function findMinValue(arr) {  
    if (!Array.isArray(arr)) {  
        return "Giá trị không hợp lệ";  
    }  

    if (arr.length === 0) {  
        return "Mảng không chứa phần tử";  
    }    
    let minValue = arr[0];  

    for (let i = 1; i < arr.length; i++) {  
        if (typeof arr[i] !== 'number') {  
            return "Giá trị không hợp lệ";  
        }  

        if (arr[i] < minValue) {  
            minValue = arr[i];  
        }  
    }  

    return "Phần tử nhỏ nhất trong mảng là " + minValue;  
}  
 
console.log(findMinValue([2, 4, 8, 1, 9]));
console.log(findMinValue([]));  
console.log(findMinValue("abc"));
console.log(findMinValue([5, 2, 7, 5, 4])); 