import constants from "node:constants";
import { access } from "node:fs/promises"
import { createReadStream } from "node:fs"
import { relative } from "node:path";
import { cwd } from "node:process";
import { getLocation } from './../utils.js'


export const readFile = async(path) => {
    const fullPath = relative(cwd(), path) === path ? cwd()+'\\'+ path : relative(cwd(), path)  
        try{
          await access(fullPath, constants.R_OK)
          const rs = createReadStream(fullPath)
          rs.on('data', (chunk) => {
            console.log(chunk.toString())
            getLocation();
          })
          
        }catch{
            throw new Error('Operation failed')
        }
    
       
}