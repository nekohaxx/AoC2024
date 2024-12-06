var d = require("fs").readFileSync("input.txt").toString().slice(0,-1).split("\n").map(l=>l.split(""))
var width = d[0].length
var height = d.length
var x, y;
meow: {
for (var i = 0; i < height; i++) {
	for (var j = 0; j < width; j++) {
		if (d[i][j] == "^") {
			x = j;
			y = i;
			break meow;
		}
	}
}
}
const UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3
var direction = UP
	d[y][x] = "X"
while(x >= 0 && x < width && y >= 0 && y < height) {
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
	console.log("\n\n----\n"+d.map(r=>r.join("")).join("\n"))
}
console.log("\n\n--------\n")
console.log(d.reduce((a,c)=>a+c.filter(x=>x==='X').length, 0))
