#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}

async function welcome(){
    let rainbow = chalkAnimation.rainbow("Welcome to Number Guessing");
    await sleep();
    rainbow.stop()
}

await welcome();

type ansType = {
    userGuess: number
}

const systemNo = Math.floor(Math.random() * 10);

const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",     
    }
])

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemNo, "System")

if(userGuess === systemNo){
    console.log("Your Guess is correct");
}
else{
    console.log("Try Again");
}
