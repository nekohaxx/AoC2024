var d = require("fs").readFileSync("input.txt").toString().slice(0,-1)
var [a, b] = d.split("\n\n")
a = a.split("\n").map(r=>r.split("|").map(i=>parseInt(i)))
b = b.split("\n").map(u=>u.split(",").map(i=>parseInt(i)))

var t = 0
for (var u of b) {
	var g = true
	for (var r of a) {
		if (u.indexOf(r[0]) == -1 || u.indexOf(r[1]) == -1) continue
		if (u.indexOf(r[0]) < u.indexOf(r[1])) continue
		g = false
		break
	}
	if (g) t += u[(u.length/2)-0.5]
	console.log(u)
}

console.log(t)
