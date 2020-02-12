function factorial(x){
    
    var factor = 1
    
    for(var i = x; i > 1; i--){
        
        factor *= i
        
    }
    
    return factor
    
}

console.log(factorial(5))