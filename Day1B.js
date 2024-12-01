var a = `...`
a = a.replace(/ +/g, " ").split("\n").map(r=>r.split(" ").map(r=>parseInt(r)))
var b = a.map(r => r[0]);
var c = a.map(r => r[1]);
var sum = 0;
for (var i = 0; i < b.length; i++) {
	sum += b[i] * c.filter(r => r == b[i]).length
}
console.log(sum)
