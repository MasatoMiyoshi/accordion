import { slideUp, slideDown, slideToggle } from 'index';

describe('index', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="slide-up__link"><a href="#">Slide up</a></div>
      <div class="slide-down__link"><a href="#">Slide down</a></div>
      <div class="slide-toggle__link"><a href="#">Slide toggle</a></div>
      <div class="slide-up__item accordion--visible">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
      <div class="slide-down__item accordion--hidden">
        <ul>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    `;
  });

  it('hides content', () => {
    let link = document.querySelector('.slide-up__link');
    link.addEventListener('click', () => {
      slideUp(document.querySelector('.slide-up__item'));
    });
    link.dispatchEvent(new MouseEvent('click'));
    expect(document.querySelector('.slide-up__item').classList.contains('accordion--upping')).toEqual(true);
  });

  it('shows content', () => {
    let link = document.querySelector('.slide-down__link');
    link.addEventListener('click', () => {
      slideDown(document.querySelector('.slide-down__item'));
    });
    link.dispatchEvent(new MouseEvent('click'));
    expect(document.querySelector('.slide-down__item').classList.contains('accordion--downing')).toEqual(true);
  });

  it('toggles content', () => {
    let link = document.querySelector('.slide-toggle__link');
    link.addEventListener('click', () => {
      slideToggle(document.querySelector('.slide-up__item'));
      slideToggle(document.querySelector('.slide-down__item'));
    });
    link.dispatchEvent(new MouseEvent('click'));
    expect(document.querySelector('.slide-up__item').classList.contains('accordion--upping')).toEqual(true);
    expect(document.querySelector('.slide-down__item').classList.contains('accordion--downing')).toEqual(true);
  });
});
