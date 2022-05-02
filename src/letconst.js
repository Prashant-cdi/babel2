function f() {
    {

      let x;
      console.log(x);

      x=9;
      
      {
        const x = "sneaky";
        // x = "foo";
        console.log(x);
      }

      console.log(x);
      
    }
  }


  f();