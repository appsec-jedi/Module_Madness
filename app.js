var http = require('http');
var random = require('./module1');
var toDollar = require('./module2');
var balance = require('./module3');

http.createServer(function (req, res) {

  res.writeHead(200);

  res.write(balance.accountBalance() + '\n');

  res.write(balance.dollar() + '\n');

  res.end();
}).listen(3000);
