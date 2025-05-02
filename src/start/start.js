import process from "node:process"
import { exit, stdin, env } from "node:process"



import { getGreeting, getLocation } from "../utils.js";
import { goUp } from "../nwd/up.js";
import { doCD } from "../nwd/cd.js";
import { getListOfContentDirectory } from "../nwd/ls.js";

const userName = env.npm_config_username;

const processRequest = async() => {
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
        if(stringChunk.startsWith('ls')){
            getListOfContentDirectory()
        }

        
    });
    process.on('SIGINT', () => {
        console.log(getGreeting(userName, 'goodbye')) 
    })
}

const managerApp = () => {
    console.log(getGreeting(userName, 'welcome')) 
    try{
        processRequest();
    }catch(error){
        console.error('Operation failed')
        processRequest();
    }
    
}

managerApp();