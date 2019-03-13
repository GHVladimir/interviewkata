import * as $ from "jquery";
import {URL} from "../../global/variables";

export function importFile() {
  return $.ajax({url: URL});
}

export default function(parent) {
  return importFile().done(value => {
    if(value) {
      parent.html(value);
    }
  });
}
