function Stack() {

    this.dataStore = [];
    this.top       = 0;
    this.push      = push;
    this.pop       = pop;
    this.peek      = peek;
    this.clear     = clear;
    this.length    = length;
  }
  
  function push(element) {
    this.dataStore[this.top++] = element;
  }
  
  function pop() {
    return this.dataStore[--this.top];
  }
  
  function peek() {
    return this.dataStore[this.top - 1]
  }
  
  function length() {
    return this.top;
  }
  
  function clear() {
    this.top = 0;
  }
  
  //////////////// EXAMPLE ///////////////
  /*
  var s = new Stack()
  
  s.push("Mert")
  s.push("Anıl")
  s.push("Cevdet")
  var popped1 = s.pop()
  var popped2 = s.pop()
  console.log("The popped element is: " + popped1)
  console.log("The popped element is: " + popped2)
  */
  ////////////////////////////////////////
  
  function mulBase(num, base) {
    var s = new Stack();
    do {
      s.push(num % base);
      num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
      converted += s.pop();
    }
    return converted;
  }
  
  /* MulBase Example
  var num = 31;
  var base = 2;
  var newNum = mulBase(num, base);
  console.log(num + " converted to base " + base + " is " + newNum);
  */
  
  function isPalindrome(word) {
    var s = new Stack();
    for(var i=0; i<word.length; i++) {
      s.push(word[i]);
    }
    var sword = "";
    while(s.length() > 0) {
      sword += s.pop();
    }
  
    if(sword == word) {
      return true;
    } else {
      return false
    }  
  }
  
  var word1 = "amma";
  if(isPalindrome(word1)) {
    console.log(word1 + " is a palindrome.");
  } else {
    console.log(word1 + " is not a palindrome.");
  }
  
  /**
   * Recursion function
   */
  function factorial(n) {
    if(n === 0) {
      return 1;
    } else {
      return n * factorial(n-1);
    }
  }
  
  /**
   * Factorial with Stack class
   */
  function fact_with_stack(n) {
    var s = new Stack()
    while(n > 1) {
      s.push(n--);
    }
    var result = 1;
    while(s.length() > 0) {
      result *= s.pop();
    }
    return result;
  }