import inquirer from "inquirer"
import chalk from "chalk"

let againFlag = true;
let score = 0;
let oneMin = 0;
let round = await inquirer.prompt(
    {
        name : "roundSel",
        type : "list",
        choices : ['1','2','3'],
        message : "Select any one round to start game"
    })
let time = new Date();
//console.log(time.getTime());
switch(round.roundSel){
    case "1":{
        oneMin = Number(time.getTime()) + 60000;
        console.log(chalk.overline("Welcome to Number Guessing Game Round 1")); 
        break;
    }
    case "2":{
        oneMin = Number(time.getTime()) + 120000;
        console.log(chalk.overline("Welcome to Number Guessing Game Round 2"));
        break; 
    }
    case "3":{
        oneMin = Number(time.getTime()) + 180000;
        console.log(chalk.overline("Welcome to Number Guessing Game Round 3"));
        break; 
    }
}

do{
    if (Number(new Date().getTime()) <= oneMin){
        let compNum: string | number = Math.random()*100;
        compNum = String(compNum.toFixed());
        let userGuess = await inquirer.prompt(
        {
            name : "userIn",
            type : "number",
            message : "Guess a number b/w 1 to 100"
        })
        console.log("comp = ",compNum);
    
        if (userGuess.userIn == compNum){
            console.log("You Win");
            score += 1;
            //againFlag = true;
        }
        else{
            console.log("Try Again");
            //againFlag = true;
        }
    }
    else{
        console.log("Game is over");
        console.log("your score is : ", score);
        againFlag = false;
    }      
}while(againFlag)