var o = require("fs").readFileSync("input.txt").toString().slice(0,-1).split("\n").map(l=>l.split(""))
var width = o[0].length
var height = o.length
var ix, iy;
meow: {
for (var i = 0; i < height; i++) {
	for (var j = 0; j < width; j++) {
		if (o[i][j] == "^") {
			ix = j;
			iy = i;
			break meow;
		}
	}
}
}
const UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3
var d = structuredClone(o)
function checkOb(h, k) {
var direction = UP
var a = []
var b = false
var x = ix
var y = iy
d[y][x] = "X"
d[k][h] = "#"
while(x >= 0 && x < width && y >= 0 && y < height) {
	if (!a.includes(`${x},${y},${direction}`)) {
		a.push(`${x},${y},${direction}`)
		c = 0
}	else {
		b = true
		break
	}
	if (d[y][x] == "#") {
		if (direction == UP) y++;
		if (direction == DOWN) y--;
		if (direction == LEFT) x++;
		if (direction == RIGHT) x--;
		direction++
		if (direction > LEFT) direction = UP
	} else {
		d[y][x] = 'X'
	}
	if (direction == UP) y--;
	if (direction == DOWN) y++;
	if (direction == LEFT) x--;
	if (direction == RIGHT) x++;
}
return b
}
var t = 0
checkOb(0, 0)
var f = d
d = structuredClone(o)
for (var x = 0; x < width; x++) {
	for (var y = 0; y < height; y++) {
		if (f[y][x] == "X") {
			t += checkOb(x, y) === true
			d = structuredClone(o)
console.log(x,y)
		}
	}
}
console.log(t)
