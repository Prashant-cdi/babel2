"use strict";

var getProduct = function getProduct(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return a * b;
};

console.log(getProduct(10, 200));
console.log(getProduct(10));