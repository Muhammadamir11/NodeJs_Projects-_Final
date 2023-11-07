import inquirer from "inquirer"

//input from user
async function userInPara() {
    let paragraph = await inquirer.prompt({
        name : 'paragraph',
        type : "input",
        message : `Enter a paragraph`
    })
    return paragraph;    
}


//Finding words
function wordCounter(params:string) {
    let userParaString = params;
    const userParaArray = userParaString.trim().split(/\s+/g);
    console.log(`Number of Word Count in the Paragraph = ${userParaArray.length}`);        
}


//Finding Charactors
async function charCounter(params:string) {
    let char:number = 0;
    let userParaArray = params.trim().split(/\s+/g).forEach((ele)=>{
        char += ele.length;
    });  
    console.log(`Number of Charactors in the Paragraph = ${char}`);        
}


//Main Part
let userData = await userInPara();
wordCounter(userData.paragraph);
charCounter(userData.paragraph);