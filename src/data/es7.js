module.exports = [{
        'title': 'Exponentiation Operator',
        'code': `let cubed = x => x ** 3;
cubed(2) //8;`,
        'info': 'Performs exponential calculation on operands. Same algorithm as Math.pow(x, y).'
    }, {
        'title': 'Async functions',
        'code': `function wait(t) { 
    return new Promise((r) => setTimeout(r, t));
}
async function asyncMania() {
    console.log("1");
    await wait(1000);
    console.log("2");
}
asyncMania()
.then(() => alert("3"));
//logs: 1 2 3`,
        'info': 'Deferred generators.'
    }, {
        'title': 'Object Observe',
        'code': `var obj = {};
Object.observe(obj, function(changes) {
    console.log(changes);
});
obj.name = "hemanth";
//Would log -> [ { type: \'new\`, object: { name: \'hemanth\' }, name: \'name\' } ]`,
        'info': 'Asynchronously observing the changes to an object.'
    }, {
        'title': 'Object.getOwnPropertyDescriptors',
        'code': `//Creating a shallow copy.
var shallowCopy = Object.create(
    Object.getPrototypeOf(originalObject),
    Object.getOwnPropertyDescriptors(originalObject)
);`,
        'info': 'Returns a property descriptor for an own property.'
    }, {
        'title': 'Object.values',
        'code': `var person = { fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" };
Object.values(person);
//["Hemanth","HM","Earth","Human"]`,
        'info': 'Get all the values of the object as an array.'
    }, {
        'title': 'Object.entries',
        'code': `var person = { fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" };
Object.entries(person);
//[["fname","Hemanth"],["lname","HM"],["location","Earth"],["type","Human"]]`,
        'info': 'Returns a Array of arrays of key,value pairs.'
    }, {
        'title': 'Array.prototype.includes',
        'code': `[1, 2, 3].includes(3, 0, 7); //true
[1, 2, NaN].includes(NaN); //true
[0,+1,-1].includes(42); //false`,
        'info': 'Determines whether an array includes a certain element or not.'
    }, {
        'title': 'Typed Objects',
        'code': `var Point = new StructType({
    x: int32,
    y: int32
});
var point = new Point({
    x: 42,
    y: 420
});`,
        'info': 'Portable, memory-safe, efficient, and structured access to contiguously allocated data.'
    }, {
        'title': 'Trailing commas in function syntax',
        'code': `var meow = function (cat1, cat2,) {};
Math.max(4,2,0,);`,
        'info': 'Trailing commas in parameter and argument lists.'
    }, {
        'title': 'Class properties',
        'code': `class Cat {
    name = \'Garfield\';
    static says = \'meow\';
}
new Cat().name; //Garfield
Cat.says; //meow`,
        'info': 'Properties of class.'
    }, {
        'title': 'Map.prototype.toJSON',
        'code': `var myMap = new Map();
myMap.set(NaN, "not a number");
console.log(myMap.toJSON()); //{"NaN":"not a number"}`,
        'info': 'toJSON for Maps.'
    }, {
        'title': 'Set.prototype.toJSON',
        'code': `var mySet = new Set();
mySet.add(NaN);
mySet.add(1);
console.log(mySet.toJSON()) //{"1":1,"NaN":null}`,
        'info': 'toJSON for Sets.'
    }, {
        'title': 'String.prototype.at',
        'code': `\'abc𝌆def\'.at(1) //\'b\'
\'abc𝌆def\'.at(3) //\'𝌆\'`,
        'info': 'String containing the code point at the given position.'
    }, {
        'title': 'Object spread properties',
        'code': `let info = {fname, lname, ...rest};
info; //{ fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" }`,
        'info': 'Spread properties for object destructuring assignment.'
    }, {
        'title': 'String.prototype.padEnd',
        'code': `"hello".padEnd(4); //"hello"
"hello".padEnd(20); //"hello               "
"hello".padEnd(20, \'1234\') //"hello123412341234123"`,
        'info': 'left justify and pad strings.'
    }, {
        'title': 'String.prototype.padStart',
        'code': `"hello".padStart(4); //"hello"
"hello".padStart(20); //"               hello"
"hello".padStart(20, \'1234\'); //"123412341234123hello"`,
        'info': 'Right justify and pad strings.'
    }, {
        'title': 'String.prototype.trimLeft',
        'code': `' \\t \\n LeftTrim  \\t\\n'.trimLeft(); 
//LeftTrim  \\t\\n`,
        'info': 'Left trim strings.'
    }, {
        'title': 'String.prototype.trimRight',
        'code': `' \\t \\n TimeRight   \\t\\n'.trimLeft(); 
//\\t \\n LeftRight`,
        'info': 'Right trim strings.'
    }, {
        'title': 'Regexp.escape',
        'code': `RegExp.escape("(*.*)"); //"(*.*)"
RegExp.escape("｡^･ｪ･^｡") //"｡^･ｪ･^｡"
RegExp.escape("😊 *_* +_+ ... 👍"); //"😊 *_* +_+ ... 👍"`,
        'info': 'Escapes any characters that would have special meaning in a regular expression.'
    }, {
        'title': 'Bind Operator',
        'code': `let log = (level, msg) => ::console[level](msg);
import { map, takeWhile, forEach } from "iterlib";
getPlayers()
    ::map(x => x.character())
    ::takeWhile(x => x.strength > 100)
    ::forEach(x => console.log(x));`,
        'info': ':: Function binding and method extraction'
    }, {
        'title': 'Reflect.Realm',
        'code': `TBD`,
        'info': 'TDB'
    }];
