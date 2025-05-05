
import { createReadStream, createWriteStream } from "node:fs"
import { isAbsolute, resolve } from "node:path"
import { cwd } from 'node:process'
import { pipeline } from "node:stream/promises"
import { getLocation } from "../utils.js"


export const copyFile = async(pathOldFile, pathNewFile, mode = 'copy') => {
   const newPath =  isAbsolute(pathNewFile)? pathNewFile: resolve(cwd(), pathNewFile)
    const oldPath = isAbsolute(pathOldFile)? pathOldFile: resolve(cwd(), pathOldFile)
   try{
    const rs = createReadStream(oldPath)
    const ws = createWriteStream(newPath)
   await pipeline(rs, ws);
    mode === 'move'? '': getLocation()
   
   }catch{
    console.error('Operation failed')
   }
}