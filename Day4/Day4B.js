var d = require('fs').readFileSync('input.txt').toString().slice(0,-1);
d = d.split("\n").map(l=>l.split(""))
var w = d.length
var c = 0;
for (var x = 0; x < (w-2); x++) {
	for (var y = 0; y < (w-2); y++) {
		if (d[x+1][y+1]!='A') continue
		var _1 = d[x][y]
		var _2 = d[x+2][y]
		var _3 = d[x][y+2]
		var _4 = d[x+2][y+2]
		if (_1 == 'M') {
			if (_4 != 'S') continue;
		} else if (_1 == 'S') {
			if (_4 != 'M') continue;
		} else {
			continue;
		}
		if (_2 == 'M') {
			if (_3 != 'S') continue;
		} else if (_2 == 'S') {
			if (_3 != 'M') continue;
		} else {
			continue;
		}
		c += 1
	}
}
console.log(c)
