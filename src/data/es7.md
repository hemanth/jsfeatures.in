## Exponentiation Operator
> Performs exponential calculation on operands. Same algorithm as Math.pow(x, y)

```js
let cubed = x => x ** 3;
cubed(2) // 8;
```

## Array.prototype.includes
> Determines whether an array includes a certain element or not.

 ```js
[1, 2, 3].includes(3, 0, 7); // true
[1, 2, NaN].includes(NaN); // true
[0,+1,-1].includes(42); // false
```
