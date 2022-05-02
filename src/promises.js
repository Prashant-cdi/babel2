

async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("the compiler is corrupt!!");}, 3000);
  });
  let hello = await myPromise;
  document.getElementById("demo").innerHTML = hello;
}

myDisplay();
