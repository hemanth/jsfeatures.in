module.exports = [
  {
    title: "Logical Assignment Operators",
    code: `//"Or Or Equals"
x ||= y;
x || (x = y);
    
//"And And Equals"
x &&= y;
x && (x = y);
    
//"QQ Equals"
x ??= y;
x ?? (x = y);`,
    info: "Make assignnemt based on logical operation.",
  },
  {
    title: "Numeric Separators",
    code: `1_000_000_000           // Ah, so a billion
101_475_938.38          // And this is hundreds of millions

let fee = 123_00;       // $123 (12300 cents, apparently)
let fee = 12_300;       // $12,300 (woah, that fee!)
let amount = 12345_00;  // 12,345 (1234500 cents, apparently)
let amount = 123_4500;  // 123.45 (4-fixed financial)
let amount = 1_234_500; // 1,234,500

0.000_001 // 1 millionth
1e10_000  // 10^10000 -- granted, far less useful / in-range...
0xA0_B0_C0;
`,
    info: "Visual separation between groups of digits.",
  },
  {
    title: "Promise.any and AggregateError",
    code: `Promise.any([
    fetch('https://v8.dev/').then(() => 'home'),
    fetch('https://v8.dev/blog').then(() => 'blog'),
    fetch('https://v8.dev/docs').then(() => 'docs')
]).then((first) => {
    // Any of the promises was fulfilled.
    console.log(first);
// → 'home'
}).catch((error) => {
    // All of the promises were rejected.
    console.log(error);
});`,
    info: "It returns a first promise that resolves as soon as any of the promises fulfills.Or return AggregateError which is combination of several errors.",
  },
  {
    title: "String.prototype.replaceAll",
    code: `'x'.replace('', '_');
// → '_x'
    
'xxx'.replace(/(?:)/g, '_');
// → '_x_x_x_'
    
'xxx'.replaceAll('', '_');
// → '_x_x_x_'`,
    info: "Method returns a new string with all matches of a pattern replaced by a replacement.",
  },
  {
    title: "WeakRefs and FinalizationRegistry Objects",
    code: `let target = {};
let wr = new WeakRef(target);

//wr and target aren't the same

//Creating a new registry 
const registry = new FinalizationRegistry(heldValue => {
  // ....
});

registry.register(myObject, "some value", myObject);
//...some time later, if you don't care about 'myObject' anymore...
registry.unregister(myObject);`,
    info: "A WeakRef object lets you hold a weak reference to another object, without preventing that object from getting garbage-collected.A FinalizationRegistry object lets you request a callback when an object is garbage-collected.",
  },
];
