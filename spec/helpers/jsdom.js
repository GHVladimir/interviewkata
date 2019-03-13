import {JSDOM} from 'jsdom';

const dom        = new JSDOM('<html><body><div class="container"><h1>hi there</h1><p>' +
  'Lorem Ipsum is simply dummy text. </p></div></body></html>');
global.document  = dom.window.document;
global.window    = dom.window;
global.navigator = dom.window.navigator;
