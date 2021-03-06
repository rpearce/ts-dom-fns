# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2021-01-22

### Added

* `getNextSibling`
* `getPreviousSibling`
* `getWindowPageXOffset`
* `getWindowPageYOffset`
* `insertAdjacentElement`
* `isEscapeKey`
* `raf`
* `removeDataAttributes`
* `replaceChild`
* `setInnerHTML`
* `setInnerText`
* `setTimeout`
* `stopPropagation`

## [1.0.2] - 2021-01-02

### Fixed

* `cloneElement` should now return the right type

## [1.0.1] - 2021-01-02

### Fixed

* many types were limited to `HTMLElement`, excluding `SVGElement`, for example

## [1.0.0] - 2020-08-07

### Changed

* setStyleProperty now uses el.style.setProperty instead of assignment
* change setStyleProperty api to accept priority first

## [0.5.0] - 2020-08-07

### Added

* getNaturalHeight
* getNaturalWidth
* getOffsetHeight
* getOffsetWidth

### Fixed

* potential issue with setStyleProperty

## [0.4.0] - 2020-08-02

### Added

* getScaleToWindow
* getScaleToWindowMax

## [0.3.1] - 2020-08-02

### Fixed

* forgot to include getBoundingClientRect in the `index.js` file

## [0.3.0] - 2020-08-02

### Added

* getBoundingClientRect

## [0.2.0] - 2020-07-30

### Added

* getParentNode
* getWindowInnerHeight
* getWindowInnerWidth

## [0.1.1] - 2020-07-30

### Fixed

* forEachSibling shouldn't call handler for the same element that was passed in

## [0.1.0] - 2020-07-29

### Added

* addEventListener
* appendChild
* blur
* cloneElement
* createElement
* customTypes
* focus
* forEachSibling
* getAttribute
* getComputedStyle
* getStyle
* getStyleProperty
* index
* removeAttribute
* removeChild
* removeEventListener
* setAttribute
* setStyleProperty
