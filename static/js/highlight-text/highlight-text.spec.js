import highlight from './highlight-text';
const $ = require('jquery');

describe('Highlight text', () => {
  it('should append html a given class', () => {
    const text = 't';
    const classes = 'test';
    highlight($('.container'), text, classes);
    expect($('.container')[0].innerHTML.indexOf('<span class="' + classes + '">' + text + '</span>')).not.toEqual(-1);
  });
});
