import inquirer from "inquirer"
import chalk from "chalk";
class Player{
    name : string;
    fuel: number = 100;
    constructor (name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }

    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent {
    fuelDecrease() {
        throw new Error("Method not implemented.");
    }
    name : string;
    fuel: number = 100;
    constructor (name:string){
        this.name = name;
    }
}

let player = await inquirer.prompt({
    type : "input",
    name: "name",
    message: "Enter your name"
})

console.log(player.name);


let Oponent = await inquirer.prompt({
    type: "list",
    name: "Select",
    message: "Select your oponent",
    choices: ['skelaton','Assassin','Zombia']
})

console.log(Oponent.s);

let p1 = new Player(player.name)
let o1 = new Opponent(Oponent.Select)

do{
//Skelaton
if (Oponent.Select == "Skelaton"){
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "select your Opponent",
        choices: ['Attack','Drink Portion','Run for your life']
    })

    if(ask.opt == "Attack"){
        let num = Math.floor(Math.random()*2)
        if (num > 0){
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0){
                console.log(chalk.red.bold.italic("you loose, better luck next time"));
            }
        }
        if(num<= 0){
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (o1.fuel <= 0){
                console.log(chalk.green.bold.italic("you Win"));
                process.exit()
            }
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You drink health portion, your fuel is ${p1.fuel}`));
    }
    if(ask.opt == "Run for your life"){
        console.log(chalk.red.bold.italic("you loose, Better luck next time"));
        process.exit()
    }
}

//assassin
if (Oponent.Select == "Assassin"){
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "select your Opponent",
        choices: ['Attack','Drink Portion','Run for your life']
    })

    if(ask.opt == "Attack"){
        let num = Math.floor(Math.random()*2)
        if (num > 0){
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0){
                console.log(chalk.red.bold.italic("you loose, better luck next time"));
            }
        }
        if(num<= 0){
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (o1.fuel <= 0){
                console.log(chalk.green.bold.italic("you Win"));
                process.exit()
            }
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You drink health portion, your fuel is ${p1.fuel}`));
    }
    if(ask.opt == "Run for your life"){
        console.log(chalk.red.bold.italic("you loose, Better luck next time"));
        process.exit()
    }
}

//Zombie
if (Oponent.Select == "Zombia"){
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "select your Opponent",
        choices: ['Attack','Drink Portion','Run for your life']
    })

    if(ask.opt == "Attack"){
        let num = Math.floor(Math.random()*2)
        if (num > 0){
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0){
                console.log(chalk.red.bold.italic("you loose, better luck next time"));
            }
        }
        if(num<= 0){
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (o1.fuel <= 0){
                console.log(chalk.green.bold.italic("you Win"));
                process.exit()
            }
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You drink health portion, your fuel is ${p1.fuel}`));
    }
    if(ask.opt == "Run for your life"){
        console.log(chalk.red.bold.italic("you loose, Better luck next time"));
        process.exit()
    }
}


}while(true)
