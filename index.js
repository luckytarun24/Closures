// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1> Closures</h1>`;

function outer_1() {
  var a = 10;
  function inner() {
    console.log('example 1 -', a); // Here inner function can access outer function variable it means it from closures.
  }
  inner();
}
outer_1();

function outer_2() {
  a = 10;
  function inner() {
    console.log('example 2 -', a);
  }
  inner();
  var a;
}
outer_2();

function outer_3() {
  // a = 10;
  function inner() {
    console.log('example 3 -', "Cannot access 'a' before initialization");
  }
  inner();
  let a;
}
outer_3();

function outer_4() {
  var a = 10;
  return function () {
    console.log('example 4 -', a);
  };
}
outer_4()(); // After calling outer it will return inner function and outer function scope will removed but here inner return with bind of lexical scope of outer scope.

function outer_5() {
  var a = 10;
  return function () {
    var a = 20;
    console.log('example 5 -', a);
  };
}
outer_5()();

function outer_6() {
  var a = 10;
  function inner() {
    var a = 20;
    return function () {
      console.log('example 6 -', a);
    };
  }
  return inner();
}
outer_6()();

function outer_7() {
  var a = 10;
  function inner() {
    a = 20;
    return function () {
      console.log('example 7 -', a);
    };
  }
  a = 30;
  return inner();
}
outer_7()();

{
  var a = 30;
  function outer_8() {
    var a = 10;
    function inner() {
      a++; //Here when a try to access value it get undefined because value defined but not initailize. so undefined++ === NaN
      console.log('example 8 - 1 -', a);
      var a = 3;
      console.log('example 8 - 2 -', a);
    }
    a = 30;
    return inner();
  }
  outer_8();
}

{
  let a = 30;
  function outer_8() {
    let a = 10;
    function inner() {
      // a++; Here when a try to access value it cannot get access beacuse it persent in temporary dead zone.
      console.log(
        'example 8 - 1 -',
        "Error: Cannot access 'a' before initialization"
      );
      let a = 3;
      console.log('example 8 - 2 -', a);
    }
    a = 30;
    return inner();
  }
  outer_8();
}

function outer_9() {
  var a = 10;
  setTimeout(function inner() {
    console.log('example 9 -', a);
  }, 1000);
}
outer_9();

function outer_10() {
  //here var have global scope and every function take refrence. so when settimeout access i it will 5.
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(`example 10 - ${i} -`, i);
    }, 1000);
  }
}
outer_10();

function outer_11() {
  //here let have local scope.So on every call it will define newly.
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(`example 10 - ${i} -`, i);
    }, 1000);
  }
}
outer_11();
