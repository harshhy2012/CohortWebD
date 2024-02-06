/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs
  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result=0){
    this.result=result
  }

  add(b){
    this.result+=b;
    return this;
  }

  subtract(b){
    this.result-=b;  
    return this;
  }

  multiply(b){
    this.result = b;
    
  }
  divide(b){
    if(b!==0)
      this.result/=b;
    else{
      throw new Error('Divide by zero is illegal!') 
    }
    return this;
  }
  clear(){
    this.result = 0;
    return this;
  }

  getResults(){
    return this.result;
  }

  // 10 +   2 *    (   6 - (4 + 1) / 2) + 7
  Calculate(str){
    const bindings = [
      {action: 'add', symbol: '+'},
      {action: 'subtract', symbol: '-'},
      {action: 'multiply', symbol: '*'},
      {action: 'divide', symbol: '/'},
    ];
    str = str.replace(' ', '');
    for(let i = 0; i< str.length;i++){
      if((/[^a-zA-Z]/g).test(str[i])){
        throw new Error('Invalid operation!')
      }
      if(ch === '+'){
        
      }
    }
  }
}

module.exports = Calculator;
