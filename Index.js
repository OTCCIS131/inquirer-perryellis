const inquirer = require("Inquirer")
const chalk = require("Chalk")
const confirm = require('inquirer-confirm');




console.log('Welcome to Mightys Pizza')

let question = [{
        name: 'size',
        message: 'What size of pizza do you want?',   
    },
    {
        name: 'toppings',
        message: "What toppings would you like?",  
    },
    {
        name: 'cut',
        message: 'How would you like your pizza cut?',
    },  
]

inquirer.prompt(question).then(function ({size, toppings, cut}){
    //Console.log(answers)
    console.log( ("\n") + (chalk.green('Your Pizza Order: ')) + ("\n") + (chalk.yellow(' Pizza Size: ' + size)) + ("\n") + (chalk.blue(' Toppings orderd: ' + toppings)) + ("\n") + (chalk.red(' Pizza cut: ' + cut)))
   
    confirm('Is your order correct? ')
    .then(function confirmed(){
        console.log('Great your order is being processed');
    }, function cancelled(){
        inquirer.prompt(question);
        })
        
});


