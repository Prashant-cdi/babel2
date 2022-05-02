"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var hello = function hello(name, dogname) {
  var str = ["has a dog named"];
  var result = [name].concat(str, [dogname]);
  return result;
};

console.log(hello("bot1", "popoye"));
console.log(_typeof(hello("bot1", "popoye")));
console.log(Array.isArray(hello("bot2", "potter")));