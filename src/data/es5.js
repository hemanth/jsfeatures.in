module.exports = [{
  'title': 'Object.create',
  'code': `o={ };//isequivalentto: o=Object.create(Object.prototype);`,
  'info': 'Creates a new object with the specified prototype object and properties.'
}, {
  'title': 'Object.defineProperty',
  'code': `Object.defineProperty(obj,
      'answer',
      {
        value: 42,
        writable: true,
        enumerable: true,
        configurable: true
      });`,
  'info': 'Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.'
}, {
  'title': 'Object.defineProperties',
  'code': `varobj={
        
      };Object.defineProperties(obj,
      {
        "name": {
          value: true,
          writable: true
        },
        "msg": {
          value: "Hello",
          writable: false
        }//etc.etc.
      });`,
  'info': 'Defines new or modifies existing properties directly on an object, returning the object.'
}, {
  'title': 'Object.getPrototypeOf',
  'code': `varproto={
        
      };varobj=Object.create(proto);Object.getPrototypeOf(obj)===proto;//true`,
  'info': 'Returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.'
}, {
  'title': 'Object.keys',
  'code': `vararr=[
        'x',
        'y',
        'z'
      ];console.log(Object.keys(arr));//[
        '0',
        '1',
        '2'
      ]`,
  'info': 'Returns an array of a given object\'s own enumerable properties'
}, {
  'title': 'Object.seal',
  'code': `varobj={
        name: 'FooBar'
      };Object.seal(obj);obj.name='BarFoo'//Worksdeleteobj.name//returnsfalseanddoesn't delete`         , 'info': 'Preventsanynewadditionofpropertiesbutdefinedpropertiescanbechanged.'
}, {
  'title': 'Object.freeze',
  'code': `var obj =  {name: 'FooBar'}; Object.freeze(obj);                               obj.name = 'BarFoo';                               obj.name // Will still be 'FooBar'                               `, 'info': 'Makesanobjectimmutable'
}, {
  'title': 'Object.preventExtensions',
  'code': `var obj =  {name: 'FooBar'}; Object.preventExtensions(obj);                                          obj.name = 'BarFoo';                                          obj.name // Will still be 'FooBar'                                         `,
  'info': 'Preventsfutureextensionstotheobjectand"CONFIGURABLE"isnotsettofalseforalltheproperites.'
}, {
  'title': 'Object.isSealed',
  'code': `var obj =  {}; Object.seal(obj); Object.isSealed(obj) // true`, 'info': 'Checksifagivenobjectissealed.'
}, {
  'title': 'Object.isFrozen',
  'code': `var obj =  {}; Object.freeze(obj); Object.isFrozen(obj) // true`, 'info': 'Checksifagivenobjectisfrozen.'
}, {
  'title': 'Object.isExtensible',
  'code': `var obj =  {}; Object.preventExtensions(obj); Object.isExtensible(obj) // false`, 'info': 'Checksifthegivenobjectcanbeextended.'
}, {
  'title': 'Object.getOwnPropertyDescriptor',
  'code': `Object.getOwnPropertyDescriptor({name:'foo'},'name');                                                 /*{ value: 'foo',                                                   writable: true,                                                   enumerable: true,                                                   configurable: true }*/`, 'info': 'Returnsapropertydescriptorforanownpropertyi.edirectlyontheobjectandnottheprototypechain.'
}, {
  'title': 'Object.getOwnPropertyNames',
  'code': `var obj = { 0: 'f', 1: 'o', 2: 'o' };                                             Object.getOwnPropertyNames(obj).sort(); //'0,
      1,
      2'`, "info": 'Returnsanarrayofallproperties(enumerableornot)founddirectlyuponagivenobject.'
}, {
  'title': 'Date.prototype.toISOString',
  'code': `(new Date('1998-02-01')).toISOString();                                            // 1998-02-01T00:00:00.000Z'`,
  'info': 'Returns a string in simplified extended ISO format. YYYY-MM-DDTHH:mm:ss.sssZ'
}, {
  'title': 'Date.now',
  'code': `Date.now();//Somethinglike1438525752688`,
  'info': 'Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.'
}, {
  'title': 'Array.isArray',
  'code': `Array.isArray(Array.prototype);//trueArray.isArray([
        
      ]);//trueArray.isArray({
        
      });//falseArray.isArray(null)//false`,
  'info': 'Returns true if an object is an array, false if it is not.'
}, {
  'title': 'JSON',
  'code': `varJSONobj=JSON.stringify({
        
      });//'{}'varobj=JSON.parse(JSONobj);//{
        
      }`,
  'info': 'Contains methods for parsing and creating JSON values.'
}, {
  'title': 'Function.prototype.bind',
  'code': `varlog=console.log.bind(console)log('meow')//meow`,
  'info': 'Creates a new function that, when called, has its exectuion context bound to the provided value.'
}, {
  'title': 'String.prototype.trim',
  'code': `varname='   foo  ';name.trim();//'foo'`,
  'info': 'Removes whitespace from both ends of a string'
}, {
  'title': 'Array.prototype.indexOf',
  'code': `varname='Brendan Eich'name.indexOf('Eich');//8name.indexOf('Brendan',
      5);//-1`,
  'info': 'Returns the index if found, else returns -1, takes an optional starting index.'
}, {
  'title': 'Array.prototype.lastIndexOf',
  'code': `varcity='mississippi';city.lastIndexOf('i');//10`,
  'info': 'Returns the last index if found or -1 for the specified value, also takes an optional starting index.'
}, {
  'title': 'Array.prototype.every',
  'code': `[
        1,
        2,
        3
      ].every(function(v,
      i,
      a){
        returnv>3
      })//false[
        1,
        2,
        3
      ].every(function(v,
      i,
      a){
        returnv>0
      })//true`,
  'info': 'Checks if all the elements of an array passes the specified test.'
}, {
  'title': 'Array.prototype.some',
  'code': `[
        1,
        3,
        5,
        7,
        6
      ].some(function(v,
      i,
      a){
        returnv%2===0
      })//true`,
  'info': 'Checks if any of the elements of an array passes the specified test.'
}, {
  'title': 'Array.prototype.forEach',
  'code': `[
        'foo',
        'bar',
        'baz'
      ].forEach(function(v,
      i,
      a){
        console.log(v,
        i)
      });/*foo0bar1baz2*/`,
  'info': 'For each element in an array performs the specified action.'
}, {
  'title': 'Array.prototype.map',
  'code': `[
        64,
        49
      ].map(Math.sqrt);//[
        8,
        7
      ]`,
  'info': 'Returns an array that contains the results of a invokation of the function passed to it.'
}, {
  'title': 'Array.prototype.filter',
  'code': `[
        1,
        '',
        true,
        false
      ].filter(Boolean);//[
        1,
        true
      ]`,
  'info': 'Returns an array that meet the condition specified in a callback function.'
}, {
  'title': 'Array.prototype.reduce',
  'code': `[
        0,
        1,
        2,
        3,
        4
      ].reduce(function(previousValue,
      currentValue,
      index,
      array){
        returnpreviousValue+currentValue;
      },
      10);//20`,
  'info': 'Invokes the callback with an accumulator and each value of the array and reduce it to a single value.'
}, {
  'title': 'Array.prototype.reduceRight',
  'code': `[
        0,
        -1,
        -2,
        5,
        -6
      ].reduceRight(function(previousValue,
      currentValue,
      index,
      array){
        returnpreviousValue+currentValue;
      });//-4`,
  'info': 'Similar to reduce, but acts upon the array from right-to-left instead.'
}, {
  'title': 'Getter property in objects',
  'code': `foo={
        getx(){
          return42
        }
      };foo.x;//42`,
  'info': 'Binds an object property to a function that will be invoked when that property is accessed.'
}, {
  'title': 'Setter property in objects',
  'code': `varval=0;varfoo={
        setx(v){
          val=v
        }
      };foo.x=42val;//42`,
  'info': 'Binds an object property to a function that will be invoked when that property is been set.'
}, {
  'title': 'Property accessor of strings',
  'code': `"foobar"[
        2
      ];//'o'`,
  'info': 'Helps to access char in a string by index.'
}, {
  'title': 'Reserved word property name',
  'code': `{
        class: 42
      }.class//42`,
  'info': 'Using reserved as property names.'
}, {
  'title': 'ZWSP identifiers',
  'code': `var_\u200dc=42;_\u200dc;//42`,
  'info': 'zero-width space identifiers.'
}, {
  'title': 'ignore leading zeros in parseInt()',
  'code': `parseInt('000420');//420`,
  'info': 'Ingoring the leading zero'
}, {
  'title': 'Immutable undefined',
  'code': `undefined=42;typeofundefined;//'undefined'`,
  'info': 'Can not mutate undefined.'
}
]