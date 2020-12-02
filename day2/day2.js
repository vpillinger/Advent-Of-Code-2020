import csvReader from 'csvtojson';

let passwordDb = await csvReader({
	checkType: true,
	delimiter: ' '
}).fromFile('./day2/passwords.csv');

// Part 1
let validCount = 0;
for (let row of passwordDb) {
	let count = 0;
	for (let char of row.password) {
		if (char === row.value) {
			count++;
		}
	}
	if (count >= row.min && count <= row.max) {
		validCount++;
	}
}
console.log(validCount);

// Part 2
validCount = 0;
for (let row of passwordDb) {
	let count = 0;
	let firstPointMatches = row.value === row.password.charAt(row.min - 1); // don't forget system is 1 indexed
	let secondPointMatches = row.value === row.password.charAt(row.max - 1);
	if (firstPointMatches ? !secondPointMatches : secondPointMatches) {
		validCount++;
	}
}
console.log(validCount);