'use strict';

/**
 * isInViewport
 *
 * @desc determine if any part of the element is visible in the viewport
 * @reference https://github.com/Josh-Miller/isInViewport
 * @see http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
 * @param {HTMLElement} element
 * @returns {boolean}
 */

function isInViewport(element) {
  var top = element.offsetTop;
  var left = element.offsetLeft;
  var width = element.offsetWidth;
  var height = element.offsetHeight;

  while (element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
    left += element.offsetLeft;
  }

  return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
}

module.exports = isInViewport;

// TODO: 考虑滚动条不在窗口上的情形