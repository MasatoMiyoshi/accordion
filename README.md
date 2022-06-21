# accordion

A javascript library for accordion component.

## Dependencies

- animejs

## Installation

Install from npm:

    $ npm install @masatomiyoshi/accordion --save

## Usage

Import function:

```javascript
import { slideUp, slideDown, slideToggle } from '@masatomiyoshi/accordion'
```

Build html as follows:

```html
<div class="slide-up__link"><a href="#">Slide up</a></div>
<div class="slide-down__link"><a href="#">Slide down</a></div>
<div class="slide-toggle__link"><a href="#">Slide toggle</a></div>
<div class="slide__item">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

Build events:

```javascript
document.querySelector('.slide-up__link').addEventListener('click', () => {
  slideUp(document.querySelector('.slide__item'));
});
document.querySelector('.slide-down__link').addEventListener('click', () => {
  slideDown(document.querySelector('.slide__item'));
});
document.querySelector('.slide-toggle__link').addEventListener('click', () => {
  slideToggle(document.querySelector('.slide__item'));
});
```

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
