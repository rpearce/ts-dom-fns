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
* [customTypes](./source/customTypes.ts)
* [focus](./source/focus.ts)
* [forEachSibling](./source/forEachSibling.ts)
* [getAttribute](./source/getAttribute.ts)
* [getComputedStyle](./source/getComputedStyle.ts)
* [getBoundingClientRect](./source/getBoundingClientRect.ts)
* [getParentNode](./source/getParentNode.ts)
* [getStyleProperty](./source/getStyleProperty.ts)
* [getStyle](./source/getStyle.ts)
* [getWindowInnerHeight](./source/getWindowInnerHeight.ts)
* [getWindowInnerWidth](./source/getWindowInnerWidth.ts)
* [removeAttribute](./source/removeAttribute.ts)
* [removeChild](./source/removeChild.ts)
* [removeEventListener](./source/removeEventListener.ts)
* [setAttribute](./source/setAttribute.ts)
* [setStyleProperty](./source/setStyleProperty.ts)

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
