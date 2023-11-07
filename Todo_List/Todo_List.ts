import inquirer from "inquirer"

let todosList:string[] = [];

interface Data {
    todo : string,
    addMore : boolean
}

let data:Data;

do{
    data = await inquirer.prompt([
    {
        name : "todo",
        type : "input",
        message : "Please Enter your todo item"
    },
    {
        name : "addMore",
        type : "confirm",
        message : "Do you want to Add More items?"
    }
])

if(todosList){
    todosList.push(data.todo)
}

}while(data.addMore == true)

console.log(`Your Todo List Items are listed as`);
todosList.forEach((element)=>console.log(`${element}`));
