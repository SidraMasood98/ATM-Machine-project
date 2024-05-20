#! /usr/bin/env node

import inquirer from "inquirer";

console.log("welcome sidra Masood");

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
       {
           name : "pin",
           message : "enter your pin",
           type : "number"
       }
    ]
); 

if (pinAnswer.pin === myPin){
    console.log("correct pin code!!");



let operationsAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type : "list",
            choices : ["withdraw", "check balance"]

        }
    ]
);


if (operationsAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name : "amount",
                message: "enter your amount",
                type : "list",
                choices: [1000, 2000, 5000, 10000,12000]
            }
        ]
    );

    if(myBalance < amountAns.amount){
        console.log("insufficient balance")
       } else{myBalance -= amountAns.amount

console.log (`your current balance is : ${myBalance}`)
       }

}else if (operationsAns.operation === "check balance") {
    console.log(`your balance is :${myBalance}`)
}

}
else {
    console.log("incorrect pin number");
}