export default class DummyClass {
  DummyFunction() {
    console.log("This is a new micro service!")
  }
}

const newService = new DummyClass();
newService.DummyFunction();