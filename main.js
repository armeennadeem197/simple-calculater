import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter secondnumber", type: "number", name: "secondnumber" },
    {
        message: "select of the opertors to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    },
]);
//codition statement 
if (answer.operators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstnumber + answer.secondnumber);
}
