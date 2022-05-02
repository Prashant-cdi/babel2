"use strict";

var hello = function hello(fname, lname) {
  for (var _len = arguments.length, name = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    name[_key - 2] = arguments[_key];
  }

  return name;
};

console.log(hello("bot1", "bot2", "bot3", "bot4", "bot5"));