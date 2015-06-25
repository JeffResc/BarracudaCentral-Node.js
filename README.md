[![NPM](https://nodei.co/npm/barracudacentral.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/barracudacentral/)

# BarracudaCentral
BarracudaCentral IP Address Lookup in Node.js

Example Lookup:

First run ```npm install barracudacentral``` to install the BarracudaCentral package to your system.

```javascript
var BarracudaCentral = require('barracudacentral');

BarracudaCentral.lookup('8.8.8.8', function(res) {
	console.log(res); //Returns false since 8.8.8.8 is not listed
});

BarracudaCentral.lookup('127.0.0.2', function(res) {
	console.log(res); //Returns true since 127.0.0.2 is listed
});
```

[This Package Is Under The GPL-3.0 License](https://raw.githubusercontent.com/AlphaT3ch/BarracudaCentral/master/LICENSE.txt)