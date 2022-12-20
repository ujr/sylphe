# About jQuery

- JS library to simplify DOM manipulation
- the most widely deployed JS library
- started in 2006 by John Resig
- License: [MIT](https://choosealicense.com/licenses/mit/)
- Homepage: [jquery.com](http://jquery.com/)
- Current version: 3.3.1 (Jan 2019), size 86kb minified
- Browser support: “current-1” (current stable
  and previous version of all major browsers)

Quick overview:

- main identifier: `jQuery` and its more frequently used alias `$`
- function example: `$.ajax()`
- method example: `$("div.test")`
- chaining example: `$("div.test").addClass("foo").on("click",handleClick)`
- initialization: usually `$(handler)`, which calls *handler*
  once the DOM is ready (since jQuery 3 this is recommended
  over `$(document).ready(handler)`)

Annotated examples (from jquery.com):

```JavaScript
$("a").click(function(e){    // attach click handler to each a elem on page
  $(this).hide();            // in a handler, this refers to its DOM elem
                             // and $(this) refers to its jQuery element
  e.preventDefault();        // suppress the event's default behaviour
});
```

```JavaScript
$("#logo") === $("#logo");   // false (two jQuery object instances)
$("#logo").get() === $("#logo").get(); // true (same DOM element)
$("tr:odd");                 // pseudo selector for odd table rows
$("div.foo").has("p");       // div.foo elems that contain <p> tags
$("h1").not(".bar");         // h1 elems that don't have the bar class
$("ul li").filter("current");// ul items with class current
$("ul li").first();          // only the first unordered list item
$("ul li").eq(2);            // only the third (0,1,2) list item
var divs = $("div");         // saving selections
if($("div.foo").length) { /* selection has elements */ }
```

```JavaScript
$("h1").html("Hello");       // set the html of all h1 elems to "Hello"
var x = $("h1").html();      // returns "Hello"
```

```JavaScript
$("#content")
  .find("h3")
  .eq(2)
    .html("new text for the third h3")
    .end()  // restores the selection to all h3s in #content
  .eq(0)
    .html("new text for the first h3");
```

Working with elements

- `.html()` – get or set the HTML contents
- `.text()` – get or set the text contents (HTML tags stripped)
- `.attr()` – get or set the value of the given attribute
- `.width()`, `.height()` – get or set size in pixels of 1st elem in selection
- `.val()` – get or set the value for form elements
- `.css()` – get or set CSS property values, e.g. `$("h1").css("fontSize", "20px");`
- `.addClass()`, `.removeClass()`, `.toggleClass()`, `.hasClass()`
- `.data()` – get or set data (key/value pairs) on an element

Utility methods

- `$.trim(s)` – returns copy of s with leading and trailing white space removed
- `$.each(a,f)` – calls f(idx,elem) for each elem in a
- `$.map(a,f)` – f is called as f(value,index) (note the reversal)
- `$.extend(target, other)`
- `$.isArray(any)`
- `$.isFunction()` and `$.isNumeric()` are deprecated since 3.3
- `$.type(any)`

