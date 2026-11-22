let employeeName: string = "Jason";
let age: number = 25;
let monthlySalary: number = 40000;


let department = "Engineering";
let isFullTime = true;

// Calculate annual salary
let annualSalary = monthlySalary * 12;


let bonus = 0;
bonus += 5000;

// Convert string into number 
let salaryString: string = "40000";
let convertedSalary: number = Number(salaryString);

// Check bonus eligibility 
let bonusEligible = monthlySalary > 30000 && age > 18;


console.log(`Employee Name: ${employeeName}`);
console.log(`Age: ${age}`);
console.log(`Monthly Salary: ${monthlySalary}`);
console.log(`Annual Salary: ${annualSalary}`);
console.log(`Bonus: ${bonus}`);
console.log(`Bonus Eligible: ${bonusEligible}`);