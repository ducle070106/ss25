function capitalizeFirstLetter(sentence) {  
    let result = "";  

    const words = sentence.split(" ");  

    for (let i = 0; i < words.length; i++) {  
        let word = words[i];  

        if (word.length > 0) {  
            result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  
        }  
 
        if (i < words.length - 1) {  
            result += " ";  
        }  
    }  

    return result;  
}  

console.log(capitalizeFirstLetter("hello WORLD"));  
console.log(capitalizeFirstLetter("rIKKei acaDEMy"));