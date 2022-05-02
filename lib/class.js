"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Person = /*#__PURE__*/_createClass(function Person(fname, lname, age) {
  var _this = this;

  _classCallCheck(this, Person);

  _defineProperty(this, "getName", function () {
    return "name is " + _this.fname + " " + _this.lname;
  });

  _defineProperty(this, "getAge", function () {
    return "age is " + _this.age;
  });

  this.fname = fname;
  this.lname = lname;
  this.age = age;
});

var person1 = new Person("bot", "robot", 56);
console.log(person1.getName());
console.log(person1.getAge());