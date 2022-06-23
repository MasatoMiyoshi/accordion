import anime from "animejs/lib/anime.es.js";
import './index.scss';

export function slideUp(elem, options) {
  if (isHidden(elem) || isUpping(elem)) return;
  anime.remove(elem);
  setClass(elem, 'upping');

  options = Object.assign(defaultOptions(), options);
  let hprop = heightProperty(elem);

  if (elem.style.height == '') elem.style.height = `${hprop.height}px`;
  if (elem.style.paddingTop == '') elem.style.paddingTop = `${hprop.paddingTop}px`;
  if (elem.style.paddingBottom == '') elem.style.paddingBottom = `${hprop.paddingBottom}px`;
  if (elem.style.marginTop == '') elem.style.marginTop = `${hprop.marginTop}px`;
  if (elem.style.marginBottom == '') elem.style.marginBottom = `${hprop.marginBottom}px`;

  anime({
    targets: elem,
    height: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    marginTop: '0px',
    marginBottom: '0px',
    duration: options.duration,
    easing: options.easing,
    begin: function(a) {
      if (options.beginFunc !== undefined) options.beginFunc();
    },
    complete: function(a) {
      setClass(elem, 'hidden');
      elem.style.height = null;
      elem.style.paddingTop = null;
      elem.style.paddingBottom = null;
      elem.style.marginTop = null;
      elem.style.marginBottom = null;
      if (options.completeFunc !== undefined) options.completeFunc();
    }
  });
}

export function slideDown(elem, options) {
  if (isVisible(elem) || isDowning(elem)) return;
  anime.remove(elem);
  setClass(elem, 'downing');

  options = Object.assign(defaultOptions(), options);
  let hprop = heightProperty(elem);

  if (elem.style.height == '') elem.style.height = '0px';
  if (elem.style.paddingTop == '') elem.style.paddingTop = '0px';
  if (elem.style.paddingBottom == '') elem.style.paddingBottom = '0px';
  if (elem.style.marginTop == '') elem.style.marginTop = '0px';
  if (elem.style.marginBottom == '') elem.style.marginBottom = '0px';

  anime({
    targets: elem,
    height: `${hprop.height}px`,
    paddingTop: `${hprop.paddingTop}px`,
    paddingBottom: `${hprop.paddingBottom}px`,
    marginTop: `${hprop.marginTop}px`,
    marginBottom: `${hprop.marginBottom}px`,
    duration: options.duration,
    easing: options.easing,
    begin: function(a) {
      if (options.beginFunc !== undefined) options.beginFunc();
    },
    complete: function(a) {
      setClass(elem, 'visible');
      elem.style.display = null;
      elem.style.height = null;
      elem.style.paddingTop = null;
      elem.style.paddingBottom = null;
      elem.style.marginTop = null;
      elem.style.marginBottom = null;
      if (options.completeFunc !== undefined) options.completeFunc();
    }
  });
}

export function slideToggle(elem, options) {
  options = Object.assign(defaultOptions(), options);
  if (isHidden(elem) || isUpping(elem)) {
    slideDown(elem, options);
  } else {
    slideUp(elem, options);
  }
}

function defaultOptions() {
  return {
    duration: 400,
    easing: 'easeInOutCubic',
    beginFunc: undefined,
    completeFunc: undefined
  };
}

function isVisible(elem) {
  return elem.classList.contains('accordion--visible');
}

function isUpping(elem) {
  return elem.classList.contains('accordion--upping');
}

function isHidden(elem) {
  return elem.classList.contains('accordion--hidden');
}

function isDowning(elem) {
  return elem.classList.contains('accordion--downing');
}

function setClass(elem, kind) {
  elem.classList.remove('accordion--visible');
  elem.classList.remove('accordion--upping');
  elem.classList.remove('accordion--hidden');
  elem.classList.remove('accordion--downing');
  elem.classList.add(`accordion--${kind}`);
}

function heightProperty(elem) {
  let copy = elem.cloneNode(true);
  copy.style.cssText = '';
  copy.style.cssText = 'display: block; height: auto; overflow: hidden; visibility: hidden;';
  elem.parentNode.appendChild(copy);
  let height = parseFloat(computedStyle(copy, 'height'));
  let paddingTop = parseFloat(computedStyle(copy, 'padding-top'));
  let paddingBottom = parseFloat(computedStyle(copy, 'padding-bottom'));
  let marginTop = parseFloat(computedStyle(copy, 'margin-top'));
  let marginBottom = parseFloat(computedStyle(copy, 'margin-bottom'));
  elem.parentNode.removeChild(copy);

  return {
    height: height,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    marginTop: marginTop,
    marginBottom: marginBottom
  };
}

function computedStyle(elem, property) {
  return document.defaultView.getComputedStyle(elem).getPropertyValue(property);
}
