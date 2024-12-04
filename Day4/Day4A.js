var d = require('fs').readFileSync('input.txt').toString().slice(0,-1);
var ar = []
ar.push(d.split("\n"))
ar.push(d.split("\n").map((_,i)=>d.split("\n").map(r=>r[i]).join("")))
var d1 = []
var d2 = []
for (var i = 0; i < d.split("\n").length * 2 + 1; i++) {
	var s1 = ""
	var s2 = ""
	var y = i;
	for (var j = 0; j < d.split("\n").length; j++) {
		s1 += ((d.split("\n")[y] || " ".repeat(d.split("\n").length))[j]);
                s2 += ((d.split("\n")[d.split("\n").length - 1 - y] || " ".repeat(d.split("\n").length))[j]);
		if (--y < 0) break;
	}
	d1.push(s1.trim())
	d2.push(s2.trim())
}
ar.push(d1)
ar.push(d2)
for (var i of [...ar]) {
	ar.push(i.map(r=>r.split("").reverse().join("")))
}
matches = 0
for (var s of ar.flat()) {
	matches += (s.match(/XMAS/g) || []).length
}
console.log(matches)
