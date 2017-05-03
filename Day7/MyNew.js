function Person(firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;
}

function MyNew(myFunction) {
  var obj = Object.create(myFunction.prototype);
  var args = [].slice.call(arguments,1);
  myFunction.apply(obj, args);
  Object.setPrototypeOf(obj, myFunction.prototype);
  return obj;
}

console.log('Creating a new Person');
var justin = MyNew(Person, 'Justin', 'Bieber');
console.log(justin);
