import sort from './paragraph-text-order';
const {JSDOM} = require('jsdom');
const $ = require('jquery');

describe('Text order in paragraph', () => {
  let dom;
  beforeEach(() => {
    dom = new JSDOM('<html><body><div class="container"><h1>hi there</h1><p>' +
      'Lorem Ipsum is simply dummy text. </p></div></body></html>');
    global.document  = dom.window.document;
    global.window    = dom.window;
    global.navigator = dom.window.navigator;
  });

  it('should be sorted alphabetically', () => {
    sort($('p'));
    expect($('p')[0].innerHTML.split(' ')[0]).toEqual('dummy');
  });
});
