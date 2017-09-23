/* 
Developer:  Perry Ellis
Program:    Inquirer
Purpose:    Pizza store, will alow a user to build a pizza will then return the order and have the user confirm if its correct.
*/
const inquirer = require("Inquirer")
const chalk = require("Chalk")
const confirm = require('inquirer-confirm');
const figlet = require('figlet')

//Will add the figlet logo for my pizza store
console.log(figlet.textSync('Mightys PIZZA', {
    font: 'Dancing Font',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));
//will start my list of questions for the order and store the answer
let question = [{
    //will get the pizza size from customer
        name: 'size',
        type: 'list',
        choices: ['Small', 'Medium', 'Large'], 
        message: "What size would you like?", 
    },
    {//will get the toppings from customer
        name: 'toppings',
        type: 'checkbox',
        choices: ['Cheese', 'Sausge', 'Peppers', 'Pineapple', 'Pepperoni'],
        message: "Select toppings ",  
    },
    {//will get the sauce choose from customer
        name: 'sauce',
        type: 'list',
        choices: ['Tomato', 'Pesto'],
        message: 'What kind of sauce would you like?',
    },  
    {//will get the cut choose from customer
        name: 'cut',
        type: 'list',
        choices: ['Square', 'Triangle'],
        message: 'How would you like your pizza cut?',
    },  
]
//will send the answers to be returned
inquirer.prompt(question).then(function ({size, toppings, sauce, cut}){
    //will display the users order
    console.log( ("\n") + (chalk.green('Your Pizza Order: ')) + ("\n") + (chalk.yellow(' Pizza Size: ' + size)) + ("\n") + (chalk.blue(' Toppings orderd: ' + toppings)) + ("\n") + (chalk.magenta(' Pizza sauce: ' + sauce)) + ("\n") + (chalk.red(' Pizza cut: ' + cut)))
   
    //will confirm if the users order is correct        I orginally had it like the first questions but i was having problems geting the order to repet if it was wrong then realized i didnt need that so i left it
    confirm('Is your order correct? ')
   .then(function confirmed(){//if order is correct will display message
       console.log('Great your order is being processed');
   }, function cancelled(){//if order is wrong will display message
       console.log('Sorry for the mix up!')
       })

});


