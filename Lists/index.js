/**
 *  List Class
 */
function List() {

  this.listSize   = 0;
  this.pos        = 0;
  this.dataStore  = [];
  this.clear      = clear;
  this.find       = find;
  this.toString   = toString;
  this.insert     = insert;
  this.append     = append;
  this.remove     = remove;
  this.front      = front;
  this.end        = end;
  this.prev       = prev;
  this.next       = next; 
  this.length     = length;
  this.currPos    = currPos;
  this.moveTo     = moveTo;
  this.getElement = getElement;
  this.contains   = contains;
}

/**
 *  After the element is appended,
 *  listSize is incremented by 1.
*/
function append(element) {
  this.dataStore[this.listSize++] = element;
}

/**
 *  Find element index
 */
function find(element) {
  for(var i=0; i<this.dataStore.length; i++) {
    if (this.dataStore[i] == element ) {
      return i;
    }
  }
  return -1;
}

/**
 *  Removing an element from a list
 */
function remove(element) {
  var foundAt = this.find(element);
  if(foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

/**
 *  Determining the number of element in a list
 */
function length() {
  return this.listSize;
}

/**
 *  Retrieving a list's elements
 */
function toString() {
  return this.dataStore;
}

/**
 * Inserting an element into a list
 */
function insert(element, after) {
  var insertPos = this.find(after);
  if(insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

/**
 * Removing All Elements from a List
 */
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

/**
 * Determining if a Given Value Is in a List
 */
function contains(element) {
  for(var i=0; i<this.dataStore.length; ++i) {
    if(this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if(this.pos < this.listSize-1) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos]
}

//////////// EXAMPLE ///////////////////

const fs = require("fs")

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

function createArr(file) {
  var arr = fs.readFileSync(file, 'utf-8').split('\n');
  for(var i=0; i<arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

function displayList(list) {
  for(list.front(); list.currPos() < list.length(); list.next()) {
    if(list.getElement() instanceof Customer) {
      console.log(list.getElement()['name'] + "," +
                  list.getElement()['movie']);
    } else {
      console.log(list.getElement());
    }
  }
}

function checkOut(name, movie, movieList, customerList) {
  if(movieList.contains(movie)) {
    var c = new Customer(name, movie);
    customerList.append(c);
    movieList.remove(movie);
  } else {
    console.log(movie + " is not available");
  }
}


var movies    = createArr('./films.txt')
var movieList = new List()
var customerList = new List()

for(var i=0; i<movies.length; i++) {
  movieList.append(movies[i]);
}

displayList(movieList)
checkOut('jane doe', 'The Godfather', movieList, customerList)
