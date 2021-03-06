
module.exports = function(elements, options) {

  /* Assign function arguments to variables.  The elements variable references the text
  to be bound to the page.  Options is an optional argument that takes the form of an object with a
  baseline and/or a paddingY */
  var options = options || {};
  var baseline = options.baseline || 16;
  var paddingY = options.paddingY || 0;
  var doc = options.doc || document;

  for (var i = 0; i < elements.length; i++) {

    // variable declarations
    var content = elements[i].textContent;
    var svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var text = doc.createElementNS('http://www.w3.org/2000/svg', 'text');
    var width;
    var height;

    // assign proper styles and positioning to text elements
    text.textContent = content;
    text.setAttribute('y', baseline);
    text.setAttribute('font-family', 'inherit');
    text.setAttribute('font-size', '1rem');
    text.setAttribute('font-weight', 'inherit');

    for (var j = 0; j < elements[i].attributes.length; j++) {
      svg.setAttribute(elements[i].attributes[j].name, elements[i].attributes[j].value);
    }

    // set proper size, style, and fill for svg element
    svg.setAttribute('width', '100%');
    svg.setAttribute('style', 'max-height:100%;overflow-x:visible');
    svg.setAttribute('fill', 'currentcolor');

    // append text element to page
    svg.appendChild(text);
    elements[i].parentNode.replaceChild(svg, elements[i]);

    width = text.offsetWidth || text.getComputedTextLength();
    height = text.offsetHeight || 24;

    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + (height + paddingY));

  }

};

