# [2.0.0-alpha.1](https://github.com/eorsjr/codex-websight/compare/v1.0.0...v2.0.0-alpha.1) (2025-07-10)


### Bug Fixes

* **seo:** :memo: add missing meta description to index.html ([200c264](https://github.com/eorsjr/codex-websight/commit/200c2649fc7140ce604e7e83757f491ba5a7cbc9))


### Code Refactoring

* :recycle: flatten component DOM + update styling hooks ([7498ced](https://github.com/eorsjr/codex-websight/commit/7498cedd693b2cb7f8b11cd171fd8231933ccb2a))
* :recycle: replace eui- component selectors with cxw- ([b5cb82d](https://github.com/eorsjr/codex-websight/commit/b5cb82dbf8be5bf506f46b50434d7a10de1d31da))


### BREAKING CHANGES

* replace eui- component selectors with cxw-
* External CSS targeting old internal component wrappers (e.g., .card) will break. Update affected CSS to target host elements (e.g., `eui-card`).



# 1.0.0 (2025-07-06)

:tada: First public release of **EUI Web**

### Features

**Components**
- `App Bar`
- `Button`
- `Icon Button`
- `Card`
- `Navigation Bar`
- `Navigation Rail`
- `Pane`
- `Scrim`

**Extras**
- `Copy Table`
- `Image Grid`
- `Lightbox`
- `Slideshow`
- `Toggle Color Palette`
- `Toggle Color Scheme`
- `Toggle Font`