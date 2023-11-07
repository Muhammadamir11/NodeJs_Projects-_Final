import inquirer from "inquirer"
import {el, faker}  from '@faker-js/faker'

interface User {
    userID: number,
    userPin: number
}

interface ATMdetails {
    accType : string,
    tranType: string,
    tranAmount: number,
    balance: number
}

let userRecord:User[] = [
    {
        "userID" : 10,
        "userPin" : 1234
    },
    {
        "userID" : 11,
        "userPin" : 4321
    },
    {
        "userID" : 12,
        "userPin" : 4567
    },
    {
        "userID" : 13,
        "userPin" : 7654
    },
    {
        "userID" : 14,
        "userPin" : 7891
    },
]


let getUser = async() => {
    let newUser:User = await inquirer.prompt([
        {
            name: "userID",
            type: "number",
            message: `Enter Your ID`
        },
        {
            name: "userPin",
            type: "number",
            message: `Enter Your Pin`
        }
    ])
    return newUser;
}

let check:boolean = false;

let checkUser = (userRecord:User[],user:User) => {
    userRecord.forEach((ele)=>{
        if(user.userID === ele.userID && user.userPin === ele.userPin){
            check = true;       
        }
    })
}



async function atmfunc() {
    let atmdetails:ATMdetails = await inquirer.prompt([
        {
            type : `list`,
            choices: ['Current','Saving'],
            message: "Select Your Account Type",
            name : 'accType'
        },
        {
            type : "list",
            choices: ['Fast Cash','Cash Withdraw','Balance Inquiry','Exit'],
            message: "Select Your Transaction Type",
            name : 'tranType',
        },
        {
            type : "list",
            choices: [1000,3000,5000,10000],
            message: "Select Your Transaction Amount",
            name : 'tranAmount',
            when(answer) {
                return (answer.tranType == 'Fast Cash')
            },
        },
        {
            type : "number",
            message: "Enter Your Transaction Amount",
            name : 'tranAmount',
            when(answer) {
                return (answer.tranType == 'Cash Withdraw')
            },
        }
    ])    
    return atmdetails; 
}

let userCont = async () => {
    let a = await inquirer.prompt({
        name : "cont",
        type: "input",
        message: "Do you want to continue"
    })
    return a;
}

let user = await getUser(); 
      
checkUser(userRecord,user);
let cont;

do {
    if (check) {

        let a = await atmfunc();
        a.balance = Math.floor(Math.random() * 10000);

        if (a.tranType == "Cash Withdraw" || a.tranType == "Fast Cash") {
            if (a.tranAmount <= a.balance) {
                console.log(`Collect Your ${a.tranAmount} cash`);
            }
            else {
                console.log(`Insufficient amount, Please recharge your account`);
            }
            cont = await userCont();
        }
        else if (a.tranType == "Balance Inquiry") {
            console.log(`Your current balance is ${a.balance}`);
        }
        else {
            console.log("Thank You");
        }
    }
} while (cont?.cont == "Y")




