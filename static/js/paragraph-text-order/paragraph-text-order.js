let classesUsed = '';

export default function(elements) {
  let regexClasses = '';
  if (classesUsed) {
    [...new Set(classesUsed.trim().split(' '))].forEach(cl => {
      regexClasses += '(?! '+ cl +')';
    });
  }
  const regex = new RegExp('.*?(?! class)'+ regexClasses + '[ .]', 'g');
  elements.each((index, el) => {
    const line = [];
    el.innerHTML.match(regex)
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

export function setClasses(classes) {
  classesUsed += classes + ' ';
}
