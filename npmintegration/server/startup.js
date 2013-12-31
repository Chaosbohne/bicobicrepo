Meteor.startup(function() {
  var hashids = new Hashids('this is my salt');
  var numbers = hashids.decrypt("NkK9");
  console.log(numbers);
  //prints 12345
});