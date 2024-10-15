
function addTwo(x) {
    return x + 2;
}
function multiplyByThree(x) {
return x * 3;
}

function composedFunction(x) {
return multiplyByThree(addTwo(x));  
}  
console.log(composedFunction(5)); 

  // Output: (5 + 2) * 3 = 21
