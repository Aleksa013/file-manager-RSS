import process from "node:process"
import { exit, stdin, env, argv } from "node:process"

// import { commands, onePathCommands, twoPathsCommands } from "../commands/commands.js";
import { getGreeting , checkPrompt, getRelativePath} from "../utils.js";
import { goUp } from "../nwd/up.js";
import { doCD } from "../nwd/cd.js";
import { getListOfContentDirectory } from "../nwd/ls.js";
import { readFile } from "../basic/cat.js";
import { createEmptyFile } from "../basic/createEmptyFile.js";
import { createNewDir } from "../basic/createNewDir.js";
import { renameFile } from "../basic/renameFile.js";
import { copyFile } from "../basic/copyFile.js";
import { deleteFile } from "../basic/deleteFile.js";
import { calculateHash } from "../hash/calculateHash.js";
import { compressFile } from "../compressOperations/compress.js";
import { decompressFile } from "../compressOperations/decompress.js";


const userName = env.npm_config_username ?env.npm_config_username: argv[2].split('=')[1] ;

const processRequest = async() => {
    stdin.on('data', (chunk) => {
        const stringChunk = chunk.toString().trim()
        if(!checkPrompt(stringChunk)){
            console.error('Invalid input!')
        } else {
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
            readFile(getRelativePath(stringChunk.split(' ')[1]))
        }
        if(stringChunk.startsWith('add')){
            createEmptyFile(getRelativePath(stringChunk.split(' ')[1]))
        }
        if(stringChunk.startsWith('mkdir')){
            createNewDir(getRelativePath(stringChunk.split(' ')[1]))
        }   
        if(stringChunk.startsWith('rename')){
            renameFile(getRelativePath(stringChunk.split(' ')[1]),getRelativePath(stringChunk.split(' ')[2]))
        }     
        if(stringChunk.startsWith('cp')){
            copyFile(getRelativePath(stringChunk.split(' ')[1]),getRelativePath(stringChunk.split(' ')[2]))
        }   
        if(stringChunk.startsWith('mv')){
            copyFile(getRelativePath(stringChunk.split(' ')[1]),getRelativePath(stringChunk.split(' ')[2]), 'move')
            deleteFile(getRelativePath(stringChunk.split(' ')[1]))
        }
        if(stringChunk.startsWith('rm')){
            deleteFile(getRelativePath(stringChunk.split(' ')[1]))
        }
        if(stringChunk.startsWith('hash')){
            calculateHash(getRelativePath(stringChunk.split(' ')[1]))
        }
        if(stringChunk.startsWith('compress')){
            compressFile(getRelativePath(stringChunk.split(' ')[1]),getRelativePath(stringChunk.split(' ')[2]))
        }
        if(stringChunk.startsWith('decompress')){
            decompressFile(getRelativePath(stringChunk.split(' ')[1]),getRelativePath(stringChunk.split(' ')[2]))
        }
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