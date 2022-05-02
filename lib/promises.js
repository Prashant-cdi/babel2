"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function myDisplay() {
  return _myDisplay.apply(this, arguments);
}

function _myDisplay() {
  _myDisplay = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var myPromise, hello;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            myPromise = new Promise(function (resolve) {
              setTimeout(function () {
                resolve("the compiler is corrupt!!");
              }, 3000);
            });
            _context.next = 3;
            return myPromise;

          case 3:
            hello = _context.sent;
            document.getElementById("demo").innerHTML = hello;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _myDisplay.apply(this, arguments);
}

myDisplay();