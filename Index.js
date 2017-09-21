const inquirer = require("Inquirer")
const chalk = require("Chalk")
const confirm = require('inquirer-confirm');
const figlet = require('figlet')

console.log(figlet.textSync('Mightys PIZZA', {
    font: 'Dancing Font',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

let question = [{
        name: 'size',
        type: 'list',
        choices: ['Small', 'Medium', 'Large'], 
        message: "What size would you like?", 
    },
    {
        name: 'toppings',
        type: 'checkbox',
        choices: ['Cheese', 'Sausge', 'Peppers', 'Pineapple', 'Pepperoni'],
        message: "Select toppings ",  
    },
    {
        name: 'cut',
        type: 'list',
        choices: ['Square', 'Triangle'],
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
       inquirer.prompt(question).then(confirm);
       })

});


