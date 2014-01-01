Meteor.startup(function() {
  //This loads the NPM module you have specified in your packages.json
  var Hashids = Meteor.require('hashids');
  //Now you can use this package like always :)
  var hashids = new Hashids('this is my salt');
  var numbers = hashids.decrypt("NkK9");
  console.log(numbers);
  //prints 12345
});