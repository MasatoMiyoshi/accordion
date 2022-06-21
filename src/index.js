import anime from "animejs/lib/anime.es.js";

export function slideUp(elem, options) {
  if (elem.style.display == 'none') return;

  options = Object.assign(defaultOptions(), options);
  let hprop = heightProperty(elem);

  elem.style.height = `${hprop.height}px`;
  elem.style.paddingTop = `${hprop.paddingTop}px`;
  elem.style.paddingBottom = `${hprop.paddingBottom}px`;
  elem.style.marginTop = `${hprop.marginTop}px`;
  elem.style.marginBottom = `${hprop.marginBottom}px`;
  elem.style.overflow = 'hidden';

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
      elem.style.display = 'none';
      elem.style.height = null;
      elem.style.overflow = null;
      elem.style.paddingTop = null;
      elem.style.paddingBottom = null;
      elem.style.marginTop = null;
      elem.style.marginBottom = null;
      if (options.completeFunc !== undefined) options.completeFunc();
    }
  });
}

export function slideDown(elem, options) {
  if (elem.style.display != 'none') return;

  options = Object.assign(defaultOptions(), options);
  let hprop = heightProperty(elem);

  elem.style.height = '0px';
  elem.style.paddingTop = '0px',
  elem.style.paddingBottom = '0px',
  elem.style.marginTop = '0px';
  elem.style.marginBottom = '0px';
  elem.style.overflow = 'hidden';
  elem.style.display = 'block';

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
      elem.style.display = null;
      elem.style.height = null;
      elem.style.overflow = null;
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
  if (elem.style.display == 'none') {
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

function heightProperty(elem) {
  let copy = elem.cloneNode(true);
  copy.style.cssText = 'display: block; height: auto; overflow: hidden; visibility: hidden;';
  elem.parentNode.appendChild(copy);
  let height = parseFloat(computedStyle(copy, 'height'));
  elem.parentNode.removeChild(copy);

  return {
    height: height,
    paddingTop: parseFloat(computedStyle(elem, 'padding-top')),
    paddingBottom: parseFloat(computedStyle(elem, 'padding-bottom')),
    marginTop: parseFloat(computedStyle(elem, 'margin-top')),
    marginBottom: parseFloat(computedStyle(elem, 'margin-bottom'))
  };
}

function computedStyle(elem, property) {
  return document.defaultView.getComputedStyle(elem).getPropertyValue(property);
}
