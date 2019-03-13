function iterateChildren(node, text, classes) {
  let sibling;

  // elementNode
  if(node.nodeType === 1) {
    node = node.firstChild;
    while(node) {
      sibling = node.nextSibling;
      iterateChildren(node, text, classes);
      node = sibling;
    }
    // textNode
  } else if(node.nodeType === 3) {
    if(new RegExp(text, 'gi').test(node.data)) {
      wrapMatches(node, text, classes);
    }
  }
}

function wrapMatches(textNode, text, classes) {
  const temp     = document.createElement('div');
  temp.innerHTML = textNode.data.replace(new RegExp(text, 'gi'),
    (match) => {
      return '<span class="' + classes + '">' + match + '</span>'
    });
  while(temp.firstChild) {
    textNode.parentNode.insertBefore(temp.firstChild, textNode);
  }
  textNode.parentNode.removeChild(textNode);
}

export default function highlight(parent, text, classes) {
  parent.each(function(index, el) {
    iterateChildren(el, text, classes);
  })
}
