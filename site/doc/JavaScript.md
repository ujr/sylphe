# JavaScript Notes

JavaScript was created by Brendan Eich in 1995 for Netscape Navigator.
Shortly after, Microsoft presented JScript for Internet Explorer.
Since it was almost compatible with JavaScript, but not completely so,
Netscape submitted JavaScript to ECMA, the *European Computer Manufacturers
Association*, to create a standard for the language: *ECMAScript*

These notes are somewhat influenced by the book
*JavaScript: The Good Parts* by Douglas Crockford (2008).

 1. [Versions](#versions)
 1. [Type System](#type-system)
 1. [Operator Precedence](#operator-precedence)
 1. [Falsy Values](#falsy-values)
 1. [Exceptions](#exceptions)
 1. [Module Pattern](#module-pattern)
 1. [Math object and other numeric stuff](#math-object-and-other-numeric-stuff)
 1. [Grammar](#grammar-token-types)
 1. [Development Process](#development-process)
 1. [Style Guides](#style-guides)
 1. [Links](#links)
 1. [Glossary](#glossary)


## Versions

ECMAScript was revised several times.
Version 2 contained only editorial changes.
Version 4 was never published.
After version 6 in 2015, it was decided to release a new version
every year, even if it contains only a very few changes.

|Year|Version|Changes/Additions|
|----|:-----:|-----------------|
|1997|ECMAScript 1|The first version of ECMAScript|
|1999|     3      |Regular expressions and try/catch|
|2009|     5      |JSON support, strict mode: `use strict;`|
|2015| 6 = ES2015 |`let`, `const`, classes, modules, generations; aka Harmony|
|2016| 7 = ES2017 | ... |
|2017| 8 = ES2017 | async/await |
|2018| 9 = ES2018 | ... |


## Type System

<table border=1 cellpadding=4 style="border-collapse:collapse">
<tr align=center><td colspan=5>immutable</td><td>mutable</td></tr>
<tr align=center><td colspan=2>&nbsp;</td><td colspan=4>can have methods</td></tr>
<tr align=center><td><b>undefined</b></td><td><b>null</b></td><td><b>boolean</b></td>
 <td><b>number</b></td><td><b>string</b></td><td><b>object</b></td></tr>
<tr align=center><td></td><td></td><td>false|true</td><td></td><td></td><td>array|regex|function</td></tr>
</table>


## Operator Precedence

From highest (top) to least (bottom)

|Operators|Remarks|
|:-------:|-------|
|`.  []  ()`|Refinement an dinvocation|
|`delete  new  typeof  +  -  !`|Unary operators|
|`*  /  %`|Multiplicative|
|`+  -`|Additive and string concatenation|
|`>=  <=  >  <`|Inequality|
|`===  !==`|Equality|
|`&&`|Logical AND (guard)|
|`||`|Logical OR (default)|
|`?:`|Ternary|

Full JavaScript has further operators, but they are beyond
the *good parts*. In particular, the coercing equality
operators `==` and `!=` should be avoided.


## Falsy Values

These values are *falsy* in the sense that they are
considered false in conditions:

- `false`
- `null`
- `undefined`
- the empty string
- the number `0`
- the number `NaN`

All other values are *truthy*; in particular, all objects
and arrays are truthy, even if they are empty.


## Exceptions

The value given to `throw` should be an object with a `name`
property (the type of the exception) and a descriptive
`message` property:

```JavaScript
throw {
  name: 'TypeError',
  message: "value must be a number"
};
```

Alternatively, use one of the standard exception types
as shwon here:

```JavaScript
throw TypeError("value must be a number")
```

The standard exceptions are (VERIFY):

- `Error` – base object; derive your own error objects from it
- `EvalError`
- `RangeError`
- `ReferenceError`
- `SyntaxError`
- `TypeError`
- `URIError`


## Module Pattern

A module provides an interface but hides state and implementation.
Use modules to minimize the use of global variables. Modules can
be implemented using anonymous closures; this is the pattern:

```JavaScript
var myModule = (function($){  
  var module = {};  
  ... // private stuff  
  return module;  
}(jQuery));
```

Immediately-invoked function expression (IIFE):

```JavaScript
(function(){...}());
```

Global import (clearer and faster):

```JavaScript
(funtion($,YAHOO){...$.get()...}(jQuery,YAHOO));
```

Module export:

```JavaScript
var MODULE = (function(...){...}());
```

## Math object and other numeric stuff

Properties of the `Math` object:

|Property|Remarks|
|--------|-------|
|`E`|Euler's number (&asymp;2.718)|
|`LN2`|Natural logarithm of 2 (&asymp;0.693)|
|`LN10`|Natural logarithm of 10 (&asymp;2.302)|
|`LOG2E`|Base-2 logarithm of E (&asymp;1.443)|
|`LOG10E`|Base-10 logarithm of E (&asymp;0.434)|
|`PI`|Ratio of circumference to diameter (&asymp;3.142)|
|`SQRT1_2`|Square root of 1/2 (&asymp;0.707)|
|`SQRT2`|Square root of 2 (&asymp;1.414)|

Functions of the `Math` object:

|Function|Remarks|
|--------|-------|
|`abs(x)`|The absolute value of *x*|
|`acos(x)`|The arc cosine of *x*, in radians|
|`asin(x)`|The arc sine of *x*, in radians|
|`atan(x)`|The arc tangent of *x*, between -&pi;/2 and &pi;/2, radians|
|`atan2(y,x)`|The arc tangent of *y*/*x*, between -&pi; and &pi; radians|
|`ceil(x)`|*x* rounded up to the nearest integer|
|`cos(x)`|The cosine of *x* (*x* in radians)|
|`exp(x)`|The value of `E`<sup>*x*</sup>|
|`floor(x)`|*x* rounded down to the nearest integer|
|`log(x)`|The natural logarithm (base `E`) of *x*|
|`max(x,y,...)`|The number with the highest value|
|`min(x,y,...)`|The number with the lowest value|
|`pow(x, y)`|The value of *x* to the power of *y*, i.e., *x<sup>y</sup>*|
|`random()`|A random number between 0 (inclusive) and 1 (exclusive)|
|`round(x)`|*x* rounded to the nearest integer|
|`sin(x)`|The sine of *x* (*x* in radians)|
|`sqrt(x)`|The square root of *x*, i.e., &radic;*x*|
|`tan(x)`|The tangent of *x* (*x* in radians)|
</tbody>
</table>

Use `Math` as an object without creating it (`Math` is
not a constructor). For example: `var pi=4*Math.atan(1);`

Besides the `Math` properties and functions,
a few other numeric facilities exist:

|Code|Remarks|
|----|-------|
|`NaN`|a value that represents “not a number”|
|`isNaN(x)`|returns true iff *x* is `NaN`|
|`Infinity`|a numeric value representing (positive) infinity|
|`isFinite(x)`|returns true if *x* is finite, and false if *x* is positive or negative infinity or `NaN`|

Since ES2015 there is also `Number.isNaN(x)`
and `Number.isFinite(x)`, which do no coercion.


## Grammar: Token Types

The JavaScript language distinguishes these token types:

|Token Type|Description|
|----------|-----------|
|White|runs of one or more space, tab, line ends, or `/* block comments */` or `// line comments`|
|Name|a sequence of one or more letters or digits or underscores, not starting with a digit|
|Number|the usual decimal notation, with an optional fraction, and an optional exponent|
|String|`"..."` or `'...'` with these escapes: `\" \' \\ \/ \b \f \n \r \t \uxxxx`|
|Symbol|most operators and delimitors, such as `+ - != } &lt; *` etc. (also referred to as punctuators)|

Full JavaScript recognizes more syntax in most token types,
e.g., a name can contain dollar sings, and numbers can be
given in octal and hexadecimal notation.

Note that not only symbols are used as operators, but also
some names like `delete` or `typeof`.


## Development Process

The development process comprises many components besides coding.
The following list is from the book *Professionell entwickeln mit
JavaScript* (Rheinwerk 2018).

- Style guides (see below)
- Scaffolding (project and code templates)
- Preprocessing (&agrave; la CoffeeScript, TypeScript)
- [Linting](#linting)
- Documentation
- Testing
- Minification, Obfuscation, Concatenation
- Packaging, Package Management


## Style Guides

Many style guides for JavaScript can be found on the Internet.
Here are some of them:

- [Crockford's Conventions](http://crockford.com/javascript/code.html)
  are consistent with the expectations of [JSLint](http://www.jslint.com/).
- The [jQuery Style Guide](http://contribute.jquery.org/style-guide/js/);
  the jQuery project also has style guides for
  [HTML](https://contribute.jquery.org/style-guide/html/),
  [CSS](https://contribute.jquery.org/style-guide/css/), and
  [prose](https://contribute.jquery.org/style-guide/prose/).
- The [Node.js Style Guide](https://github.com/felixge/node-style-guide)
  was inspired by what is common practice in the node.js community.
- The [NPM Coding Style](https://docs.npmjs.com/misc/coding-style) calls
  itself unconventional but is reasonable and worth studying.
- [Google's JavaScript Style Guide](http://google.github.io/styleguide/jsguide.html)
  is very comprehensive. By far the longest text of all those referenced here.
- [Idiomatic.js](https://github.com/rwaldron/idiomatic.js) is
  another rather lengthy style guide. Several contributors,
  translated to many languages.
- [Pragmatic.js](https://github.com/madrobby/pragmatic.js) is a very
  short guide, maybe a little too short, but likely to be actually read!
- The [Dojo Style Guide](https://dojotoolkit.org/reference-guide/1.10/developer/styleguide.html#developer-styleguide)
  provides many naming guidelines; reminiscent of style guides
  for Java or .NET programming.
- The [JavaScript Quality Guide](https://github.com/bevacqua/js)
  seems a reasonable compilation of guidelines. There's also a
  [CSS guide](https://github.com/bevacqua/css).

An amalgam from some of these styles is the foundation for
my [JavaScript Coding Guide](/wiki?name=JavaScript+Coding+Guide).


## Links

- [www.JSON.org](http://www.json.org/) – JavaScript Object Notation
- [www.JSLint.com](http://www.jslint.com/) – linter for JavaScript,
  now with [ES6 support](http://www.jslint.com/help.html#es6)


## Glossary

<a name="ajax"></a>
**Ajax:**
Asynchronous JavaScript and XML, the retrieval of XML (or JSON
or HTML or plain text) through HTTP requests under the control
of JavaScript through the `XMLHttpRequest` API (first developed
by Microsoft for its Outlook Web Access).

<a name="arrowfunexpr"></a>
**Arrow Function Expression:**
a compact syntax for function expressions
(`args => body`).
In `body`, `this` refers to the definition context
(not to the calling/execution context).
A new feature of [ES2015](#es2015).

<a name="aop"></a>
**Aspect Oriented Programming** or **AOP:**
a paradigm in object oriented programming that strives separate
application code from the “cross cutting concerns”
or *aspects* such as logging, caching, transaction management.
In JavaScript, aspects could be “injected” into the
application code along the lines of the example below.
In practical life, an AOP library.

```JavaScript
const before = decorator => fn => function(...args) {
  decorator(fn, args);
  return fn.apply(this, args);
}
const log = function(fn, ...args) {
  console.log(`Calling ${fn.name} with arguments ${args.join(', ')}`);
}
const logBefore = before(log);
let add = function(a, b) { return a + b; }; // business logic
add = logBefore(add); // overwrite with instrumented function
add(2, 3); // logs "Calling add with arguments 2, 3"
```

<a name="blockscope"></a>

**Block Scope:**
variables declared with `var` have function scope (see [Hoisting](#hoisting)).
Since [ES2015](#es2015), variables can be declared with `let` (and constants
with `const`) have block scope.

<a name="ci/cd"></a>

**CI/CD:**
Continuous Integration and Continuous Deployment, that is, the
automated build, test, packaging, [linting](#linting), etc., and
deployment. The automation may be realized such that the whole
process is triggered by a commit to a certain branch in the
source code repository. The idea is to achieve higher quality
by avoiding the errors inherent in manual processes.

<a name="cleancode"></a>

**Clean Code:**
code that is clear and easy (“intuitive”) to read.
Term coined by Robert C. Martin in his 2009 book *Clean Code*.
The [SOLID](#solid) principles can help producing clean code.

**Composition over Inheritance**
is a principle of object-oriented programming: if possible,
prefer composition, as inheritance leads to tightly coupled classes.

<a name="dip"></a>

**Dependency Inversion Principle** or **DIP:**
one of the [SOLID](#solid) principles. It states that high level modules
must not depend on low level modules; both should depend on abstractions.
And that abstractions must not depend on details; details should depend
on abstractions.

<a name="pattern"></a>

**Design Pattern** (dt. Entwurfsmuster)
a proven approach for a recurring problem. Software design patterns
became popular in software engineering after publication of the 1994
book *Design Patterns: Elements of Reusable Object-Oriented Software*
by the “Gang of Four” (GoF). This book presents 23 design patterns
in three groups: creational, structural, and behavioral.
The very idea of *patterns* in engineering and construction goes
back to the architect Christopher Alexander, who published
*A Pattern Language: Towns, Buildings, Construction* in 1977.

<a name="es2015"></a>

**ES2015:**
version 6 of the ECMAScript specification, released in 2015 and also known
as “Harmony”. Since 2015, ECMA releases a new version of the
ECMAScript specification every year, even if there are only few changes.

<a name="fluent"></a>

**Fluent Interface:**
an API design pattern that uses method chaining to achieve code that
is close to English language, like `obj.doThis().then(that()).print()`.
“Sprechende” Schnittstellen. Real-world examples can be
found in [jQuery](http://jquery.com/), [D3.js](https://d3js.org/),
and many other libraries.

<a name="hoisting"></a>

**Hoisting:**
variables in JavaScript are visible in the entire function, even
before their declaration—as if they were “hoisted” to the beginning
of the function (no block scope).

<a name="iife"></a>

**IIFE:**
short for Immediately Invoked Function Expression, that is,
`(function(...){...}());` which can be used to emulate block
scope and is employed in the [module pattern](#module-pattern).

<a name="json"></a>

**JSON:**
JavaScript Object Notation, a light-weight data interchange format,
a subset of JavaScript, see [json.org](http://json.org/)

<a name="lint"></a>
<a name="linter"></a>
<a name="linting"></a>

**Linting:**
the checking of code quality against some guidelines, a type of
static code analysis. The tool doing the check is called a “linter”.
Named after the “lint” tool for the C language from the 1970ies.

<a name="lsp"></a>

**Liskov Substitution Principle** or **LSP:**
one of the [SOLID](#solid) principles, named for Barbara Liskov
who introduced it in 1987. It states that if q(x) is a property
provable about objects x of type T, then q(y) should be true for
objects y of type S where S is a subtype of T.

<a name="mv*"></a>

**MV&#42;:**
an umbrella term for the MVC, MVP, and MVVM architectural patterns,
which are all similar, and, in practical life, not strictly followed.

<a name="polyfill"></a>

**Polyfill:**
a piece of code that emulates a feature that is missing in an older
browser. (Named after “Polyfilla”, the brand name for a paste used
to cover cracks and holes in walls.)

<a name="promise"></a>

**Promise:**
a place holder object for the future result of an async function.
Like the `Task` class in .NET.

**RIA:**
Rich Internet Application, a web app with a UX similar
to a desktop application, often a [SPA](#spa).

**Routing:**
in the context of Web frameworks: the mapping from URLs
to actions/handlers/components; traditionally used on the server side,
but with SPA also on the client side, either using hashbang URLs
or the browser's History API.

<a name="spa"></a>

**SPA,** short for **Single Page Application:**
a web application that “lives” in a single web page
(as opposed to classical web applications that are spread over
several pages).

<a name="solid"></a>

**SOLID:**
five principles in object-oriented development that help achieve
loosely coupled classes with strong inner coherence.
The principles are:

- Single Responsibility Principle (one class, one responsibility),
- Open-Closed Principle (open for extension, closed for modification),
- Liskov Substitution Principle (subclass can always step in for
  a super class, see [LSP](#lsp)),
- Interface Segregation Principle (split large interfaces into
  smaller interfaces),
- Depencency Inversion Principle (high-level modules must not depend on
  low-level modules, see [DIP](#dip)).

<a name="tdd"></a>

**Test Driven Development** or **TDD:**
an approach to software development: first write [unit tests](#unittest)
that check requirements, then develop the component to satisfy all tests.

**Thick Client:**
a modern web application, typically a [SPA](#spa), with the logic
on the client side.

**Thin Client:**
a classical web application, with the logic on the server side.

<a name="uml"></a>

**UML:**
short for Unified Modeling Language ...

<a name="unittest"></a>

**Unit Test:**
a piece of code that tests a module (a unit), an essential part in
[TDD](#tdd). Unit tests comprise test cases and may be organized
into test suites. A test case has four phases: Setup (test context),
Exercise, Verify using assertions, and Teardown (undo the setup).
