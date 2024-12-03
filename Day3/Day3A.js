const d = require("fs").readFileSync("lol.txt").toString();
let sum = 0;
const r = /mul\((\d+),(\d+)\)/g;
while (match = r.exec(d)) {
	sum += parseInt(match[1]) * parseInt(match[2]);
}
console.log(sum);
