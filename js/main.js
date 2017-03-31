
window.onload = function () {

  var hasClass = function(el, className) {
    if (el.classList) {
      return el.classList.contains(className)
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    }
  };

  var addClass = function(el, className) {
    if (el.classList) {
      el.classList.add(className)
    } else if (!hasClass(el, className)) {
      el.className += " " + className
    }
  };

  var removeClass = function(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  };

  function openElement(e) {
    var el = e.currentTarget;
    var className = 'is-open';
    var isClassy = hasClass(el, className)

    if (isClassy) {
      removeClass(el, className);
    } else {
      addClass(el, className);
    }
  };

  var accordionHeaders = document.getElementsByClassName('accordion-header');

  var arrayLength = accordionHeaders.length;
  for (var i = 0; i < arrayLength; i++) {
    accordionHeaders[i].addEventListener('click', openElement);
  }
}
