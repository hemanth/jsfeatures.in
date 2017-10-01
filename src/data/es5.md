
## Object.create
> Creates a new object with the specified prototype object and properties.

```js
o = {};
// is equivalent to:
o = Object.create(Object.prototype);
```

Refer [MDN: Object create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

## Object.defineProperty
> Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

```js
Object.defineProperty(obj, 'answer', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
```
Refer [MDN: Object defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)


## Object.defineProperties
> Defines new or modifies existing properties directly on an object, returning the object.

```js
var obj = {};
Object.defineProperties(obj, {
  "name": {
    value: true,
    writable: true
  },
  "msg": {
    value: "Hello",
    writable: false
  }
  // etc. etc.
});
```
Refer [MDN: Object defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)


## Object.getPrototypeOf
> Returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```
Refer [MDN: Object create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)


## Object.keys
> Returns an array of a given object's own enumerable properties

```js
var arr = ['x', 'y', 'z'];
console.log(Object.keys(arr)); // ['0', '1', '2']
```
Refer [MDN: Object keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## Object.seal
> Prevents any new addition of properties but defined properties can be changed.

```js
var obj = {
  name: 'FooBar'
};
Object.seal(obj);
obj.name = 'BarFoo' // Works
delete obj.name // returns false and doesn't delete
```
Refer [MDN: Object seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

## Object.freeze
> Makes an object immutable

```js
var obj = {
  name: 'FooBar'
};
Object.freeze(obj);
obj.name = 'BarFoo';
obj.name // Will still be 'FooBar'
```
Refer [MDN: Object freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

## Object.preventExtensions
> Prevents future extensions to the object and "CONFIGURABLE" is not set to false for all the properties.

```js
var obj = {
  name: 'FooBar'
};
Object.preventExtensions(obj);
obj.name = 'BarFoo';
obj.name // Will still be 'FooBar'
```
Refer [MDN: Object preventExtensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

## Object.isSealed
> Checks if a given object is sealed.

```js
var obj = {};
Object.seal(obj);
Object.isSealed(obj) // true
```
Refer [MDN: Object isSeal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

## Object.isFrozen
> Checks if a given object is frozen.

```js
var obj = {};
Object.freeze(obj);
Object.isFrozen(obj) // true
```
Refer [MDN: Object isFrozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

## Object.isExtensible
> Checks if the given object can be extended.

```js
var obj = {};
Object.preventExtensions(obj);
Object.isExtensible(obj) // false
```
Refer [MDN: Object isExtensible](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

## Object.getOwnPropertyDescriptor
> Returns a property descriptor for an own property i.e directly on the object and not the prototype chain.

```js
Object.getOwnPropertyDescriptor({
  name: 'foo'
}, 'name');
/*{ 
  value: 'foo',
  writable: true,
  enumerable: true,
  configurable: true
}*/
```
Refer [MDN: Object getOwnPropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

## Object.getOwnPropertyNames
> Returns an array of all properties (enumerable or not) found directly upon a given object.

```js
var obj = {
  0: 'f',
  1: 'o',
  2: 'o'
};
Object.getOwnPropertyNames(obj).sort(); //'0,1,2'
```
Refer [MDN: Object getOwnPropertyNames](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

## Date.prototype.toISOString
> Returns a string in simplified extended ISO format. YYYY-MM-DDTHH:mm:ss.sssZ

```js
(new Date('1998-02-01')).toISOString();
// 1998-02-01T00:00:00.000Z'
```
Refer [MDN: Date toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)

## Date.now
> Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.

```js
Date.now(); // Something like 1438525752688
```
Refer [MDN: Date now](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)

## Array.isArray
> Returns true if an object is an array, false if it is not.

```js
Array.isArray(Array.prototype); // true
Array.isArray([]); // true
Array.isArray({}); // false
Array.isArray(null) // false
```
Refer [MDN: Array isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

## JSON
> Contains methods for parsing and creating JSON values.

```js
var JSONobj = JSON.stringify({}); // '{}'
var obj = JSON.parse(JSONobj); // {}
```
Refer [MDN: JSON stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

Refer [MDN: JSON parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## Function.prototype.bind
> Creates a new function that, when called, has its exectuion context bound to the provided value.

```js
var log = console.log.bind(console)
log('meow') // meow
```
Refer [MDN: Function bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## String.prototype.trim
> Removes whitespace from both ends of a string

```js
var name = '   foo  ';
name.trim(); // 'foo'
```
Refer [MDN: String trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

## Array.prototype.indexOf
> Returns the index if found, else returns -1, takes an optional starting index.

```js
var name = 'Brendan Eich'
name.indexOf('Eich'); // 8
name.indexOf('Brendan', 5); // -1
```
Refer [MDN: Array indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## Array.prototype.lastIndexOf
> Returns the last index if found or -1 for the specified value, also takes an optional starting index.

```js
var city = 'mississippi';
city.lastIndexOf('i'); // 10
```
Refer [MDN: Array lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

## Array.prototype.every
> Checks if all the elements of an array passes the specified test.

```js
[1, 2, 3].every(function(v, i, a) {
    return v > 3
  }) // false
  [1, 2, 3].every(function(v, i, a) {
    return v > 0
  }) // true
```
Refer [MDN: Array every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## Array.prototype.some
> Checks if any of the elements of an array passes the specified test.

```js
[1, 3, 5, 7, 6].some(function(v, i, a) {
    return v % 2 === 0
  }) // true
```
Refer [MDN: Array some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## Array.prototype.forEach
> For each element in an array performs the specified action.

```js
['foo', 'bar', 'baz'].forEach(function(v, i, a) {
  console.log(v, i)
});
/*
    foo 0
    bar 1
    baz 2
*/
```
Refer [MDN: Array foreach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## Array.prototype.map
> Returns an array that contains the results of a invokation of the function passed to it.

```js
[64, 49].map(Math.sqrt); // [8, 7]
```
Refer [MDN: Array map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Array.prototype.filter
> Returns an array that meet the condition specified in a callback function.

```js
[1, '', true, false].filter(Boolean); // [ 1, true ]
```
Refer [MDN: Array filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Array.prototype.reduce
> Invokes the callback with an accumulator and each value of the array and reduce it to a single value.

```js
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10); // 20
```
Refer [MDN: Array reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Array.prototype.reduceRight
> Similar to reduce, but acts upon the array from right-to-left instead.

```js
[0, -1, -2, 5, -6].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}); // -4
```
Refer [MDN: Array reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)

## Getter property in objects
> Binds an object property to a function that will be invoked when that property is accessed.

```js
foo = {get x() {
    return 42
  }
};
foo.x; // 42
```
Refer [MDN: Object getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)

## Setter property in objects
> Binds an object property to a function that will be invoked when that property is been set.

```js
var val = 0;
var foo = {
  set x(v) {
    val = v
  }
};
foo.x = 42
val; // 42
```
Refer [MDN: Object setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)

## Property accessor of strings
> Helps to access char in a string by index.

```js
"foobar"[2]; // 'o'
"foobar"[5]; // 'r'
```
Refer [MDN: String Accessor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Reserved word property name
> Using reserved as property names.

```js
{
  class: 42
}.class // 42
```

## ZWSP identifiers
> zero-width space identifiers.

```js
var _‍c = 42;
_‍c; // 42
```

## Ignore leading zeros in parseInt()
> Ignoring the leading zero

```js
parseInt('000420'); //420
```
Refer [MDN: Ignore leading zeros in parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

## Immutable undefined
> Can not mutate undefined.

```js
undefined = 42;
typeof undefined; // 'undefined'
```
Refer [MDN: Immutable undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
