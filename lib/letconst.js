"use strict";

function f() {
  {
    var x;
    console.log(x);
    x = 9;
    {
      var _x = "sneaky"; // x = "foo";

      console.log(_x);
    }
    console.log(x);
  }
}

f();