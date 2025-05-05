import { error } from "node:console";
import constants from "node:constants";
import { createReadStream, access } from "node:fs"
import { isAbsolute, resolve } from "node:path";
import { homedir } from 'node:os'

export const readFile = async(path) => {
    isAbsolute(path)? path : resolve(homedir(), path)
    if(access(path, constants.F_OK, (err) => console.error(err))){
        try{
           const rs = createReadStream(path)
           rs.on('data',(chunk) => {
            console.log(chunk.toString())
            });
        }catch(err){
            console.error('Operation failed', error)
        }
    }
       
}