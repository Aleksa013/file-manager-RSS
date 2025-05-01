import process from "node:process"
import { argv, exit, stdin } from "node:process"


const sayWelcome = () => {
   const userName =  argv.toSpliced(0,2).filter((arg)=> {
    if(arg.startsWith('--username')){
        return arg
    }
    })
    console.log(`Welcome to the File Manager, ${userName[0].split('=')[1]}!`)    
    stdin.on('data', (chunk) => {
        if(chunk.toString().trim() === '.exit'){
            console.log(`Thank you for using File Manager,${userName[0].split('=')[1]}, goodbye!`) 
            exit(1)
        }
    });

    process.on('SIGINT', () => {
        console.log(`Thank you for using File Manager,${userName[0].split('=')[1]}, goodbye!`)  
    })
}

sayWelcome();