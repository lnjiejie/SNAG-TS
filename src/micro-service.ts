// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
class DummyClass {
  DummyFunction() {
    console.log("This is a new micro service!")
  }
}

const newService = new DummyClass();
newService.DummyFunction();