import process from "node:process"
import { exit, stdin, env, argv } from "node:process"



import { getGreeting } from "../utils.js";
import { goUp } from "../nwd/up.js";
import { doCD } from "../nwd/cd.js";
import { getListOfContentDirectory } from "../nwd/ls.js";
import { readFile } from "../basic/cat.js";
import { createEmptyFile } from "../basic/createEmptyFile.js";
import { createNewDir } from "../basic/createNewDir.js";
import { renameFile } from "../basic/renameFile.js";

const userName = env.npm_config_username ?env.npm_config_username: argv[2].split('=')[1] ;

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
        if(stringChunk ==='ls' ){
            getListOfContentDirectory()
        }
        if(stringChunk.startsWith('cat')){
            readFile(stringChunk.split(' ')[1])
        }
        if(stringChunk.startsWith('add')){
            createEmptyFile(stringChunk.split(' ')[1])
        }
        if(stringChunk.startsWith('mkdir')){
            createNewDir(stringChunk.split(' ')[1])
        }   
        if(stringChunk.startsWith('rename')){
            renameFile(stringChunk.split(' ')[1], stringChunk.split(' ')[2])
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