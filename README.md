# ts-dom-fns

[![npm version](https://img.shields.io/npm/v/@rpearce/ts-dom-fns.svg?style=flat-square)](https://www.npmjs.com/package/@rpearce/ts-dom-fns) [![npm downloads](https://img.shields.io/npm/dm/@rpearce/ts-dom-fns.svg?style=flat-square)](https://www.npmjs.com/package/@rpearce/ts-dom-fns) [![bundlephobia size](https://flat.badgen.net/bundlephobia/minzip/@rpearce/ts-dom-fns)](https://bundlephobia.com/result?p=@rpearce/ts-dom-fns)

TypeScript DOM Helper Functions

## Why?

JS object properties are not minified/mangled by default (and should not be)
with tools like [terser](https://terser.org), so your JS bundles can have
multiple appearances of DOM methods like `.addEventListener`, `.parentNode`,
`.focus`, `.appendChild`, and more, and this can needlessly increase your bundle
sizes. On the other hand, variables and functions are reduced to names like `a`,
`b,` and `ab`, and this can greatly reduce the size of your web page.

With this little library, we leverage the ability for variables and functions to
be mangled by wrapping common DOM methods and properties in functions so that we
only have methods like `.addEventListener` show up once in our bundled JS
output.

Also of note is that the functions' arguments are ordered from least likely to
change to most likely to change ("functional style") so that you can partially
apply arguments to functions via something like `.bind()` and get greater code
reuse. There are very few objects accepted in order to keep build sizes as small
as possible.

## Installation

```js
λ npm i @rpearce/ts-dom-fns
```

or

```js
λ yarn add @rpearce/ts-dom-fns
```

## The Helper Functions

* [addEventListener](./source/addEventListener.ts)
* [appendChild](./source/appendChild.ts)
* [blur](./source/blur.ts)
* [cloneElement](./source/cloneElement.ts)
* [createElement](./source/createElement.ts)
* [focus](./source/focus.ts)
* [forEachSibling](./source/forEachSibling.ts)
* [getAttribute](./source/getAttribute.ts)
* [getBoundingClientRect](./source/getBoundingClientRect.ts)
* [getComputedStyle](./source/getComputedStyle.ts)
* [getNaturalHeight](./source/getNaturalHeight.ts)
* [getNaturalWidth](./source/getNaturalWidth.ts)
* [getNextSibling](./source/getNextSibling.ts)
* [getOffsetHeight](./source/getOffsetHeight.ts)
* [getOffsetWidth](./source/getOffsetWidth.ts)
* [getParentNode](./source/getParentNode.ts)
* [getPreviousSibling](./source/getPreviousSibling.ts)
* [getScaleToWindow](./source/getScaleToWindow.ts)
* [getScaleToWindowMax](./source/getScaleToWindowMax.ts)
* [getStyle](./source/getStyle.ts)
* [getStyleProperty](./source/getStyleProperty.ts)
* [getWindowInnerHeight](./source/getWindowInnerHeight.ts)
* [getWindowInnerWidth](./source/getWindowInnerWidth.ts)
* [getWindowPageXOffset](./source/getWindowPageXOffset.ts)
* [getWindowPageYOffset](./source/getWindowPageYOffset.ts)
* [insertAdjacentElement](./source/insertAdjacentElement.ts)
* [isEscapeKey](./source/isEscapeKey.ts)
* [raf](./source/raf.ts)
* [removeAttribute](./source/removeAttribute.ts)
* [removeChild](./source/removeChild.ts)
* [removeDataAttributes](./source/removeDataAttributes.ts)
* [removeEventListener](./source/removeEventListener.ts)
* [replaceChild](./source/replaceChild.ts)
* [setAttribute](./source/setAttribute.ts)
* [setInnerHTML](./source/setInnerHTML.ts)
* [setInnerText](./source/setInnerText.ts)
* [setStyleProperty](./source/setStyleProperty.ts)
* [setTimeout](./source/setTimeout.ts)
* [stopPropagation](./source/stopPropagation.ts)

## Usage

Use only the functions you want to, and the rest should get tree-shaken out by
your build tool.

```js
import { addEventListener, removeEventListener } from '@rpearce/ts-dom-fns'

// ...

const CLICK = 'click'
const cb = (e) => { console.log('Clicked!', e) }

addEventListener(CLICK, cb, document)

// ...

removeEventListener(CLICK, cb, document)
```
