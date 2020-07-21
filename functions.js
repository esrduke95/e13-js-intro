const nuggetizer = (animal) => {
    return 'processed ${animalSub}';
}

console.log(nuggetizer('seitan'));
console.log(nuggetizer('tofu'));
console.log(nuggetizer('tempeh'));
console.log(nuggetizer('cauliflower'));

const numberFunction = (x) => {
    return (x + 42);
}

console.log(numberFunction(5));

const futureAge = (birthYear) => {
    return (2099-birthYear);
}

console.log(futureAge(1995));