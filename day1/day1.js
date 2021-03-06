import csvReader from 'csvtojson';

let expenseReport = await csvReader({
	checkType: true,
}).fromFile('./day1/expense_report.csv');

console.log(expenseReport[0]);
for (let [i, row] of expenseReport.entries()) {
	for (let [j, secondRow] of expenseReport.slice(i + 1).entries()) {
		for (let thirdRow of expenseReport.slice(j + 1)) {	
			if (row.expense + secondRow.expense + thirdRow.expense === 2020) {
				console.log(row.expense * secondRow.expense * thirdRow.expense);
			}
		}
	}
}

/*
 * This is a pretty naive way of doing this problem, but the problem set is small enough to not matter.
 * Some simple optimizations are to filter out all values below the target (2020), and to stop processing when the answer is found.
 */