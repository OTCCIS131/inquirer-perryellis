const inquirer = require("Inquirer")
const chalk = require("Chalk")

let question = [
   
    {
        name: 'size',
        message: 'What size of pizza do you want?',
    },

    {
        name: 'Toppings'
    }
]

inquirer.prompt(question).then(function (answers){
    Console.log(answers)
}

