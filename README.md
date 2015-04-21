# Polythene

Polymer inspired modular implementation of Material Design for [Mithril](http://lhorie.github.io/mithril). 

Alpha status. Things will break.


## Examples

See [Polythene Examples](https://github.com/ArthurClemens/Polythene-Examples).


## Background

Polythene borrows a great deal from [Polymer](http://polymer.github.io) (CSS styles, component names), but instead of using Web Components, it is built on top of [Mithril](http://lhorie.github.io/mithril).

Mithril is a small and fast MVC framework that encourages a clean app architecture. In Mithril pretty much everything is a function. Templates are functions that return objects, so they can be passed around, composed, mixed, have lazy rendering, etcetera.

Polythene components are Mithril components, with all of their flexibility.



## Composition

The icon component is a small example how components can be combined. It is a wrapper around an image or SVG:

	var icon = require('polythene/icon/icon');
	var myIcon = m.component(icon, {
		src: 'app/icon/img/ic_directions_black_48dp.png'
	});

[m.component](https://github.com/lhorie/mithril.js/blob/components/docs/mithril.component.md) is a Mithril function that instantiates a component with an options object; in this case a simple object with the single key `src`.

This principle can also be used to create a larger component, such as an icon button:

	var icon = require('polythene/icon/icon');
	var menuIcon = m.component(icon, {
	    src: 'img/arrow.png'
	});

	var iconBtn = require('polythene/icon-button/icon-button');
	var myIconBtn = m.component(iconBtn, {
		content: menuIcon
	});

Or using object notation:

	var iconBtn = require('polythene/icon-button/icon-button');
	var myIconBtn = m.component(iconBtn({
		icon: {
		    src: 'img/arrow.png'
		}
	});



## Wiring up


## Overriding/subclassing components


## Layout


## Performance




## Installation

NodeJS scripts are used for installing the development dependencies. For this step you need to have `npm` installed.

In the root directory, run the following commands:

1. `npm install` - installs grunt, grunt plugins and bower
2. `grunt deps` - lets bower install the frontend dependencies

If you want to change/extend Polythene and compile Sass files to Css, run:

* `grunt css`


Dependencies are:

* [Mithril](http://lhorie.github.io/mithril)
* [RequireJS](http://requirejs.org)
* [require-css](https://github.com/guybedford/require-css)
* [Material Design Iconic Font](https://github.com/zavoloklom/material-design-iconic-font)
* [Material Design Icons](https://github.com/Templarian/MaterialDesign)



## License

* Polythene: MIT
* Polymer: [Copyright (c) 2014 The Polymer Authors. All rights reserved.](http://polymer.github.io/LICENSE.txt)

