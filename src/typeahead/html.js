/*
 * typeahead.js
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

var html = (function() {
  return {
    wrapper: '<span class="twitter-typeahead"></span>',
    dropdown: '<div class="popover bottom clearfix" style="display: block;"><div class="arrow left"></div><div class="popover-content"><div class="popover-inner-wrapper"><span class="tt-dropdown-menu"></span></div></div></div>',
    dataset: '<div class="tt-dataset-%CLASS%"></div>',
    suggestions: '<span class="tt-suggestions"></span>',
    suggestion: '<li class="tt-suggestion"></li>'
  };
})();
