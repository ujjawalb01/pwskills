//add two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", addNumbers(10, 20));


//even or odd
function checkEvenOdd(num: number): string {
    if (num % 2 === 0) {
        return "Number is Even";
    } else {
        return "Number is Odd";
    }
}

console.log(checkEvenOdd(10));


//area of a rectangle
function rectangleArea(length: number, width: number): number {
    return length * width;
}

console.log("Area of Rectangle:", rectangleArea(20, 10));


//simple interest
function simpleInterest(p: number, r: number, t: number): number {
    return (p * r * t) / 100;
}

console.log("Simple Interest:", simpleInterest(10000, 5, 1));


//  greet a user 
function greetUser(name: string = "Student"): string {
    return `Hello ${name}`;
}

console.log(greetUser());


//employee salary with optional bonus
function employeeSalary(salary: number, bonus?: number): number {
    return salary + (bonus ?? 0);
}

console.log("Employee Salary:", employeeSalary(30000, 5000));


//arrow function
const findLargest = (a: number, b: number): number => {
    return a > b ? a : b;
};

console.log("Largest Number:", findLargest(80, 50));
