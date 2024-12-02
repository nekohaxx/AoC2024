var a = `...`
a = a.replace(/ +/g, " ").split("\n").map(r=>r.split(" ").map(r=>parseInt(r)))
var b = a.map(r => r[0]).sort();
var c = a.map(r => r[1]).sort();
var sum = 0;
for (var i = 0; i < b.length; i++) {
	sum += Math.abs(b[i] - c[i])
}
console.log(sum)
