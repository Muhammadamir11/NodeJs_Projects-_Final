import {differenceInSeconds} from "date-fns"
import inquirer from "inquirer"


let timeer = (targetDate:Date) => {
    const inter = setInterval(()=>{
        let currentDate = new Date();
        let difference = targetDate.getTime() - currentDate.getTime()

    if(difference <= 0){
        console.log(difference);     
        clearInterval(inter);
        console.log("time is ended") 
    }
    else{
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }
},1000)
}

async function main() {
    const datePrompt = await inquirer.prompt([
      {
        type: 'input',
        name: 'targetDate',
        message: 'Enter the target date and time (e.g., "YYYY-MM-DD HH:mm:ss"):',
      },
    ]);
    const targetDate = new Date(datePrompt.targetDate);  
    return targetDate;
}

let targetDate = await main();

timeer(targetDate)