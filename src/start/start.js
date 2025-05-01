import process from "node:process"
import { exit, stdin, env } from "node:process"


import { getGreeting } from "../utils.js";
import { goUp } from "../nwd/up.js";
import { doCD } from "../nwd/cd.js";

const userName = env.npm_config_username;


const sayWelcome = () => {
    console.log(getGreeting(userName, 'welcome')) 

    stdin.on('data', (chunk) => {
        const stringChunk = chunk.toString().trim()
        if(stringChunk === '.exit'){
            console.log(getGreeting(userName, 'goodbye')) 
            exit(1)
        }
        if(stringChunk === 'up'){
            goUp()
        }
        if(stringChunk.startsWith('cd')){
            doCD(stringChunk.split(' ')[1])
        }
    });
    process.on('SIGINT', () => {
        console.log(getGreeting(userName, 'goodbye'))  
    })
}

sayWelcome();