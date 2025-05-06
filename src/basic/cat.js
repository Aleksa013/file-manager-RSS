import constants from "node:constants";
import { access } from "node:fs/promises"
import { createReadStream } from "node:fs"
import { getLocation } from './../utils.js'


export const readFile = async(path) => {
        try{
          await access(path, constants.R_OK)
          const rs = createReadStream(path)
          rs.on('data', (chunk) => {
            console.log(chunk.toString())
            getLocation();
          })          
        }catch{
            console.error('Operation failed')
        }
    
       
}