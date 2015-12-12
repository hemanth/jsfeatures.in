module.exports = [{
    'Arrow functions': {
        code: 'let obj = {\n  method: function () {\n    return () => this;\n  }\n};\n// Due to lexical scope obj.method()() <===> obj\n\nlet fact = (n) => { return n === 0 ? 1 : n * fact(n-1); };\n\nlet fib = (n) => { return n < 2 ? n : fib(n-1) + fib(n-2); };\n',
        info: 'Lexical this, shoter functions.'
    }
}, {
    'Block Scope': {
        code: 'var aboutme = () => {\n  {\n    var investements = 1;\n    const salary = 10;\n  }\n  console.log(investements,salary); // 1, undefined.\n}\n',
        info: 'Declares a block scope local variable, optionally initializing it to a value.'
    }
}, {
    class: {
        code: 'class Person {\n  constructor(name) {\n    this.name = name;\n    this.movement = "walks";\n  }\n\n  move(meters) {\n    console.log(`${this.name} ${this.movement} ${meters}m.`);\n  }\n}\n\nclass Hero extends Person {\n  constructor(name, movement) {\n    this.name = name;\n    this.movement = movement;\n  }\n\n  move() {\n    super.move(500);\n  }\n}\n\nlet clark = new Person("Clark Kent");\n\nlet superman = new Hero("Superman", "flies");\n\nclark.move(100);\n// -> Clark Kent walks 100m.\n\nsuperman.move();\n// -> Superman flies 500m.\n\n/* Make a note of:\n\nclass Base {}\nclass Derived extends Base {}\n\n//Here, Derived.prototype will inherit from Base.prototype.\n\nlet parent = {};\nclass Derived prototype parent {}\n*/\n',
        info: 'Syntactical sugar over prototype-based inheritance.'
    }
}, {
    'Computed property names': {
        code: 'var obj = {\n  [foo + bar]: "o_0",\n  [foo + baz]: "0_o",\n  foo: "foo",\n  bar: "bar",\n  baz: "baz"\n};\n\nconsole.log( obj.foobar ); // o_0\nconsole.log( obj.foobaz ); // 0_o ',
        info: 'An expression in brackets `[]`'
    }
}, {
    'Default Params': {
        code: 'let greet = (msg="Hello",name="World!") => console.log(msg,name);\n\ngreet(); // Hello World!\n',
        info: 'Initialize formal parameters with default values, if no value or undefined is passed.'
    }
}, {
    Destructuring: {
        code: 'var {foo, bar} = {foo: "lorem", bar: "ipsum"};\n// foo => lorem and bar => ipsum\n\n',
        info: 'Extract data from arrays or objects.'
    }
}, {
    'Direct Proxy': {
        code: 'let NegativeIndices = (array) => {\n  return new Proxy(array, {\n    get: (receiver, name) => {\n      let index;\n      console.log(\'Proxy#get\', array, name);\n      index = parseInt(name);\n      if (!isNaN(index) && index < 0) {\n        array[array.length + index];\n      } else {\n        return array[name];\n      }\n    }\n  });\n};\n\n/*\n* Negative array indices:\n* array = NegativeIndices [4, 420, 42]\n* array[-1] is 42\n*/\n',
        info: 'Define custom behavior for fundamental operations of an object.'
    }
}, {
    'for-of loop': {
        code: 'for (let element of [1, 2, 3]) {\n  console.log(element);\n}\n',
        info: 'Loop over Iterator objects.'
    }
}, {
    Generators: {
        code: 'function *Counter(){\n  var n = 0;\n  while(1<2) {\n      yield n;\n      ++n;\n  }\n}\n\nvar CountIter = new Counter();\n\nCountIter.next(); // {value: 0, done:false}\nCountIter.next(); // {value: 1, done:false}\nCountIter.next(); // {value: 2, done:false}\n',
        info: 'The function* declaration defines a generator function, which returns a Generator object.'
    }
}, {
    Map: {
        code: 'let m = new Map();\nm.set(\'answer\', 42);\nm.get(\'answer\');                // 42\nm.has(\'answer\');                //  true\nm.delete(\'answer\');               //  true\nm.has(\'answer\');                  //  false\n\nm.set(keyFunc,() => "foo");\nm.get(keyFunc)(); // "foo"\n',
        info: 'Map object is a simple and effective key/value data-structure.'
    }
}, {
    modules: {
        code: '/* In math.js */\nexport function div(x, y) {\n  return x / y;\n}\nexport var pi = 3.141593;\n\n// In index.js\nimport {div, pi} from math;\n\n',
        info: 'Module format common to CommonJS and AMD.'
    }
}, {
    'Better Object Literal': {
        code: 'var greet = {\n  __proto__: theProtoObj,\n  handler, // Instead of handler: handler\n  world: () => "Hello World!",\n  toString() {\n    return "Results: " + super.toString()\n  }\n};\n',
        info: 'Better as in the example.'
    }
}, {
    'property-method-assignment': {
        code: 'let person = {\n  get name() {\n    return this._name;\n  },\n  set name(val){\n    console.log("Setting name: " + val);\n    this._name = val;\n  }\n};\n\n/*\n> person.name = "Hemanth"\n"Hemanth"\n"Setting name: Hemanth"\n\n> person.name\n"Hemanth"\n',
        info: 'Method syntax is supported in object initializers.'
    }
}, {
    'Rest params': {
        code: 'let sortRestArgs = (...theArgs) => theArgs.sort();\n\nconsole.log(sortRestArgs(5,2,7,1)) // [1,2,5,7]\n',
        info: 'Variable number of arguments without using the arguments object.'
    }
}, {
    Set: {
        code: 'var cards = new Set()\ncards.add(\'♠\')\ncards.add(\'♥\')\ncards.add(\'♦\')\ncards.add(\'♣\')\n\ncards.has(\'♠\') //true\n\ncards.has(\'joker\') //false\n\ncards.size //4\n\ncards.forEach((card) => console.log(card));\n\n/*\nWould log:\n♠\n♥\n♦\n♣\n*/\n\ncards.add(\'♣\')\n\ncards.size // Still four as ♣ was already there in the cards set.\n',
        info: 'Store unique values of any type.'
    }
}, {
    'Spread operator': {
        code: 'var nodeList = document.querySelectorAll(\'div\');\nvar array = [...nodeList];\n',
        info: 'Expanded in places with `...` for arguments or multiple elements.'
    }
}, {
    Symbol: {
        code: 'var Cat = (function() {\n    var nameSymbl = Symbol(\'name\');\n \n    function Cat(name) {\n        this[nameSymbl] = name;\n    }\n \n    Cat.prototype.getName = function() {\n        return this[nameSymbl];\n    };\n \n    return Cat;\n}());\n \nvar c = new Cat(\'milly\');\nconsole.log("Cat\'s name: " + c.getName()); //milly\ndelete c.name; // Even after deleting\nconsole.log("Cat\'s name is still: " + c.getName() + \' is private.\'); // so milly\n',
        info: 'Unique and immutable data type.'
    }
}, {
    'Tail recursion': {
        code: 'let factorial = (n, acc = 1) => {\n    if (n <= 1) return acc;\n    return factorial(n - 1, n * acc);\n}\n// NO S.O!\nfactorial(133333337);\n',
        info: 'Tail Calls, Optimization.'
    }
}, {
    'Template Literals': {
        code: 'var First = "Hemanth";\nvar Last = " HM";\n`${ First } + ${ Last } = ${ First + Last}`  // "Hemanth + HM = Hemanth HM"\n',
        info: 'Better string formatting capabilities.'
    }
}, {
    'Unicode in Regex': {
        code: 'var string = \'foo𝌆bar\';\nvar match = string.match(/foo(.)bar/u);\nconsole.log(match[1]);\n// → \'𝌆\'\n',
        info: 'Unicode aware regex.'
    }
}, {
    WeakMap: {
        code: 'var wm = new WeakMap();\n\nwm.set(\'life\'); //TypeError: Invalid value used as weak map key\n\nwm.set(\'life\', \'life\'.length) //TypeError: Invalid value used as weak map key\n\nvar wmk = {};\n\nwm.set(wmk,\'life\');\n\nwm.get(wmk); // "life"\n\nwm.has(wmk); // true\n\nwm.delete(wmk); // true\n\nwm.has(wmk); //false',
        info: 'key/value pairs, keys are objects and the values can be arbitrary values, references to key objects are held "weakly"'
    }
}, {
    WeakSet: {
        code: ` var ws = new WeakSet();
                var foo = {};
                var bar = {};

                ws.add(window);
                ws.add(foo);

                ws.has(window); // true
                ws.has(bar);    // false, bar has not been added to the set

                ws.delete(window); // removes window from the set
                ws.has(window);    // false, window has been removed

                ws.clear(); // empty the whole WeakSet`,
        info: 'Store weakly held objects in a collection.'
    }
}]
