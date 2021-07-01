function Queue() {

    this.dataStore = [];
    this.enqueue   = enqueue;
    this.dequeue   = dequeue;
    this.front     = front;
    this.back      = back;
    this.toString  = toString;
    this.empty     = empty;
    this.count     = count;

    // Extra
    this.priority_dequeue = priority_dequeue;  
    this.priority_toString = priority_toString;
  }
  
  /**
   * adds an element to the end of a queue
   */
  function enqueue(element) {
    this.dataStore.push(element);
  }
  
  /**
   * removes an element from the front of a queue
   */
  function dequeue() {
    return this.dataStore.shift();
  }
  
  function front() {
    return this.dataStore[0];
  }
  
  function back() {
    return this.dataStore[this.dataStore.length-1];
  }
  
  function toString() {
    var str = ""
    for(var i=0; i<this.dataStore.length; i++) {
      str += this.dataStore[i] + "\n";
    }
    return str;
  } 
  
  function empty() {
    if(this.dataStore.length == 0){
      return true;
    } else {
      return false;
    }
  }
  
  function count() {
    return this.dataStore.length;
  }
  
  function priority_dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].code < priority) {
        priority = i;
      }
    }
    return this.dataStore.splice(priority,1);
  }
  
  function priority_toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i].name + " code: "
      + this.dataStore[i].code + "\n";
    }
    return retStr;
  }
  
  ////////////// EXAMPLE ///////////////////
  
  /*
  var q = new Queue();
  q.enqueue("Mert")
  q.enqueue("Anıl")
  q.enqueue("Burcu")
  q.toString()
  
  q.dequeue() // Removed 'Mert'
  q.toString()
  
  console.log("Front: " + q.front()) // console -> Anıl
  console.log("Back: " + q.back())   // console -> Burcu
  */
  
  ///////////// EXAMPLE //////////////////////
  
  var fs = require("fs");
  
  function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  function getDancer(males, females) {
    var names = fs.readFileSync
                ('./people.txt', 'utf-8')
                .split("\n")
    for(var i=0; i<names.length; i++) {
      names[i] = names[i].trim()
    }
  
    for(var j=0; j<names.length; j++) {
      var dancer = names[j].split(" ")
      var sex = dancer[0];
      var name = dancer[1]
      if(sex == 'F') {
        femaleDancers.enqueue(new Dancer(name, sex));
      }else {
        maleDancers.enqueue(new Dancer(name, sex));
      }
    }
  }
  
  function dance(males, females) {
    console.log("The dance partners are: \n");
    while(!males.empty() && !females.empty()) {
      var person = females.dequeue()
      console.log("Female dancer is: " + person.name);
      person = males.dequeue();
      console.log(" and the male dancer is: " + person.name);
    }
  }
  
  /// Test
  
  var maleDancers   = new Queue()
  var femaleDancers = new Queue()
  
  //getDancer(maleDancers, femaleDancers);
  //dance(maleDancers, femaleDancers)
  
  /* EX-1
  if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
  }
  if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
  }
  
  if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() +
  " male dancers waiting to dance.");
  }
  if (femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() +
  " female dancers waiting to dance.");
  }
  */
  
  function distribute(nums, queues, n, digit) {
    for(var i=0; i<n; i++) {
      if(digit == 1) {
        queues[nums[i]%10].enqueue(nums[i]);
      } else {
        queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
      }
    }
  }
  
  function collect(queues, nums) {
    var i=0;
    for(var digit=0; digit<10; digit++) {
      while(!queues[digit].empty()) {
        nums[i++] = queues[digit].dequeue();
      }
    }
  }
  
  function dispArray(arr) {
    for(var i=0; i<arr.length; i++) {
      console.log(arr[i] + " ")
    }
  }
  
  /* EX-2
  var queues = []
  for(var i=0; i<10; i++) {
    queues[i] = new Queue()
  }
  
  var nums = []
  for(var j=0; j<10; j++) {
    nums[j] = Math.floor(Math.floor(Math.random() * 101))
  }
  
  console.log("Before radix sort: ");
  dispArray(nums);
  distribute(nums, queues, 10, 1);
  collect(queues, nums);
  distribute(nums, queues, 10, 10);
  collect(queues, nums);
  console.log("\n\nAfter radix sort: ");
  dispArray(nums);
  */
  
  function Patient(name, code) {
    this.name = name;
    this.code = code;
  }
  
  var p = new Patient("Smith",5);
  var ed = new Queue();
  
  ed.enqueue(p);
  p = new Patient("Jones", 4);
  ed.enqueue(p);
  p = new Patient("Fehrenbach", 6);
  ed.enqueue(p);
  p = new Patient("Brown", 1);
  ed.enqueue(p);
  p = new Patient("Ingram", 1);
  ed.enqueue(p);
  console.log(ed.priority_toString())
  
  var seen = ed.priority_dequeue()
  console.log("Patient being treated: " + seen[0].name);
  console.log("Patients waiting to be seen: ")
  console.log(ed.priority_toString());
  var seen = ed.priority_dequeue()
  console.log("Patient being treated: " + seen[0].name);
  console.log("Patients waiting")
  
  var seen = ed.priority_dequeue()
  console.log("Patient being treated: " + seen[0].name)
  console.log("Patients waiting to be seen: ")
  console.log(ed.priority_toString());