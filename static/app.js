import fetchAndReplace from './js/fetch-and-replace';
import './css/styles.scss';
import * as $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  const mainDiv = $('.container');
  fetchAndReplace(mainDiv).done();
});



/*
 * Hi there and welcome to this little coding kata. Here is what you should do in javascript:
 * NOTE: do the exercises step by step
 *
 * 1. There is a file on the webserver, named lorem.html. It contains a lot of (html) text. 
 *    Write a javascript function, which fetches the contents of this file asynchronously 
 *    from the server and replaces the contents of the <div class="container"> div of the website.
 * 
 * 2. There are lots of o's in the imported text. As the letter o is very important for this exercise, 
 *    we should highlight it. Highlight all the o's (upper- and lowercase) with my-blue background (see styles.scss for
 *    more information about that color) and white font color, a 30% bigger font size and add some 
 *    padding so that every o stands out.
 * 
 * 3. The letter 'r' is also very important. Highlight it in the same way (upper- and lowercase), but use the my-orange
 *    color this time.
 * 
 * 4. Instead of text with "meaning", the PO wants to have all the words which are placed in paragraph
 *    tags to be sorted in alphabetical order. Get rid of all the punctuation, just display the words
 *    in the right order. Example: <p>what a requirement</p> becomes <p>a requirement what</p>. 
 * 
 */

