import {importFile} from './fetch-and-replace';
import replace from './fetch-and-replace';
const $ = require('jquery');

describe('Fetch and replace', () => {
  let responseStatus;
  let html;
  beforeAll(() => {
    return importFile().done((value, status, result) => {
      html = value;
      responseStatus = result.status;
    });
  });

  it('should check if fetch returns 200', () => {
    expect(responseStatus).toEqual(200);
  });

  it('should check check if html is replaced', () => {
    replace($('.container')).done(() => {
      expect($('.container').html()).toEqual(html);
    });
  });
});
