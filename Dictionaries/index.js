/**
 * Dictionary Class
 */
function Dictionary() {
    this.dataStore = new Array();
    this.add       = add;
    this.find      = find;
    this.remove    = remove;
    this.showAll   = showAll;
    this.count     = count;
    this.clear     = clear;
}

function add(key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for(var key in this.dataStore.sort()) { // for(var key in Object.keys(this.dataStore))
        console.log(`${key} : ${this.dataStore[key]}`)
    }
}

function count() {
    var n=0;
    for(var key in this.dataStore) {
        ++n;
    }
    return n;
}

function clear() {
    for(var key in this.dataStore) {
        delete this.dataStore[key];
    }
}

/* example-1
var books = new Dictionary();
books.add("Mike", "123");
books.add("David", "345");
books.add("Cynthia", "567");
console.log(`David's extension: ${books.find('David')}`);
books.remove('David');
books.showAll();
*/

/* example-2
var books = new Dictionary();
books.add("Mike", "123");
books.add("David","456");
books.add("Cynthia", "789");
console.log(`Number of entries: ${books.count()}`);
console.log(`David's extension: ${books.find('David')}`);
books.showAll();
books.clear();
console.log(`Number of entries: ${books.count()}`);
*/

var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();