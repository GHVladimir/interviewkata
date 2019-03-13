export default function(elements) {
  console.log('document: ', document.body.innerHTML);
  elements.each((index, el) => {
    const line = [];
    el.innerHTML
      .match(/.*?(?! class)(?! letter)[ .]/g) && el.innerHTML.match(/.*?(?! class)(?! letter)[ .]/g)
      .forEach(word => {
        word = word.replace(/[:;,.!?\\]/g, '');
        word = word.trim();
        if(word.trim()) {
          line.push(word);
        }
      });
    line.sort((a, b) =>
      (a[0] === '<' ? a[a.indexOf('>') + 1] : a).localeCompare(b[0] === '<' ? b[b.indexOf('>') + 1] : b)
    );
    el.innerHTML = line.join(' ');
  });
}
