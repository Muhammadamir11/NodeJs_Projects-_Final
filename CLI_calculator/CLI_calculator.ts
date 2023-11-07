import inquirer from 'inquirer';
import * as mathFunc from "./mathFunctions.js"
import chalk from "chalk";

let userInArray = [
    {
        name : "firstOperand",
        type : "number",
        message : "Enter your first operand"
    },
    {
        name : "Operator",
        message : "Please select operator",
        type : "list",
        choices: ['+','-','x','/','%']
    },
    {
        name : "secondOperand",
        type : "number",
        message : "Enter your second operand"
    }
]

let a;
console.log(chalk.blue("Welcome to Calculator"));
do{
    let userIn = await inquirer.prompt(userInArray)
switch(userIn.Operator){
    case "+":{
        console.log(`${userIn.firstOperand} + ${userIn.secondOperand} = ${mathFunc.addition(userIn.firstOperand,userIn.secondOperand)}`);
        break;  
    }
    case "-":{
        console.log(`${userIn.firstOperand} - ${userIn.secondOperand} = ${mathFunc.subtraction(userIn.firstOperand,userIn.secondOperand)}`);
        break;  
    }
    case "x":{
        console.log(`${userIn.firstOperand} x ${userIn.secondOperand} = ${mathFunc.multiplication(userIn.firstOperand,userIn.secondOperand)}`);
        break;  
    }
    case "/":{
        console.log(`${userIn.firstOperand} / ${userIn.secondOperand} = ${mathFunc.division(userIn.firstOperand,userIn.secondOperand)}`);
        break;  
    }
    case "%":{
        console.log(`${userIn.firstOperand} % ${userIn.secondOperand} = ${mathFunc.modulus(userIn.firstOperand,userIn.secondOperand)}`);
        break;  
    }
}
a = await inquirer.prompt(
    {
        name : "calAgain",
        message : "Press Y to continue and N to end the process",
        type : "input"
    }
)
}while(a.calAgain == "y" || (a.calAgain).toUpperCase() == "Y")