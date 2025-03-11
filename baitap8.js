function isStrongPassword(password) {   
    if (password.length < 8) {  
        return false;  
    }  
 
    let hasUpperCase = false;  
    let hasLowerCase = false;   
    let hasNumber = false; 

    for (let i = 0; i < password.length; i++) {  
        const char = password[i];  

        if (char >= 'A' && char <= 'Z') {  
            hasUpperCase = true;
        }  
        if (char >= 'a' && char <= 'z') {  
            hasLowerCase = true; 
        }  
        if (char >= '0' && char <= '9') {  
            hasNumber = true; 
        }  
    }  
 
    return hasUpperCase && hasLowerCase && hasNumber;  
}  
 
console.log(isStrongPassword("Abc123!@")); 
console.log(isStrongPassword("weakpass"));  