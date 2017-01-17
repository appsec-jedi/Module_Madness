var random = require('./module1');
var money = require('./module2');

exports.dollar = function() {
  return money(random(100, 1000000));
};

exports.accountBalance = function() {
  return "Account balance: \n";
};
