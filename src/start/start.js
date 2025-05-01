import process from "node:process"
import { exit, stdin, env } from "node:process"


import { getGreeting } from "../utils.js";
import { goUp } from "../nwd/up.js";

const userName = env.npm_config_username;


const sayWelcome = () => {
    console.log(getGreeting(userName, 'welcome'))    
    stdin.on('data', (chunk) => {
        if(chunk.toString().trim() === '.exit'){
            console.log(getGreeting(userName, 'goodbye')) 
            exit(1)
        }
        if(chunk.toString().trim() === 'up'){
            goUp()
        }
    });
    process.on('SIGINT', () => {
        console.log(getGreeting(userName, 'goodbye'))  
    })
}

sayWelcome();