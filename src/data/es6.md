## Arrow functions
 > Lexical this, shorter functions.

```js
let obj = {
  method: function () {
    return () => this;
  }
};
// Due to lexical scope obj.method()() <===> obj

let fact = (n) => { return n === 0 ? 1 : n * fact(n-1); };

let fib = (n) => { return n < 2 ? n : fib(n-1) + fib(n-2); };
```

## Block Scope
 > Declares a block scope local variable, optionally initializing it to a value.

```js
var aboutme = () => {
  {
    var investements = 1;
    const salary = 10;
  }
  console.log(investements,salary); // 1, undefined.
}
```

## class
> Syntactical sugar over prototype-based inheritance.

```js
class Person {
  constructor(name) {
    this.name = name;
    this.movement = "walks";
  }

  move(meters) {
    console.log(`${this.name} ${this.movement} ${meters}m.`);
  }
}

class Hero extends Person {
  constructor(name, movement) {
    this.name = name;
    this.movement = movement;
  }

  move() {
    super.move(500);
  }
}

let clark = new Person("Clark Kent");

let superman = new Hero("Superman", "flies");

clark.move(100);
// -> Clark Kent walks 100m.

superman.move();
// -> Superman flies 500m.

/* Make a note of:

class Base {}
class Derived extends Base {}

//Here, Derived.prototype will inherit from Base.prototype.

let parent = {};
class Derived prototype parent {}
*/
```
## Computed property names
> An expression in brackets `[]`

```js
var obj = {
  [foo + bar]: "o_0",
  [foo + baz]: "0_o",
  foo: "foo",
  bar: "bar",
  baz: "baz"
};

console.log( obj.foobar ); // o_0
console.log( obj.foobaz ); // 0_o
```

## Default Params
> Initialize formal parameters with default values, if no value or undefined is passed.

```js
let greet = (msg="Hello",name="World!") => console.log(msg,name);

greet(); // Hello World!
```

## Destructuring
> Extract data from arrays or objects.

```js
var {foo, bar} = {foo: "lorem", bar: "ipsum"};
// foo => lorem and bar => ipsum
```
## Direct Proxy
> Define custom behavior for fundamental operations of an object.

```js
let NegativeIndices = (array) => {
  return new Proxy(array, {
    get: (receiver, name) => {
      let index;
      console.log('Proxy#get', array, name);
      index = parseInt(name);
      if (!isNaN(index) && index < 0) {
        array[array.length + index];
      } else {
        return array[name];
      }
    }
  });
};

/*
* Negative array indices:
* array = NegativeIndices [4, 420, 42]
* array[-1] is 42
*/
```
## for-of loop
> Loop over Iterator objects.

```js
for (let element of [1, 2, 3]) {
  console.log(element);
}
```

## Generators
> The function* declaration defines a generator function, which returns a Generator object.

```js
function *Counter(){
  var n = 0;
  while(1<2) {
      yield n;
      ++n;
  }
}

var CountIter = new Counter();

CountIter.next(); // {value: 0, done:false}
CountIter.next(); // {value: 1, done:false}
CountIter.next(); // {value: 2, done:false}
```

## Map
> Map object is a simple and effective key/value data-structure.

```js
let m = new Map();
m.set('answer', 42);
m.get('answer'); // 42
m.has('answer'); // true
m.delete('answer'); // true
m.has('answer'); // false

m.set(keyFunc,() => "foo");
m.get(keyFunc)(); // "foo"
```
## modules
> Module format common to CommonJS and AMD.

```js
/* In math.js */
export function div(x, y) {
  return x / y;
}
export var pi = 3.141593;

// In index.js
import {div, pi} from math;

```
## Better Object Literal
> Better as in the example.

```js
var greet = {
  __proto__: theProtoObj,
  handler, // Instead of handler: handler
  world: () => "Hello World!",
  toString() {
    return "Results: " + super.toString()
  }
};
```

## Promises
> An operation that hasn't completed yet, but is expected in the future.

```js
const p1 = new Promise((resolve, reject) => { 
        if (···) {
            resolve(value); // success
        } else {
            reject(reason); // failure
        }
      });

p1
.then(console.log)
.catch(console.error)
```

## property-method-assignment
> Method syntax is supported in object initializers.

```js
let person = {
  get name() {
    return this._name;
  },
  set name(val){
    console.log("Setting name: " + val);
    this._name = val;
  }
};

/*
> person.name = "Hemanth"
"Hemanth"
"Setting name: Hemanth"

> person.name
"Hemanth"

```

## Rest params
> Variable number of arguments without using the arguments object.

```js
let sortRestArgs = (...theArgs) => theArgs.sort();

console.log(sortRestArgs(5,2,7,1)) // [1,2,5,7]
```
## Set
> Store unique values of any type.

```js
var cards = new Set()
cards.add('♠')
cards.add('♥')
cards.add('♦')
cards.add('♣')

cards.has('♠') //true

cards.has('joker') //false

cards.size //4

cards.forEach((card) => console.log(card));

/*
Would log:
♠
♥
♦
♣
*/

cards.add('♣')

cards.size // Still four as ♣ was already there in the cards set.
```

## Spread operator
> Expanded in places with `...` for arguments or multiple elements.

```js
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];
```
## Symbol
> Unique and immutable data type.

```js
var Cat = (function() {
    var nameSymbl = Symbol('name');

    function Cat(name) {
        this[nameSymbl] = name;
    }

    Cat.prototype.getName = function() {
        return this[nameSymbl];
    };

    return Cat;
}());

var c = new Cat('milly');
console.log("Cat's name: " + c.getName()); //milly
delete c.name; // Even after deleting
console.log("Cat's name is still: " + c.getName() + ' is private.'); // so milly
```

## Tail recursion
> Tail Calls, Optimization.

```js
let factorial = (n, acc = 1) => {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}
// NO S.O!
factorial(133333337);
```
## Template Literals
> Better string formatting capabilities.

```js
var First = "Hemanth";
var Last = " HM";
`${ First } + ${ Last } = ${ First + Last}` // "Hemanth + HM = Hemanth HM"
```

## Unicode in Regex
> Unicode aware regex.

```js
var string = 'foo𝌆bar';
var match = string.match(/foo(.)bar/u);
console.log(match[1]);
// → '𝌆'
```

## WeakMap
> key/value pairs, keys are objects and the values can be arbitrary values, references to key objects are held "weakly"

```js
var wm = new WeakMap();

wm.set('life'); //TypeError: Invalid value used as weak map key

wm.set('life', 'life'.length) //TypeError: Invalid value used as weak map key

var wmk = {};

wm.set(wmk,'life');

wm.get(wmk); // "life"

wm.has(wmk); // true

wm.delete(wmk); // true

wm.has(wmk); //false
```

## WeakSet
>Store weakly held objects in a collection.

```js
  var ws = new WeakSet();
  var foo = {};
  var bar = {};

  ws.add(window);
  ws.add(foo);

  ws.has(window); // true
  ws.has(bar); // false, bar has not been added to the set

  ws.delete(window); // removes window from the set
  ws.has(window); // false, window has been removed

  ws.clear(); // empty the whole WeakSet
```
