// write code here
function multiplyNumbers(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((acc, num) => acc * num, 1);
}

console.log(multiplyNumbers(2, 3, 4)); 
console.log(multiplyNumbers(5, 6));    
console.log(multiplyNumbers(10));      
console.log(multiplyNumbers());        
