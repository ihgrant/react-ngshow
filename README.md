# react-ng-show
Angular directive goodness for your React apps!

Provide it with a `show` prop that is truthy, and it'll display the child component(s). Provide it with a `show` prop that is falsy, and it'll hide its children. By default it hides its children by applying a style of `display: none` but you can cause it to simply not render its children by using the `DOM` subcomponent, or by specifying this behavior in the `options` prop (see below).

## usage

```
// basic usage:
var Show = require('react-ngshow');

React.render(
	<Show show={myVariable}><MyComponent /></Show>,
	document.getElementById('app')
);

// don't render children if falsy:
React.render(
	<Show.DOM show={myVariable}><MyComponent /></Show.DOM>,
	document.getElementById('app')
);

// using options:
React.render(
	<Show show={myVariable} options={{hiddenClass: 'myHiddenClass'}}><MyComponent /></Show>,
	document.getElementById('app')
);
```

## props
_show_: if truthy, will show children. If falsy, will hide children.
_options_:
-	DOM: if true, will not render children when normally they would be hidden.
-	hiddenClass: if defined, this class will be applied instead of an inline style of `display: none` when the children are to be hidden.
