const d = require("fs").readFileSync("lol.txt").toString();
let sum = 0;
const r = /(mul|do|don't)\((?:(\d+),(\d+)|)\)/g;
let _do = true;
while (match = r.exec(d)) {
	switch (match[1]) {
		case "mul":
			if (_do) sum += parseInt(match[2]) * parseInt(match[3]);
			break;
		case "do":
			_do = true;
			break;
		case "don't":
			_do = false;
	}
}
console.log(sum);
